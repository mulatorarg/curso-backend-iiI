import { faker } from "@faker-js/faker";
faker.locale = "es";
import bcrypt from "bcrypt";

const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
const isValidPassword = (password, user) => bcrypt.compareSync(password, user.password);

export { createHash, isValidPassword };
const roles = [ 'user', 'admin'];

export const generateUser = () => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    role: generateUserRole(),
    password: createHash('coder123'),
    image: faker.image.urlPlaceholder(),
  };
};


function generateUserRole() {
  return roles[Math.floor((Math.random() * (roles.length + 1)))];
}
