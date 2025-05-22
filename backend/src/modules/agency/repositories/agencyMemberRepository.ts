import AgencyMember, { IAgencyMember } from "../../../database/models/agencyMember";

const createAgencyMember = async (AgencyMemberData: any) => {
  return await AgencyMember.create(AgencyMemberData);
};
const findAgencyMemberById = async (id: any) => {
  return await AgencyMember.findById(id).populate("userId").populate("agencyId");
};
const updateAgencyMember = async (id: string, AgencyMemberData: IAgencyMember) => {
  return await AgencyMember.findByIdAndUpdate(id, AgencyMemberData, { new: true });
};
const findAgencyMemberByName = async (name: string) => {
  return await AgencyMember.findOne({ name });
};
const findAgencyMemberByUserId = async (userId: any) => {
  return await AgencyMember.findOne({ userId });
};
const findAllAgencyMember = async () => {
  return await AgencyMember.find().populate("userId").populate("agencyId");
};
const findAllAgencyMemberAgency = async (agencyId:any) => {
  return await AgencyMember.find({agencyId}).populate("userId").populate("agencyId");
};


const deleteAgencyMember = async (id: string) => {
  return await AgencyMember.findByIdAndDelete(id);
};
export default {
  createAgencyMember,
  findAllAgencyMember,
  findAgencyMemberById,
  updateAgencyMember,
  deleteAgencyMember,
  findAgencyMemberByName,
  findAgencyMemberByUserId,
  findAllAgencyMemberAgency
};
