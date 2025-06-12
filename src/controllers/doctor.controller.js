import { Doctor } from "../models/index.js";

export const createDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.create({ ...req.body, userId: req.user.id });
    res.status(201).json(doctor);
  } catch (err) {
    next(err);
  }
};

export const getAllDoctors = async (req, res, next) => {
  try {
    const doctors = await Doctor.findAll();
    res.json(doctors);
  } catch (err) {
    next(err);
  }
};

export const getDoctorById = async (req, res, next) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json(doctor);
  } catch (err) {
    next(err);
  }
};

export const updateDoctor = async (req, res, next) => {
  try {
    const updated = await Doctor.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Doctor updated", updated });
  } catch (err) {
    next(err);
  }
};

export const deleteDoctor = async (req, res, next) => {
  try {
    await Doctor.destroy({ where: { id: req.params.id } });
    res.json({ message: "Doctor deleted" });
  } catch (err) {
    next(err);
  }
};
