FROM node:20.18.0

WORKDIR /app

COPY package*.json ./

COPY . .

COPY .env .env

RUN npm install
# RUN npm install --only-production

EXPOSE 8003
CMD ["npm", "start"]
# CMD ["npm", "run", "dev"]
