import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import complainRepository from "../modules/complaint/repositories/complainRepository";
import agencyRepository from "../modules/agency/repositories/agencyRepository";
import agencyMemberRepository from "../modules/agency/repositories/agencyMemberRepository";
complainRepository;
export const isComplaintExistById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  try {
    const Complaint = await complainRepository.findComplaintById(id);

    if (!Complaint) {
      res.status(httpStatus.NOT_FOUND).json({
        status: httpStatus.NOT_FOUND,
        message: "Complaint not found",
      });
      return;
    }

    req.complaint = Complaint;
    return next();
  } catch (error: any) {
    return next(error);
  }
};
export const isComplaintExistByName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { title,agencyId } = req.params;

  try {
    const Complaint = await complainRepository.findComplaintByattributes(title,agencyId);

    if (Complaint) {
      res.status(httpStatus.UNAUTHORIZED).json({
        status: httpStatus.UNAUTHORIZED,
        message: "Same Complaint Exist !",
      });
      return;
    }
    return next();
  } catch (error: any) {
    return next(error);
  }
};
export const isAnyComplaintExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const Complaint = await complainRepository.findAllComplaint();

    if (!Complaint) {
      res.status(httpStatus.NOT_FOUND).json({
        status: httpStatus.NOT_FOUND,
        message: "Complaint not found",
      });
      return;
    }

    req.complaints = Complaint;
    return next();
  } catch (error: any) {
    return next(error);
  }
};
export const isAnyAgencyComplaintExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
        const agency = await agencyMemberRepository.findAgencyMemberByUserId(req.user?._id)

      const Complaint = await complainRepository.findAllComplaintAgency(agency?._id);
  
      if (!Complaint) {
        res.status(httpStatus.NOT_FOUND).json({
          status: httpStatus.NOT_FOUND,
          message: "Complaint not found",
        });
        return;
      }
  
      req.complaints = Complaint;
      return next();
    } catch (error: any) {
      return next(error);
    }
  };
  export const isAnyCitizenComplaintExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const Complaint = await complainRepository.findAllComplaintCitizen(req.user?._id);
  
      if (!Complaint) {
        res.status(httpStatus.NOT_FOUND).json({
          status: httpStatus.NOT_FOUND,
          message: "Complaint not found",
        });
        return;
      }
  
      req.complaints = Complaint;
      return next();
    } catch (error: any) {
      return next(error);
    }
  };
