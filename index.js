import Express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import env from "./src/config/env.js";
import sequelize from "./src/config/database.js";
import { AuthRoutes } from "./src/routes/auth.routes.js";
import { PatientRoutes } from "./src/routes/patient.routes.js";
import { DoctorRoutes } from "./src/routes/doctor.routes.js";
import { MappingRoutes } from "./src/routes/mapping.routes.js";
import errorMiddleware from "./src/middlewares/error.middleware.js";

const PORT = env.app.port;

const app = Express();
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(Express.json());

// routes
app.use("/api/auth", AuthRoutes);
app.use("/api/patients", PatientRoutes);
app.use("/api/doctors", DoctorRoutes);
app.use("/api/mappings", MappingRoutes);

app.use(errorMiddleware);

async function run() {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
    await sequelize.sync({ alter: true });
    console.log("Database synced");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (err) {
    console.error("Error connecting DB: ", err.message);
  }
}

run();
