import { Request, Response } from "express";
import httpStatus from "http-status";
import agencyMemberRepository from "../repositories/agencyMemberRepository";
const createAgencyMember = async (req: Request, res: Response) => {
    try {
        const AgencyMemberData = req.body
      const AgencyMember = await agencyMemberRepository.createAgencyMember(AgencyMemberData);
  
      res.status(httpStatus.CREATED).json({
        status: httpStatus.CREATED,
        message: "AgencyMember AgencyMember Added SuccessFully!",
        data:AgencyMember,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };
  const findAgencyMemberById = async (req: Request, res: Response) => {
    try {

      res.status(httpStatus.CREATED).json({
        status: httpStatus.CREATED,
        message: "AgencyMember retrieved ",
        data:req.agencyMember,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };
  const findAllAgencies= async (req: Request, res: Response) => {
    try {

      res.status(httpStatus.CREATED).json({
        status: httpStatus.CREATED,
        message: "Categories Retrieved",
        data:req.categories,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };
  const updateAgencyMember= async (req: Request, res: Response) => {
    try {
        const AgencyMemberData = req.body
        const {id} = req.params;
        const AgencyMember = await agencyMemberRepository.updateAgencyMember(id,AgencyMemberData)
      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "AgencyMember Updated Successfully!",
        data:AgencyMember,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };

  const deleteAgencyMember= async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const AgencyMember = await agencyMemberRepository.deleteAgencyMember(id)
      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "AgencyMember Deleted Successfully!",
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };

export default {createAgencyMember,findAllAgencies,findAgencyMemberById,updateAgencyMember,deleteAgencyMember}
  
  
  
