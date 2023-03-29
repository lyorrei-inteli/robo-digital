FROM node:18-alpine 
COPY package.json yarn.lock ./
RUN yarn install
ENV DATABASE_URL="postgres://example_user:example_password@postgres:5432/robo-digital"
COPY . .
RUN npx prisma generate
CMD ["yarn", "start:dev"]
EXPOSE 3000