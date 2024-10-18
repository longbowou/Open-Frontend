FROM node:20

WORKDIR /app

RUN yarn global add pnpm

RUN groupmod -g 1000 node
RUN usermod -u 1000 -g node node

RUN chown node:node -R /app

USER node