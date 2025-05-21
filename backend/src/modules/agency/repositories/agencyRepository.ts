import Agency, { IAgency } from "../../../database/models/agency";


const createAgency = async (AgencyData: IAgency) => {
  return await Agency.create(AgencyData);
};
const findAgencyById = async (id: string) => {
  return await Agency.findById(id);
};
const updateAgency = async (id: string, AgencyData: IAgency) => {
  return await Agency.findByIdAndUpdate(id, AgencyData, { new: true });
};
const findAgencyByName = async (name: string) => {
  return await Agency.findOne({ name });
};
const findAllAgency = async () => {
  return await Agency.find();
};

const deleteAgency = async (id: string) => {
  return await Agency.findByIdAndDelete({ id });
};
export default {
  createAgency,
  findAllAgency,
  findAgencyById,
  updateAgency,
  deleteAgency,
  findAgencyByName,
};
