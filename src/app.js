import express from "express";
import usersRoute from "./routers/users.router.js";
import mocksRoute from "./routers/mocks.router.js";
import viewsRoute from "./routers/views.router.js";
import { mongoConnection } from "./config/db.connection.js";
import config from "./config/config.js";
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { info } from './docs/info.js';
import { logger } from "./logs/logger.js";

const app = express();

const specs = swaggerJSDoc(info);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRoute);
app.use("/api/mocks", mocksRoute);
app.use("/", viewsRoute);

const PORT = config.PORT;
const VERSION = config.VERSION;

mongoConnection();

const server = app.listen(PORT, () => {
  logger.info(`Servidor Listo. Escuchando en el puerto ${PORT}.`);
  logger.info(`Versión: ${VERSION}. Backend III - Comisión 69910. Campo Gabriel.`);
});
server.on("error", (err) => logger.error(err));
