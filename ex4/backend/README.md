# Backend - API Quản lý Người dùng

## Cách chạy

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Cấu hình MongoDB

Mở file `index.js` và tìm dòng:
```javascript
const MONGODB_URI = "mongodb+srv://MSSV:MSSV@cluster.mongodb.net/it4409";
```

Thay `MSSV` bằng:
- **Username**: Mã sinh viên của bạn (ví dụ: 22IT001)
- **Password**: Mã sinh viên của bạn (ví dụ: 22IT001)
- **Cluster**: Tên cluster MongoDB Atlas của bạn

Ví dụ:
```javascript
const MONGODB_URI = "mongodb+srv://22IT001:22IT001@cluster.mongodb.net/it4409";
```

### 3. Chạy server

Chạy với Node:
```bash
npm start
```

Hoặc chạy với Nodemon (tự reload khi code thay đổi):
```bash
npm run dev
```

Server sẽ chạy trên: `http://localhost:3001`

## API Endpoints

### GET - Lấy danh sách người dùng
```
GET http://localhost:3001/api/users?page=1&limit=5&search=
```
Query parameters:
- `page`: Số trang (mặc định 1)
- `limit`: Số dòng mỗi trang (mặc định 5)
- `search`: Từ khóa tìm kiếm (không bắt buộc)

### POST - Tạo người dùng mới
```
POST http://localhost:3001/api/users
Content-Type: application/json

{
  "name": "Nguyễn Văn A",
  "age": 25,
  "email": "nva@example.com",
  "address": "Hà Nội"
}
```

### PUT - Cập nhật người dùng
```
PUT http://localhost:3001/api/users/{id}
Content-Type: application/json

{
  "name": "Nguyễn Văn B",
  "age": 30,
  "email": "nvb@example.com",
  "address": "Hà Nội"
}
```

### DELETE - Xóa người dùng
```
DELETE http://localhost:3001/api/users/{id}
```

## Validation

- **Tên**: Bắt buộc, ít nhất 2 ký tự
- **Tuổi**: Bắt buộc, >= 0
- **Email**: Bắt buộc, phải chứa '@' và '.'
- **Địa chỉ**: Không bắt buộc
