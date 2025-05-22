import User from "../models/user";
import { hashPassword } from "../../helpers/auth";

const seedUsers = async () => {
  const users = [
    {
      firstName: "demo",
      lastName: "user",
      email: "demouser@gmail.com",
      password: await hashPassword("password123"),
      role: "admin",
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
