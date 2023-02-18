FROM node:16
WORKDIR /server
COPY package*.json ./
RUN npm install --only-production
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "start"]