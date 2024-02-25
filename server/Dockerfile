# ============================= Build APP ===================================
FROM node:20 AS build-env
WORKDIR /app
COPY ["dist", "package.json", "./"]
RUN npm install --omit=dev

# ============================= Run APP ===================================

FROM gcr.io/distroless/nodejs20-debian11
COPY --from=build-env /app /app
WORKDIR /app

EXPOSE 7800

CMD ["--experimental-specifier-resolution=node", "index.js"]