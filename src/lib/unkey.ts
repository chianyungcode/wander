export const UnkeyApiIdExist = () => {
  const apiId = process.env.UNKEY_API_ID;

  if (!apiId) {
    throw new Error("UNKEY_API_ID not exist");
  }

  return apiId;
};
