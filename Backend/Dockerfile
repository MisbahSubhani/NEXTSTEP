FROM node:18

WORKDIR /app

# Install openssl
RUN apt-get update && apt-get install -y openssl

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy prisma files
COPY prisma ./prisma

# Copy rest of the code
COPY . .

# Prisma generate will use DATABASE_URL at runtime
RUN npm run build
RUN npm prune --production

ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001

CMD ["sh", "-c", "npx prisma generate && npm start"]
