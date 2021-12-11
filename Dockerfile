FROM node:16 AS build-env
COPY . /app
WORKDIR /app

RUN cd backend && yarn build && cd ../client && yarn build

FROM gcr.io/distroless/nodejs:16
COPY --from=build-env /app/backend/dist /app
COPY --from=build-env /app/client/dist /app/client
WORKDIR /app
CMD ["main.js"]