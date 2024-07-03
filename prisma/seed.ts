import prisma from "../src/lib/prisma";

async function main() {
 const locations = await prisma.location.createMany({
    data: [
        {
            id: "7c4e3e32-1c8d-4e4e-8e4f-8b8d8f8e8d8c",
            city: "Jimbaran",
            province: "Bali",
            country: "Indonesia"
        },
        {
            id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
            city: "Kuta",
            province: "Bali",
            country: "Indonesia"
        }
    ]
});

const categories = await prisma.category.createMany({
    data: [
        {   
            id: "550e8400-e29b-41d4-a716-446655440000",
            name: "Surfing",
            description: "Aktivitas menyenangkan di pantai dengan menunggangi ombak"
        },
        {
            id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
            name: "Diving",
            description: "Menyelam di dasar laut untuk menikmati keindahan bawah air"
        }
    ]
});

const owners = await prisma.owner.createMany({
    data: [
        {
            id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
            name: "PT. Sinarwangi Melati",
            email: "partner@sinarwangimelati.com",
            phone: "+62021931331",
            address: "Jl. T.B Simatupang No 13 Jakarta Selatan.",
            city: "DKI Jakarta",
            country: "Indonesia",
            postalCode: "41422"
        },
        {
            id: "550e8400-e29b-41d4-a716-446655440000",
            name: "CV. Bintang Timur",
            email: "info@bintangtimur.co.id",
            phone: "+62361123456",
            address: "Jl. Raya Kuta No. 88",
            city: "Kuta",
            country: "Indonesia",
            postalCode: "80361"
        }
    ]
});

const destinations = await prisma.destination.createMany({
    data: [
        {
            name: "Wisata Snorkeling Gili Trawangan",
            description: "Menjelajahi keindahan bawah laut Gili Trawangan",
            street: "Jl. Gili Trawangan Utara",
            city: "Gili Trawangan",
            province: "Nusa Tenggara Barat",
            country: "Indonesia",
            postalCode: "83352",
            ticketPrice: 350000,
            openHour: "08.00",
            closeHour: "16.00",
            categoryId: "550e8400-e29b-41d4-a716-446655440000",
            ownerId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
            locationId: "7c4e3e32-1c8d-4e4e-8e4f-8b8d8f8e8d8c"
        },
        {
            name: "Wisata Diving Bunaken",
            description: "Menyelam di taman laut terindah di Indonesia",
            street: "Jl. Bunaken Timur",
            city: "Bunaken",
            province: "Sulawesi Utara",
            country: "Indonesia",
            postalCode: "95242",
            ticketPrice: 500000,
            openHour: "07.00",
            closeHour: "17.00",
            categoryId: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
            ownerId: "550e8400-e29b-41d4-a716-446655440000",
            locationId: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
        }
    ]
});
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });