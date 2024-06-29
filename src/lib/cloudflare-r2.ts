import {
  CreateBucketCommand,
  GetObjectCommand,
  HeadBucketCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const uploadWithR2 = async (file: File, destinationId: string) => {
  const s3Client = new S3Client({
    endpoint: process.env.R2_ENDPOINT || "",
    region: "auto",
    credentials: {
      accessKeyId: process.env.R2_AWS_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.R2_AWS_SECRET_KEY_ACCESS || "",
    },
  });

  const bucketName = `bucket-${destinationId}`;

  // Check if bucket exists
  try {
    await s3Client.send(
      new HeadBucketCommand({
        Bucket: bucketName,
      }),
    );
  } catch (error) {
    if (error instanceof Error && error.name === "NotFound") {
      await s3Client.send(
        new CreateBucketCommand({
          Bucket: bucketName,
        }),
      );
    } else {
      throw error;
    }
  }

  const arrayBuffer = await file.arrayBuffer();

  // Generate unique name to avoid overwrite in R2 Storage
  const generateUniqueFileName = (originalFileName: string) => {
    const currentDate = new Date();

    const timestamp = currentDate
      .toISOString()
      .replace(/[-T:]/g, "")
      .slice(0, 14); // Generate timestamp in the format: '20240627T123045'
    const fileNameWithoutExtension = originalFileName.split(".")[0];
    const fileExtension = originalFileName.split(".").pop(); // Get the file extension

    const uniqueFileName = `${fileNameWithoutExtension}_${timestamp}.${fileExtension}`;

    return uniqueFileName;
  };

  const uniqueFileName = generateUniqueFileName(file.name);

  // Upload file to bucket
  await s3Client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: uniqueFileName,
      Body: Buffer.from(arrayBuffer),
    }),
  );

  // const presignedUrl = await getSignedUrl(
  //   s3Client,
  //   new GetObjectCommand({ Bucket: bucketName, Key: uniqueFileName }),
  //   { expiresIn: 60 * 60 * 24 * 7 }
  // );

  const url = `${process.env.PUBLIC_BUCKET_ACCESS_URL}/${uniqueFileName}`;

  return {
    bucketName,
    fileName: uniqueFileName,
    url,
  };
};
