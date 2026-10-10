FROM node:20-alpine

WORKDIR /app

# Install dependencies first (exploits Docker caching layer)
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn install; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
  else npm install; \
  fi

# Copy the rest of the application code
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Un-comment the line below to disable telemetry during development.
# ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3001

CMD ["npm", "run", "dev"]
