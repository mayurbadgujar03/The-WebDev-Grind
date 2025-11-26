# use an official image of Node.js runtime
FROM node:22-alpine

# set the working directory inside the container
WORKDIR /app

# copy all package.json files in the working directory
COPY package*.json ./

# install dependencies
RUN npm install

COPY . .

# set env variable
ENV PORT=3000

# when container runs, this cmd will run the node project
CMD ["node", "index.js"]