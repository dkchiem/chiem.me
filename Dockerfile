# Build Stage
FROM node:lts AS builder
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
RUN npm run build

# Runner Stage
FROM node:alpine AS runner
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci --omit dev
COPY --from=builder /app/build ./build
EXPOSE 3000
CMD [ "node", "build" ]