import config from './config.js';
import { connect } from 'mongoose';
import { logger } from "../logs/logger.js";

export const mongoConnection = async (desde = '') => {
  const MONGO_URI = config.MONGO_URI;
  await connect(MONGO_URI)
    .then(() => logger.info(`${desde}Conectado al Servidor de MongoDB.`))
    .catch((error) => logger.error(`${desde}No Conectado al Servidor de MongoDB: ` + error));
};
