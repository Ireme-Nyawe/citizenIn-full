import { Request, Response } from "express";
import httpStatus from "http-status";
import complainRepository from "../repositories/complainRepository";
const createComplaint = async (req: Request, res: Response) => {
    try {
        const ComplaintData = req.body
      const Complaint = await complainRepository.createComplaint(ComplaintData);
  
      res.status(httpStatus.CREATED).json({
        status: httpStatus.CREATED,
        message: "Complaint Complaint Added SuccessFully!",
        data:Complaint,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };
  const findComplaintById = async (req: Request, res: Response) => {
    try {

      res.status(httpStatus.CREATED).json({
        status: httpStatus.CREATED,
        message: "Complaint retrieved ",
        data:req.complaint,
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
  const updateComplaint= async (req: Request, res: Response) => {
    try {
        const ComplaintData = req.body
        const {id} = req.params;
        const Complaint = await complainRepository.updateComplaint(id,ComplaintData)
      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Complaint Updated Successfully!",
        data:Complaint,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };

  const deleteComplaint= async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const Complaint = await complainRepository.deleteComplaint(id)
      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Complaint Deleted Successfully!",
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };

export default {createComplaint,findAllAgencies,findComplaintById,updateComplaint,deleteComplaint}
  
  
  
