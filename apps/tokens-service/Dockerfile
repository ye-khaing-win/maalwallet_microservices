# Base image
FROM node:18-alpine



# Define variables
ARG APP_NAME

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install app dependencies
RUN npm install -g pnpm
RUN npm install -g @nestjs/cli
RUN pnpm  install

# Bundle app source
COPY . .

RUN apk add --no-cache openssl
# Generate Prisma Client
RUN npx prisma generate --schema=apps/${APP_NAME}/prisma/schema.prisma

RUN #npx prisma generate

# Creates a "dist" folder with the production build
RUN pnpm run build -- ${APP_NAME}

RUN cp -r apps/${APP_NAME}/generated/prisma .

# Start the server using the production build
CMD [ "node", "dist/apps/${APP_NAME}/main.js" ]