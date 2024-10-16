import config from "../config/config.js";
const PORT = config.PORT;
const VERSION = config.VERSION;

export const info = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Agusele",
      version: VERSION,
      description: "API del ecommerce Agusele",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./src/docs/*.yml"],
};
