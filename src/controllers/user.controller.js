import * as userService from "../services/user.service.js";

export const getUsers = async (req, res, next) => {
  try {
    const response = await userService.getUsers();
    res.json(response);
  } catch (error) {
    next(error);
  }
};
