FROM node:18-slim

WORKDIR /app

# Install OpenSSL and dependencies
RUN apt-get update && apt-get install -y openssl

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

RUN npm run build

RUN npm prune --production

ENV NODE_ENV=production
ENV PORT=3001

CMD ["npm", "start"]
