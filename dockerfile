FROM node:20.11.0-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và yarn.lock vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install 

# Copy toàn bộ mã nguồn của dự án vào thư mục làm việc
COPY . .

# Build dự án NestJS (nếu bạn sử dụng TypeScript)
RUN npm run build

# Thiết lập biến môi trường (tùy chọn)
ENV NODE_ENV=production

# Expose port mà ứng dụng sẽ chạy
EXPOSE 3003

# Khởi chạy ứng dụng
CMD ["npm", "start"]
