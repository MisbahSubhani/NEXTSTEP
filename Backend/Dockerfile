# Use Bun base image
FROM oven/bun:1.0

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies
RUN bun install --production

# Expose backend port
EXPOSE 3001

# Prisma migration at runtime + run the backend
CMD bunx prisma migrate deploy && bun run src/index.ts
