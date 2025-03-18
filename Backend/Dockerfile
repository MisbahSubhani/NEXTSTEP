FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install ALL dependencies, including devDependencies (required for tsc compilation)
RUN npm install

# Copy all source code
COPY . .

# Build TypeScript
RUN npm run build

# Install only production dependencies (optional optimization)
RUN npm prune --production

ENV NODE_ENV=production
ENV PORT=5000

CMD ["npm", "start"]
