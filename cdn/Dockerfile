# Use Node.js 18 LTS Alpine with musl support for better SWC compatibility
FROM node:18-alpine

# Install system dependencies for native bindings
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    curl \
    musl-dev \
    linux-headers

# Set working directory
WORKDIR /app

# Set environment variables early
ENV NODE_ENV=production
ENV STRAPI_TELEMETRY_DISABLED=true
# Force SWC to use WASM instead of native bindings
ENV SWC_BINARY_PATH=/usr/local/lib/node_modules/@swc/wasm

# Copy package files for caching
COPY package*.json ./

# Install dependencies and force SWC WASM
RUN npm ci --omit=dev --ignore-scripts && \
    npm install @swc/wasm --save-dev && \
    npm rebuild --silent

# Copy source code
COPY . .

# Try to build, fallback to development mode if needed
RUN npm run build || \
    (echo "Build failed, trying without optimization..." && \
     NODE_ENV=development npm run build)

# Create uploads directory
RUN mkdir -p public/uploads

# Expose port (Railway will set PORT env var)
EXPOSE ${PORT:-1337}

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:${PORT:-1337}/api || exit 1

# Start the application
CMD ["npm", "run", "start"]