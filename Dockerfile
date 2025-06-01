FROM node:18-alpine
RUN apk add --no-cache openssl postgresql-client mysql-client

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --omit=dev

COPY . .

RUN npx prisma generate --schema=./prisma/mysql/schema.prisma
RUN npx prisma generate --schema=./prisma/postgresql/schema.prisma

EXPOSE 3000
CMD ["node", "src/app.js"]