import User, { IUser } from "../../../database/models/user";

const createUser= async(userData:any)=>{
    return User.create(userData);
}

export default{createUser}