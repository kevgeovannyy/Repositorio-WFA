# Etapa de construcción
FROM node:20-alpine AS build

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package.json ./
COPY package-lock.json ./ 
RUN npm ci

# Copiar el resto de los archivos
COPY . .

# Ejecutar el build
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copiar la compilación final al contenedor nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar la configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
