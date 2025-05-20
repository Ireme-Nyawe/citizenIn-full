import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
}
export const generateToken = async (_id: any) => {
  const jwtSecret = process.env.JWT_SECRET as string;
  return jwt.sign({ _id }, jwtSecret);
};

export const comparePassword = async (password: string, hashedPassword: any) => {
  return await bcrypt.compare(password, hashedPassword);
}
export const generateOTP = (): string => {
  const otp = Math.floor(Math.random() * 1000000);

  return otp.toString().padStart(6, '0');
}
