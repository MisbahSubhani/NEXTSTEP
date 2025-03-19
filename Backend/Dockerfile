FROM oven/bun:1.0

WORKDIR /app

COPY . .

RUN bun install

# 🟢 Bun equivalent of npx
RUN bunx prisma generate

EXPOSE 3001

CMD ["bun", "index.ts"]
