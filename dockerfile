# Use an official Node.js image as a base image for building the app
FROM node:14 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Use an official Nginx image as a base image for serving the app
FROM nginx:latest

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the built app from the builder stage to the Nginx webroot
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Expose the port that Nginx will run on
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
