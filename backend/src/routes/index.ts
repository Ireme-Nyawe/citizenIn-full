import express from "express";
import authRouter from "./authRouter";
import userRouter from "./userRouter";
import categoryRouter from "./categoryRouter";
import agencyRouter from "./agencyRouter";
import memberRouter from "./agencyMemberRouter";
import complaintRouter from "./complaintRouter";
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/agency",agencyRouter)
router.use("/agency-member",memberRouter)
router.use("/complaint",complaintRouter)

export default router;
