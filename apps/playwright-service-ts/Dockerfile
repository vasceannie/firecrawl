FROM node:22-slim

WORKDIR /usr/src/app
COPY package*.json ./

# Install pnpm
RUN npm install -g pnpm@latest

# Install dependencies with undici pinned to 6.19.1
RUN pnpm install
RUN pnpm add undici@6.19.1 --save-exact

COPY . .

# Install Playwright dependencies
RUN npx playwright install --with-deps

RUN pnpm run build

ARG PORT
ENV PORT=${PORT}

EXPOSE ${PORT}

CMD [ "pnpm", "start" ]
