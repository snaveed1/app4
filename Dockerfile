FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the application code
COPY . .

# Expose the necessary port
EXPOSE 3004

# Command to run the app
CMD ["node", "index.js"]