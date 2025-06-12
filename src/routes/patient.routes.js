import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  createPatient,
  deletePatient,
  getAllPatients,
  getPatientById,
  updatePatient,
} from "../controllers/patient.controller.js";

const router = express.Router();

router.post("/", authMiddleware, createPatient);
router.get("/", authMiddleware, getAllPatients);
router.get("/:id", authMiddleware, getPatientById);
router.put("/:id", authMiddleware, updatePatient);
router.delete("/:id", authMiddleware, deletePatient);

export { router as PatientRoutes };
