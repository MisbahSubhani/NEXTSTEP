FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install openssl (Alpine uses apk)
RUN apk update && apk add --no-cache openssl

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy Prisma schema
COPY prisma ./prisma

# Run Prisma generate
RUN npx prisma generate

# Copy rest of the code
COPY . .

# Build the app
RUN npm run build

# Remove dev dependencies
RUN npm prune --production

# Environment variables
ENV NODE_ENV=production
ENV PORT=3001

# Expose port
EXPOSE 3001

# Start the app
CMD ["npm", "start"]
