# Stage 1: Build stage
FROM node:18-alpine AS builder

# Đặt biến môi trường
ENV NODE_ENV=production

# Tạo thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc cần thiết cho build
RUN npm ci

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Build dự án Next.js
RUN npm run build

# Stage 2: Production stage
FROM node:18-alpine AS production

# Đặt biến môi trường
ENV NODE_ENV=production

# Tạo thư mục làm việc
WORKDIR /app

# Sao chép chỉ thư mục build từ stage 1
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Cài đặt serve để chạy ứng dụng Next.js ở chế độ production
RUN npm install -g serve

# Cài đặt các phụ thuộc cần thiết cho runtime
RUN npm ci --only=production

# Mở cổng 3000 để ứng dụng có thể truy cập từ bên ngoài
EXPOSE 3000

# Command để khởi động ứng dụng
CMD ["npx", "next", "start"]
