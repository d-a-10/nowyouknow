# Use Node.js 18 LTS for Railway compatibility
FROM node:18-alpine

# Install system dependencies for node-gyp
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev

# Set working directory
WORKDIR /app

# Copy package files for caching
COPY package*.json ./

# Install dependencies with legacy peer deps flag
RUN npm ci --legacy-peer-deps --only=production

# Copy source code
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV STRAPI_TELEMETRY_DISABLED=true

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