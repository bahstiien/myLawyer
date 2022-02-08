FROM node:14.15-alpine

ENV PORT 80

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
# RUN npm i -g
RUN npm install

# Copying source files
COPY . /usr/src/app

ARG DATABASE_URL=${DATABASE_URL}

RUN npm run pre-start

# Building app
EXPOSE 80

# Running the app
CMD "npm" "start"