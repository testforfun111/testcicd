#!/bin/bash

# Dừng ứng dụng backend nếu đang chạy
echo "Stopping backend application..."
pkill -f 'dotnet WebApplication1.dll'  # Thay thế bằng tên file thực tế của bạn

# Sao chép các file đã xây dựng vào thư mục triển khai
echo "Deploying backend..."
cp -r ./build/* /path/to/deployment/directory/

# Khởi động lại ứng dụng backend
echo "Starting backend application..."
dotnet /path/to/deployment/directory/WebApplication1.dll &  # Chạy ứng dụng ở chế độ nền

echo "Backend deployment completed."