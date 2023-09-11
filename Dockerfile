FROM node:lts as dependencies
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install

FROM node:lts as builder
WORKDIR /usr/src/app
COPY . .
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /usr/src/app
ENV NODE_ENV production

COPY --from=builder /usr/src/app/next.config.js ./
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json

EXPOSE 8080
CMD ["yarn", "start"]
