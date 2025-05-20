import Session, { ISession } from "../../../database/models/session";
import User, { IUser } from "../../../database/models/user";

const findUserByAttribute = async (email: string) => {
  return await User.findOne({ email });
};
const saveSession = async (userId: string, content: string) => {
  return await Session.create({ userId, content });
};
const findSessionByTwoAttributes = async (
  key1: string,
  value1: string,
  key2: string,
  value2: string
) => {
  return await Session.findOne({ [key1]: value1, [key2]: value2 });
};
const findSessionByOneAtribute = async (
    key1: string,
    value1: string,
  ) => {
    return await Session.findOne({ [key1]: value1});
  };
const findUserById = async (id: string) => {
  return await User.findById(id);
};
const deleteSession = async (_id: any) => {
  return await Session.findByIdAndDelete(_id);
};
const updateUser = async (id:any , data: any) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

export default {
  findUserByAttribute,
  saveSession,
  findSessionByTwoAttributes,
  findUserById,
  deleteSession,
  updateUser,
  findSessionByOneAtribute
};
