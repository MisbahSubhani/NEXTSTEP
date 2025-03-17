# Stage 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm config set registry https://registry.npmmirror.com
RUN npm install

# Copy the source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app using nginx
FROM nginx:alpine

# Copy built files from previous stage to nginx's default directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
