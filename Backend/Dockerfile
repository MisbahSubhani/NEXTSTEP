# Use Bun base image
FROM oven/bun:1.0

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies
RUN bun install

# Generate Prisma Client
RUN npx prisma generate

# Expose port
EXPOSE 3001

# Run app
CMD ["bun", "index.ts"]
