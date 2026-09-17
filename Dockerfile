FROM node:20-alpine

WORKDIR /workspace/hermees

# Install system dependencies
RUN apk add --no-cache \
  git \
  openssh-client \
  curl \
  bash \
  && mkdir -p /root/.ssh \
  && ssh-keyscan github.com >> /root/.ssh/known_hosts 2>/dev/null || true

# Copy package files
COPY package.json package-lock.json* pnpm-lock.yaml* ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy source
COPY . .

# Expose dev server port
EXPOSE 3000

# Steward ACS endpoint; credentials must be injected at runtime from Infisical.
ENV STEWARD_MCP_URL=https://buildmyhouse.stewardacs.xyz/mcp/sse

# Default command: development server
CMD ["npm", "run", "dev"]
