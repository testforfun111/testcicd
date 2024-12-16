#!/bin/bash

# Dừng ứng dụng frontend nếu đang chạy
echo "Stopping frontend application..."
pkill -f 'npm start'  # Thay thế bằng lệnh thực tế bạn sử dụng để chạy ứng dụng

# Sao chép các file đã xây dựng vào thư mục triển khai
echo "Deploying frontend..."
cp -r ./frontend/build/* /path/to/deployment/directory/

# Khởi động lại ứng dụng frontend
echo "Starting frontend application..."
cd /path/to/deployment/directory/
npm start &  # Chạy ứng dụng ở chế độ nền

echo "Frontend deployment completed."