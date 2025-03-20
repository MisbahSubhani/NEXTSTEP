# Use Bun base image
FROM oven/bun:1.0

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies (WITHOUT --production to avoid lockfile issues)
RUN bun install --no-frozen-lockfile

# Expose backend port
EXPOSE 3001

# Apply Prisma migrations & run the app
CMD bunx prisma migrate deploy && bun run src/index.ts
