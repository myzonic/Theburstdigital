FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.ts ./server.ts
RUN npx tsc server.ts --target es2020 --module commonjs --outDir .
EXPOSE 3000
CMD ["node", "server.js"]
