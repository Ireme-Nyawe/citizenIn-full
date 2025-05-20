import Session, { ISession } from "../../../database/models/session";
import User from "../../../database/models/user";

const findUserByAttribute = async (email:string) => {
    return await User.findOne({email});
  };
  const saveSession = async (userId:string, content:string) => {
    return await Session.create({userId,content})
  }

export default {findUserByAttribute,saveSession}