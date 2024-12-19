# Stage 1: Build the application
FROM node:18.18.0-alpine AS build
RUN corepack enable

WORKDIR /app
# Copy package.json and yarn.lock first to leverage Docker cache
COPY . .
RUN yarn --immutable
RUN yarn build
RUN yarn build-storybook

# Stage 2: Create the production image
FROM nginx
COPY deployment/nginx.conf /etc/nginx/conf.d/default.conf
COPY deployment/certificates/ /etc/nginx/
RUN mkdir -p /usr/share/nginx/html/public && \
    mkdir -p /etc/nginx/logs
COPY --from=build /app/storybook-static /usr/share/nginx/html/
