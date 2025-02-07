#FROM node:latest as builder
#
#RUN mkdir -p /app
#
#WORKDIR /app
#
#COPY package*.json ./
#
#RUN npm install
#
#COPY . .
#
## Install iputils package which provides the ping utility
##RUN apt-get update && apt-get install -y iputils-ping
#
##RUN npm install
##RUN npm run build
#
#CMD ["npm", "start"]



# Use a base image with Node.js to build the Angular app
FROM node:latest AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build

# Use a lightweight web server to serve the built Angular app
FROM nginx:alpine AS runtime

# Copy the Angular build output to the Nginx web server directory
COPY --from=build /app/dist/employee-web /usr/share/nginx/html

# Expose the port your Angular app runs on
EXPOSE 80

# The Nginx container will automatically run using its default entrypoint
