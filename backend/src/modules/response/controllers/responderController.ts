import { Request, Response } from "express";
import httpStatus from "http-status";
import responseRepository from "../repositories/responseRepository";
const createResponse = async (req: Request, res: Response) => {
    try {
        const ResponseData = req.body
      const Response = await responseRepository.createResponse(ResponseData);
  
      res.status(httpStatus.CREATED).json({
        status: httpStatus.CREATED,
        message: "Response Added SuccessFully!",
        data:Response,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };
  const findResponseById = async (req: Request, res: Response) => {
    try {

      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Response retrieved ",
        data:req.response,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };
  const findAllResponse= async (req: Request, res: Response) => {
    try {

      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Responses Retrieved",
        data:req.categories,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };
  const updateResponse= async (req: Request, res: Response) => {
    try {
        const ResponseData = req.body
        const {id} = req.params;
        const Response = await responseRepository.updateResponse(id,ResponseData)
      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Response Updated Successfully!",
        data:Response,
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };

  const deleteResponse= async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const Response = await responseRepository.deleteResponse(id)
      res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Response Deleted Successfully!",
      });
    } catch (error: any) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error", error: error.message });
    }
  };

export default {createResponse,findAllResponse,findResponseById,updateResponse,deleteResponse}
  
  
  
