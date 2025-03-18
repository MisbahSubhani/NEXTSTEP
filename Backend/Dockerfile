FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# ✅ Copy Prisma folder BEFORE running prisma generate
COPY prisma ./prisma

# ✅ Generate Prisma client
RUN npx prisma generate

# ✅ Copy the rest of the code
COPY . .

RUN npm run build

RUN npm prune --production

ENV NODE_ENV=production
ENV PORT=3001

CMD ["npm", "start"]
