# Producción GrowthCore — sirve el sitio ESTÁTICO que trabajamos (/site) vía nginx.
# (El build Next.js anterior quedó preservado en Dockerfile.nextjs.)
FROM nginx:alpine
COPY site-nginx.conf /etc/nginx/conf.d/default.conf
COPY site/ /usr/share/nginx/html/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
