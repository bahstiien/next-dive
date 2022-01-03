import { hashPassword } from "../models/user";

const db = require("../db");

async function seed() {
  await db.user.deleteMany();
  await db.user.create({
    data: {
      email: "bastien@website.com",
      role: "admin",
      hashedPassword: await hashPassword("verysecure"),
    },
  });

  await db.diveSession.deleteMany();
  await db.diveSession.createMany({
    data: [
      {
        date: "2022-03-19T14:21:00+02:00",
        boat: "Albatros",
        spot: "Parc naturel Marin",
        placesOnBoat: 12,
        meetingSpot: "Club des dauphins",
        miniLevel: "N2",
        price: 55,
        additionalInformation:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar massa vel tincidunt suscipit.",
      },
      {
        boat: "Albatros",
        spot: "Epave du vieux bateau",
        placesOnBoat: 11,
        meetingSpot: "Port de St Quay",
        price: 40,
        additionalInformation: "Lorem ipsum dolor sita vel tincidunt suscipit.",
      },
    ],
  });
}
seed();

export default seed;
