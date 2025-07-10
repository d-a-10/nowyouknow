# Use Node.js 18 LTS on Ubuntu for better compatibility with native bindings
FROM node:18-bullseye-slim

# Install system dependencies including curl for healthcheck
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    curl \
    libc6-dev \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files for caching
COPY package*.json ./

# Clear npm cache and install dependencies
RUN npm cache clean --force \
    && npm ci --only=production \
    && npm rebuild --verbose

# Copy source code
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV STRAPI_TELEMETRY_DISABLED=true

# Remove node_modules and reinstall to ensure proper native bindings
RUN rm -rf node_modules \
    && npm ci --only=production \
    && npm rebuild --verbose

# Build the application
RUN npm run build

# Create uploads directory
RUN mkdir -p public/uploads

# Expose port (Railway will set PORT env var)
EXPOSE ${PORT:-1337}

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:${PORT:-1337}/api || exit 1

# Start the application
CMD ["npm", "run", "start"]