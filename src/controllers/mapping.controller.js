import { Patient, Doctor, Mapping } from "../models/index.js";

export const assignDoctor = async (req, res, next) => {
  try {
    const { patientId, doctorId } = req.body;
    const mapping = await Mapping.create({ patientId, doctorId });
    res.status(201).json(mapping);
  } catch (err) {
    next(err);
  }
};

export const getAllMappings = async (req, res, next) => {
  try {
    const mappings = await Mapping.findAll();
    res.json(mappings);
  } catch (err) {
    next(err);
  }
};

export const getDoctorsForPatient = async (req, res, next) => {
  try {
    const patient = await Patient.findByPk(req.params.patientId, {
      include: ["doctors"],
    });
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.json(patient.doctors);
  } catch (err) {
    next(err);
  }
};

export const removeDoctorFromPatient = async (req, res, next) => {
  try {
    const result = await Mapping.destroy({ where: { id: req.params.id } });
    res.json({ message: "Mapping removed", result });
  } catch (err) {
    next(err);
  }
};
