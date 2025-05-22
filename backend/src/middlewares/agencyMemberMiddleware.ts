import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import agencyMemberRepository from "../modules/agency/repositories/agencyMemberRepository";
export const isAgencyMemberExistById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  try {
    const AgencyMember = await agencyMemberRepository.findAgencyMemberById(id);

    if (!AgencyMember) {
      res.status(httpStatus.NOT_FOUND).json({
        status: httpStatus.NOT_FOUND,
        message: "AgencyMember not found",
      });
      return;
    }

    req.agencyMember = AgencyMember;
    return next();
  } catch (error: any) {
    return next(error);
  }
};
export const isAgencyMemberExistByName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.params;

  try {
    const AgencyMember = await agencyMemberRepository.findAgencyMemberByName(name);

    if (AgencyMember) {
      res.status(httpStatus.UNAUTHORIZED).json({
        status: httpStatus.UNAUTHORIZED,
        message: "Same AgencyMember Exist !",
      });
      return;
    }
    return next();
  } catch (error: any) {
    return next(error);
  }
};
export const isAnyAgencyMemberExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const AgencyMember = await agencyMemberRepository.findAllAgencyMember();

    if (!AgencyMember) {
      res.status(httpStatus.NOT_FOUND).json({
        status: httpStatus.NOT_FOUND,
        message: "AgencyMember not found",
      });
      return;
    }

    req.agencyMembers = AgencyMember;
    return next();
  } catch (error: any) {
    return next(error);
  }
};
