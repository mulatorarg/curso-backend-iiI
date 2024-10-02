import config from './config.js';
import { connect } from 'mongoose';

export const dbConnection = async () => {
  const MONGO_URI = config.MONGO_URI;
  await connect(MONGO_URI)
    .then(() => console.log("✅ Conectado al Servidor de MongoDB."))
    .catch((error) => console.log("❌ No Conectado al Servidor de MongoDB: " + error));
};
