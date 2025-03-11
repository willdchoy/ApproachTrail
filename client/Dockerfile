ARG NODE_VERSION=latest
FROM node:${NODE_VERSION}

ENV NODE_ENV=development

RUN corepack enable
WORKDIR /var/data/web

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 5173

# Run the application.
RUN pnpm install
CMD ["pnpm", "dev", "--host"]