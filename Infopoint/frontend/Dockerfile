# Build Stage
FROM node:20-alpine AS build
WORKDIR /app

# Dependencies installieren (Caching)
COPY package.json package-lock.json* ./
RUN npm install

# Source Code kopieren und bauen
COPY . .
RUN npm run build

# Production Stage mit nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Build Output kopieren
COPY --from=build /app/dist .

# Nginx Konfiguration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
