# Use Node.js 18 on Ubuntu for better compatibility
FROM node:18-bullseye-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --verbose

# Copy source code
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV STRAPI_TELEMETRY_DISABLED=true

# Build the application
RUN npm run build

# Expose port
EXPOSE 1337

# Start the application
CMD ["npm", "run", "start"]