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
}
seed();

export default seed;
