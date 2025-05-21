import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import agencyRepository from "../modules/agency/repositories/agencyRepository";
agencyRepository;
export const isAgencyExistById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  try {
    const Agency = await agencyRepository.findAgencyById(id);

    if (!Agency) {
      res.status(httpStatus.NOT_FOUND).json({
        status: httpStatus.NOT_FOUND,
        message: "Agency not found",
      });
      return;
    }

    req.agency = Agency;
    return next();
  } catch (error: any) {
    return next(error);
  }
};
export const isAgencyExistByName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.params;

  try {
    const Agency = await agencyRepository.findAgencyByName(name);

    if (Agency) {
      res.status(httpStatus.UNAUTHORIZED).json({
        status: httpStatus.UNAUTHORIZED,
        message: "Same Agency Exist !",
      });
      return;
    }
    return next();
  } catch (error: any) {
    return next(error);
  }
};
export const isAnyAgencyExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const Agency = await agencyRepository.findAllAgency();

    if (!Agency) {
      res.status(httpStatus.NOT_FOUND).json({
        status: httpStatus.NOT_FOUND,
        message: "Agency not found",
      });
      return;
    }

    req.agencies = Agency;
    return next();
  } catch (error: any) {
    return next(error);
  }
};
