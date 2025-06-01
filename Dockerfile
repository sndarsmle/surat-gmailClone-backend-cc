# Use a Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
# This step helps leverage Docker's layer caching, installing dependencies
# only if package.json or package-lock.json change.
COPY package*.json ./

# Install dependencies
# Using npm ci for clean installs in CI/CD environments
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# --- TAMBAHAN UNTUK DEBUGGING ---
# Baris ini akan mencetak isi dari direktori /app di dalam container.
# Cari output dari perintah ini di log Cloud Build Anda.
RUN ls -la /app
# --- AKHIR TAMBAHAN UNTUK DEBUGGING ---

# Generate Prisma clients for both databases
# This is crucial for your application to interact with your databases.
# It assumes your Prisma schema files are correctly located.
RUN npx prisma generate --schema=./prisma/mysql/schema.prisma
RUN npx prisma generate --schema=./prisma/postgresql/schema.prisma

# Expose the port your application listens on (default is 3000 for your app)
# Cloud Run typically forwards requests to this port.
EXPOSE 3000

# Command to start the application when the container launches
# This uses the "start" script defined in your package.json.
CMD ["npm", "start"]