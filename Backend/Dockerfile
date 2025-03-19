# Use official Bun image
FROM oven/bun:1.0

# Set working directory
WORKDIR /app

# Copy package.json, bun.lockb, and tsconfig
COPY package.json bun.lockb tsconfig.backend.json ./

# Install dependencies using Bun
RUN bun install

# Copy all source code
COPY . .

# Expose port (update if different)
EXPOSE 3001

# Start the app using Bun
CMD ["bun", "src/index.ts"]
