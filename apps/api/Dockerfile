ARG NODE_VERSION=latest
FROM node:${NODE_VERSION}

ENV NODE_ENV=development

RUN corepack enable
WORKDIR /var/data/api

COPY . .

RUN pnpm install

EXPOSE 3000

# Run the application.
CMD ["pnpm", "dev"]