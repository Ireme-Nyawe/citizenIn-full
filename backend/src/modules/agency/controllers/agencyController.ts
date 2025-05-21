import { Request, Response } from "express";
import httpStatus from "http-status";
import agencyRepository from "../repositories/agencyRepository";
const createAgency = async (req: Request, res: Response) => {
    try {
        const AgencyData = req.body
      const Agency = await agencyRepository.createAgency(AgencyData);
  
      res.status(httpStatus.CREATED).json({
        status: httpStatus.CREATED,
        message: "Agency Agency Added SuccessFully!",
        data:Agency,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };
  const findAgencyById = async (req: Request, res: Response) => {
    try {

      res.status(httpStatus.CREATED).json({
        status: httpStatus.CREATED,
        message: "Agency retrieved ",
        data:req.agency,
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
  const updateAgency= async (req: Request, res: Response) => {
    try {
        const AgencyData = req.body
        const {id} = req.params;
        const Agency = await agencyRepository.updateAgency(id,AgencyData)
      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Agency Updated Successfully!",
        data:Agency,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };

  const deleteAgency= async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const Agency = await agencyRepository.deleteAgency(id)
      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Agency Updated Successfully!",
        data:Agency,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };

export default {createAgency,findAllAgencies,findAgencyById,updateAgency,deleteAgency}
  
  
  
