import config from "../config/config.js";
const PORT = config.PORT;
const VERSION = config.VERSION;

export const info = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Backend III",
      autor: "Gabriel CAMPO",
      version: VERSION,
      description: "API - Backend III - 69910 - Gabriel CAMPO",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./src/docs/*.yml"],
};
