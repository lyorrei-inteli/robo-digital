FROM node:18-alpine 
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN npx prisma generate
CMD ["yarn", "start:dev"]
EXPOSE 3000