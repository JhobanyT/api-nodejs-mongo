import { config } from "dotenv";
config();

export default {
  MONGODB_URL: process.env.MONGODB_URL,
  PORT: process.env.PORT || 4000,
  SECRET: 'practicaspp-space'
};
