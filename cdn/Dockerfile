# Use Node.js 18 Alpine for better compatibility
FROM node:18-alpine

# Install build dependencies
RUN apk add --no-cache python3 make g++ libc6-compat

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Clear npm cache and install dependencies
RUN npm cache clean --force && \
    npm ci --only=production=false --verbose

# Copy source code
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV STRAPI_TELEMETRY_DISABLED=true

# Build the application with optimization disabled
RUN npm run build:production

# Expose port
EXPOSE 1337

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:1337/api || exit 1

# Start the application
CMD ["npm", "run", "start"]