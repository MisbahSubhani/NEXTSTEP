# Use Bun base image
FROM oven/bun:1.0

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies (disable frozen lockfile check)
RUN bun install --production --no-frozen-lockfile

# Expose backend port
EXPOSE 3001

# Apply Prisma migration & start backend
CMD bunx prisma migrate deploy && bun run src/index.ts
