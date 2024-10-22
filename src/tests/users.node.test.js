import test from 'node:test';
import assert from 'node:assert';
import mongoose from 'mongoose';
import { logger } from '../logs/logger.js';
import { generateUser } from "../utils/user.utils.js";

import userDao from '../dao/user.dao.js';
import { mongoConnection } from '../config/db.connection.js';
import { createUsersMock } from '../services/user.service.js';

const desde = "[TEST.NODE]";
const apiURL = "http://localhost:8003/api/users";
let idTest = "";

logger.info(`${desde} Iniciando tests.`);

await mongoConnection(`${desde} `);
await mongoose.connection.collections['users'].drop();
logger.info(`${desde} Se limpió la colección Users en la Base de datos.`);


let usuarioGenerado;


test('Generar Mock de Nuevo Usuario (no en DB)', async () => {
  usuarioGenerado = generateUser();
  assert.ok(usuarioGenerado.name);
});


test('Generar 50 Usuarios Mock', async () => {
  const result = await createUsersMock(50);
  assert.equal(Array.isArray(result), true);
  assert.ok(result);
  assert.equal(result.length == 50, true);
});


test('Recuperar todos los Usuarios', async () => {
  const result = await userDao.getAll();
  assert.equal(Array.isArray(result), true);
  assert.ok(result);
  assert.equal(result.length > 0, true);

  if (result) {
    idTest = result[0]._id.toString();
  }
});


test('Recuperar un Usuario por ID', async () => {
  const result = await userDao.getById(idTest);
  assert.ok(result, '_id');
});


test('Crear un Usuario y luego buscarlo para comprobar creación exitosa', async () => {
  const response = await userDao.create(usuarioGenerado);
  const responseIdString = response._id.toString();
  const result = await userDao.getById(responseIdString);
  assert.equal(result._id.toString(), responseIdString);
});


test('Recuperar y modificar usuario', async () => {
  const doc = generateUser();
  const userCreated = await userDao.create(doc);
  const userModified = await userDao.update(userCreated._id.toString(), doc);

  assert.equal(userCreated._id.toString(), userModified._id.toString());
});


test('Crear Usuario y luego eliminarlo', async () => {
  const doc = generateUser();
  const response = await userDao.create(doc);
  const docDel = await userDao.delete(response._id.toString());

  assert.equal(docDel._id.toString(), response._id.toString());
});

logger.info(`${desde} Finalizados los tests.`);
