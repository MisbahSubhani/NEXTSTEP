FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm instal
RUN npx prisma generate

COPY . .

RUN npm run build

RUN npm prune --production

ENV NODE_ENV=production
ENV PORT=3001

CMD ["npm", "start"]
