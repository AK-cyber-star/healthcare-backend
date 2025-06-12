import { config } from "dotenv";

config();

const env = {
  app: {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || "development",
  },
  db: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "",
    name: process.env.DB_NAME || "postgres",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "jwt secret",
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
  },
};

export default env;
