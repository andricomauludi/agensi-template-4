# Use the official Nginx image as the base image
FROM nginx:alpine

COPY . /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3001 (for your static content)
EXPOSE 3004

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
