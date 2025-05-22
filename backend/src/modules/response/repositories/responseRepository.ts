import Response, { IResponse } from "../../../database/models/response";

const createResponse = async (ResponseData: IResponse) => {
  return await Response.create(ResponseData);
};
const findResponseById = async (id: string) => {
  return await Response.findById(id);
};
const updateResponse = async (id: string, ResponseData: IResponse) => {
  return await Response.findByIdAndUpdate(id, ResponseData, { new: true });
};
const findResponseByName = async (message: string,complaintId:any) => {
  return await Response.findOne({ message,complaintId });
};
const findAllResponse = async () => {
  return await Response.find();
};
const findAllResponseComplaint = async (complaintId:any) => {
    return await Response.find({complaintId}).populate("responderId");
  };

const deleteResponse = async (id: string) => {
  return await Response.findByIdAndDelete(id);
};
export default {
  createResponse,
  findAllResponse,
  findResponseById,
  updateResponse,
  deleteResponse,
  findResponseByName,
  findAllResponseComplaint
};
