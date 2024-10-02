import * as mocksController from "../controllers/mocks.controller.js";
import { Router } from "express";

const router = Router();
/*
TODO: Aclaración: Esta es la PRIMERA ENTREGA DEL CURSO, y se hace referencia a "pets" que no fue solicitado en ninguna entrega anterior.
*/

/*
Dentro del router mocks.router.js, utilizar este módulo en un endpoint GET llamado "/mockingusers",
y generar 50 usuarios con el mismo formato que entregaría una petición de Mongo.
*/
router.get("/mockingusers/", mocksController.createUsers);

/*
Dentro del router mocks.router.js, desarrollar un endpoint POST llamado /generateData que reciba los
parámetros numéricos "users" y "pets" para generar e insertar en la base de datos la cantidad de registros indicados.
Comprobar dichos registros insertados mediante los servicios GET de users y pets
*/
router.post("/generateData/:users", mocksController.generateData);

export default router;
