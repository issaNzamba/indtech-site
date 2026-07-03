# Utiliser l'image officielle Nginx
FROM nginx:alpine

# Supprimer la page par défaut
RUN rm -rf /usr/share/nginx/html/*

# Copier les fichiers du site
COPY . /usr/share/nginx/html/

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]