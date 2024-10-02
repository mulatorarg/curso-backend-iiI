import * as userService from "../services/user.service.js";

export const createUser = async (req, res, next) => {
  try {
    const cant = req.query;
    const response = await userService.createUsersMock(cant);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const createUsers = async (req, res, next) => {
  try {
    const users = req.query.users ?? 50;
    const response = await userService.createUsersMock(users);
    res.status(200).json(response);
  } catch (error) {
    next(error);50
  }
};

export const generateData = async (req, res, next) => {
  try {
    const users = req.params.users ?? 0;
    const response = await userService.createUsersMock(users);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
