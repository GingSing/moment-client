# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package*.json ./

# Install dependencies using Yarn
RUN yarn install

# Copy the entire project to the container
COPY . .

# Build the React app
RUN yarn build

# Expose port 3000 to the outside world
EXPOSE 3000

# Define the command to run your application
CMD ["yarn", "start"]