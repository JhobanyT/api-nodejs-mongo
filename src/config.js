import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URL,
  PORT: process.env.PORT || 4000,
  SECRET: 'practicaspp-space'
};
