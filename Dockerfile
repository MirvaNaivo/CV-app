FROM node:18-alpine AS builder
WORKDIR /app

COPY ./package*.json ./
RUN npm ci

COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json
COPY ./index.html ./index.html 
COPY ./vite.config.ts ./vite.config.ts 

RUN npm run build

FROM node:18-alpine AS final
WORKDIR /app

COPY --from=builder /app/dist ./dist 
COPY ./package*.json ./
COPY ./index.html ./index.html 
COPY ./src ./src  
RUN npm ci --production

EXPOSE 3000
CMD ["npm", "start"]