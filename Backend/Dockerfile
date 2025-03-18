FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

COPY . .

RUN npm run build

RUN npm prune --production

RUN apk update && apk add --no-cache openssl

ENV NODE_ENV=production
ENV PORT=3001

# 🟢 Run prisma generate at container start (NOT build time)
CMD npx prisma generate && npm start
