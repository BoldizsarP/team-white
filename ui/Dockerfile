# Use an official Hugo image as the base image
FROM klakegg/hugo:latest

# Set the working directory inside the container
WORKDIR /src

# Copy the Hugo project files into the container
COPY . .

# Build the Hugo site
RUN hugo --minify

# Use an Nginx image as the final image
FROM nginx:latest

# Copy the built site from the previous stage into the Nginx HTML root
COPY --from=0 /src/public /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
