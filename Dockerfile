FROM node:16 AS build-env
COPY . /app
WORKDIR /app

RUN cd backend && npm ci --only=production && cd ../client && npm run build

FROM gcr.io/distroless/nodejs:16
COPY --from=build-env /app /app
WORKDIR /app
CMD ["hello.js"]