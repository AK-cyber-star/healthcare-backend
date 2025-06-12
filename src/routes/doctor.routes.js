import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  createDoctor,
  deleteDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
} from "../controllers/doctor.controller.js";

const router = express.Router();

router.post("/", authMiddleware, createDoctor);
router.get("/", getAllDoctors);
router.get("/:id", getDoctorById);
router.put("/:id", authMiddleware, updateDoctor);
router.delete("/:id", authMiddleware, deleteDoctor);

export { router as DoctorRoutes };
