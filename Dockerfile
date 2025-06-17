# Use a lightweight web server (Nginx)
FROM nginx:alpine

# Remove default Nginx web content
RUN rm -rf /usr/share/nginx/html/*

# Copy static site files to Nginx web root
COPY . /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
