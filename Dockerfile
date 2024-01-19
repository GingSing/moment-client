# Use an official Node.js runtime as a base image
FROM node:14-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build

# Use an official Nginx runtime as the production image
FROM nginx:alpine

# Copy the build artifacts from the build stage to the nginx web root
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container is run
CMD ["nginx", "-g", "daemon off;"]