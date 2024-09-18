import { faker } from "@faker-js/faker";
faker.locale = "es";

export const generateUser = () => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    image: faker.image.urlPlaceholder(),
  };
};
