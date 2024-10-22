import { UserModel } from "../models/user.model.js";

class UserDao {

  get = (params) => {
    return UserModel.find(params);
  }

  getAll = () => {
    return UserModel.find();
  }

  getBy = (params) => {
    return UserModel.findOne(params);
  }

  getById = (id) => {
    return UserModel.findById(id);
  }

  create = (doc) => {
    return UserModel.create(doc);
  }

  update = (id, doc) => {
    return UserModel.findByIdAndUpdate(id, { $set: doc })
  }

  delete = (id) => {
    return UserModel.findByIdAndDelete(id);
  }

}

export default new UserDao();
