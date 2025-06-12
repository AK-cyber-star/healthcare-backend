import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  assignDoctor,
  getAllMappings,
  getDoctorsForPatient,
  removeDoctorFromPatient,
} from "../controllers/mapping.controller.js";

const router = express.Router();

router.post("/", authMiddleware, assignDoctor);
router.get("/", authMiddleware, getAllMappings);
router.get("/:patientId", authMiddleware, getDoctorsForPatient);
router.delete("/:id", authMiddleware, removeDoctorFromPatient);

export { router as MappingRoutes };
