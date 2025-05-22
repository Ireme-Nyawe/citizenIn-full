import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import responseRepository from "../modules/response/repositories/responseRepository";
export const isResponseExistById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  try {
    const Response = await responseRepository.findResponseById(id);

    if (!Response) {
      res.status(httpStatus.NOT_FOUND).json({
        status: httpStatus.NOT_FOUND,
        message: "Response not found",
      });
      return;
    }

    req.response = Response;
    return next();
  } catch (error: any) {
    return next(error);
  }
};
export const isResponseExistByName = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { message,complaintId } = req.params;
  
    try {
      const Response = await responseRepository.findResponseByName(message,complaintId);
  
      if (Response) {
        res.status(httpStatus.UNAUTHORIZED).json({
          status: httpStatus.UNAUTHORIZED,
          message: "Same Response Exist !",
        });
        return;
      }
      return next();
    } catch (error: any) {
      return next(error);
    }
  };
  export const isAnyResponseExist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
  
    try {
      const Response = await responseRepository.findAllResponse();
  
      if (!Response) {
        res.status(httpStatus.NOT_FOUND).json({
          status: httpStatus.NOT_FOUND,
          message: "Response not found",
        });
        return;
      }
  
      req.responses = Response;
      return next();
    } catch (error: any) {
      return next(error);
    }
  };
  export const isAnyResponseExistComplaint = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
  
    try {
        const {complaintId}=req.params
      const Response = await responseRepository.findAllResponseComplaint(complaintId);
  
      if (!Response) {
        res.status(httpStatus.NOT_FOUND).json({
          status: httpStatus.NOT_FOUND,
          message: "Response not found",
        });
        return;
      }
  
      req.responses = Response;
      return next();
    } catch (error: any) {
      return next(error);
    }
  };
  
