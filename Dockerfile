FROM nginx:alpine

# Supprimer la page par défaut
RUN rm -rf /usr/share/nginx/html/*

# Copier les fichiers
COPY . /usr/share/nginx/html/

# Corriger les permissions
RUN chown -R nginx:nginx /usr/share/nginx/html/ && \
    chmod -R 755 /usr/share/nginx/html/

# Copier la configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]