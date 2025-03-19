FROM oven/bun:1.0

WORKDIR /app

COPY . .

RUN bun install

EXPOSE 3001

# Move Prisma commands to CMD (runtime)
CMD bunx prisma migrate deploy && bun run index.ts
