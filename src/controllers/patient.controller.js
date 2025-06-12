import { Patient } from "../models/index.js";

export const createPatient = async (req, res, next) => {
  try {
    const patient = await Patient.create({ ...req.body, userId: req.user.id });
    res.status(201).json(patient);
  } catch (err) {
    next(err);
  }
};

export const getAllPatients = async (req, res, next) => {
  try {
    const patients = await Patient.findAll({ where: { userId: req.userId } });
    res.json(patients);
  } catch (err) {
    next(err);
  }
};

export const getPatientById = async (req, res, next) => {
  try {
    const patient = await Patient.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.json(patient);
  } catch (err) {
    next(err);
  }
};

export const updatePatient = async (req, res, next) => {
  try {
    const updated = await Patient.update(req.body, {
      where: { id: req.params.id, userId: req.user.id },
    });
    res.json({ message: "Patient updated", updated });
  } catch (err) {
    next(err);
  }
};

export const deletePatient = async (req, res, next) => {
  try {
    await Patient.destroy({
      where: { id: req.params.id, userId: req.user.id },
    });
    res.json({ message: "Patient deleted" });
  } catch (err) {
    next(err);
  }
};
