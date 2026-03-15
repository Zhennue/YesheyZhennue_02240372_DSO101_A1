# Frontend Dockerfile (Next.js)
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source and build
COPY tsconfig.json next.config.ts ./
COPY public ./public
COPY src ./src
RUN npm run build

# Production image (Next.js server)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 3000

# Next.js uses PORT env var; Render will set it
ENV PORT=3000

CMD ["npm", "run", "start"]
