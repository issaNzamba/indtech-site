FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY . /usr/share/nginx/html/

# Corriger les permissions pour Nginx
RUN chown -R nginx:nginx /usr/share/nginx/html/ && \
    chmod -R 755 /usr/share/nginx/html/ && \
    find /usr/share/nginx/html/ -type f -exec chmod 644 {} \;

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]