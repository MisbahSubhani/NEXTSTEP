FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Set registry to avoid network issues
RUN npm config set registry https://registry.npmmirror.com

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY . .

# Build
RUN npm run build

# Rest of Dockerfile...
