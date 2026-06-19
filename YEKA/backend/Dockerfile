# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy prisma schema
COPY prisma ./prisma/

# Copy app source code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start:prod"]
