import User from "../models/user";
import { hashPassword } from "../../helpers/auth";

const seedUsers = async () => {
  const users = [
    {
      firstName: "Inono",
      lastName: "Akima",
      email: "akimana.inono@gmail.com",
      password: await hashPassword("password123"),
      role: "admin",
    },
    {
      firstName: "Rwnda",
      lastName: "Inono",
      email: "inono.rwanda@gmail.com",
      password: await hashPassword("password123"),
      role: "agency",
    },
    {
        firstName: "Ireme",
        lastName: "Inono",
        email: "inonoireme@gmail.com",
        password: await hashPassword("password123"),
        role: "citizen",
      },
  ];

  await User.deleteMany({});
  await User.insertMany(users);
  console.log("Users seeded successfully.");
};

export async function unseedUsers() {
  await User.deleteMany({});
  console.log("Users removed successfully.");
}

export default seedUsers;
