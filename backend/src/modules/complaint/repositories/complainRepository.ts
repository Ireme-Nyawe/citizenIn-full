import Complaint, { IComplaint } from "../../../database/models/complaint";

const createComplaint = async (ComplaintData: IComplaint) => {
  return await Complaint.create(ComplaintData);
};
const findComplaintById = async (id: any) => {
  return await Complaint.findById(id).populate("userId").populate("agencyId").populate("categoryId");
};
const updateComplaint = async (id: string, ComplaintData: IComplaint) => {
  return await Complaint.findByIdAndUpdate(id, ComplaintData, { new: true });
};
const findComplaintByattributes = async (title: string,agencyId:any) => {
  return await Complaint.findOne({ name });
};
const findAllComplaint = async () => {
  return await Complaint.find().populate("userId").populate("agencyId").populate("categoryId");
};

const deleteComplaint = async (id: string) => {
  return await Complaint.findByIdAndDelete(id);
};
export default {
  createComplaint,
  findAllComplaint,
  findComplaintById,
  updateComplaint,
  deleteComplaint,
  findComplaintByattributes,
};
