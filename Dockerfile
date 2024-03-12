# 1. Contruye el build del front
FROM node:18 AS frontend-build
WORKDIR /app/front

COPY front/package*.json ./
RUN npm install
COPY ./front ./
RUN npm run build

# 2. Contruye el Build del Backend
FROM node:18 AS build
WORKDIR /app


COPY back/package*.json ./
COPY ./back ./
RUN npm install && \
    npm run build  

#3. Crea el entorno de produccion
FROM node:18
WORKDIR /app

COPY --from=build /app .
COPY --from=frontend-build /app/front/dist ./dist/public
RUN npm cache clean --force && \
    rm -rf /tmp/*

CMD ["npm", "run", "start"]