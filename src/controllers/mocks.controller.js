import * as userService from "../services/user.service.js";

/*
Dentro del router mocks.router.js, utilizar este módulo en un endpoint GET llamado "/mockingusers",
y generar 50 usuarios con el mismo formato que entregaría una petición de Mongo.
*/
export const createUsers = async (req, res, next) => {
  try {
    const response = await userService.createUsersMock(50);
    console.info(`✔ Se han generado correctamente los 50 usuarios solicitados por enunciado.`);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

/*
Dentro del router mocks.router.js, desarrollar un endpoint POST llamado /generateData que reciba los
parámetros numéricos "users" y "pets" para generar e insertar en la base de datos la cantidad de registros indicados.
Comprobar dichos registros insertados mediante los servicios GET de users y pets
*/
export const generateData = async (req, res, next) => {
  try {
    const users = req.params.users ?? 0;
    const response = await userService.createUsersMock(users);
    console.info(`✔ Se han generado correctamente los ${users} usuarios solicitados por parámetro.`);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
