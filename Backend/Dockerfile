FROM oven/bun:1.0

WORKDIR /app

COPY . .

RUN bun install
RUN bunx prisma generate

EXPOSE 3001

CMD ["bun", "run", "start-with-migration"]
