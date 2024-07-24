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

# Sao chép package.json và package-lock.json để cài đặt các phụ thuộc cần thiết cho runtime
COPY package*.json ./

# Cài đặt các phụ thuộc cần thiết cho runtime
RUN npm ci --only=production

# Sao chép chỉ thư mục build từ stage 1
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/pages ./pages
COPY --from=builder /app/components ./components

# Mở cổng 3000 để ứng dụng có thể truy cập từ bên ngoài
EXPOSE 3000

# Command để khởi động ứng dụng
CMD ["npm", "start"]
