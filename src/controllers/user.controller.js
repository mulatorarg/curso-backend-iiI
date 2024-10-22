import * as userService from "../services/user.service.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error.msg);
    res.status(500).json({ msg: 'Error interno del servidor.' });
  }
};

export const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userService.getUser(id);
    if (!user) res.status(404).json({ msg: 'Usuario no encontrado.' });

    res.json(user);
  } catch (error) {
    console.error(error.msg);
    res.status(500).json({ msg: 'Error interno del servidor.' });
  }
};
