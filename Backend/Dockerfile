FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY prisma ./prisma

COPY . .

RUN npm run build

RUN npm prune --production

ENV NODE_ENV=production
ENV PORT=3001

# Add prisma generate + migrate deploy
CMD npx prisma generate && npx prisma migrate deploy && npm start
