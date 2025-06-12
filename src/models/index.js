import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";
import UserModel from "./user.model.js";
import PatientModel from "./patient.model.js";
import DoctorModel from "./doctor.model.js";
import MappingModel from "./mapping.model.js";

const User = UserModel(sequelize, Sequelize.DataTypes);
const Patient = PatientModel(sequelize, Sequelize.DataTypes);
const Doctor = DoctorModel(sequelize, Sequelize.DataTypes);
const Mapping = MappingModel(sequelize, Sequelize.DataTypes);

// Associations

// A User has many patients
User.hasMany(Patient, { foreignKey: "userId", as: "patients" });
Patient.belongsTo(User, { foreignKey: "userId", as: "creator" });

// A User may have many Doctor
User.hasMany(Doctor, { foreignKey: "userId", as: "doctors" });
Doctor.belongsTo(User, { foreignKey: "userId", as: "creator" });

// Patient - Doctor (Mapping)
Patient.belongsToMany(Doctor, {
  through: Mapping,
  foreignKey: "patientId",
  otherKey: "doctorId",
  as: "doctors",
});

Doctor.belongsToMany(Patient, {
  through: Mapping,
  foreignKey: "doctorId",
  otherKey: "patientId",
  as: "patients",
});

export { User, Patient, Doctor, Mapping };
