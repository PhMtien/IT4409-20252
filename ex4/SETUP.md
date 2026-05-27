# Hướng dẫn Setup Toàn bộ Dự án

## Cấu trúc Dự án

```
ex4/
├── backend/
│   ├── index.js        (Server Express + MongoDB)
│   ├── package.json
│   └── README.md
└── frontend/
    ├── index.html      (React CDN - chạy trực tiếp)
    ├── package.json
    └── README.md
```

## BƯỚC 1: Setup Backend

### 1.1 Cài đặt Dependencies
```bash
cd backend
npm install
```

### 1.2 Cấu hình MongoDB

Mở file `backend/index.js` tìm dòng:
```javascript
const MONGODB_URI = "mongodb+srv://MSSV:MSSV@cluster.mongodb.net/it4409";
```

Thay `MSSV` bằng **mã sinh viên của bạn**. Ví dụ:
```javascript
const MONGODB_URI = "mongodb+srv://22IT001:22IT001@cluster.mongodb.net/it4409";
```

### 1.3 Chạy Backend Server
```bash
npm start
```

Hoặc với Nodemon (auto reload):
```bash
npm run dev
```

Bạn sẽ thấy thông báo:
```
Server running on http://localhost:3001
Connected to MongoDB
```

## BƯỚC 2: Setup Frontend

### 2.1 Mở Frontend

Có 4 cách mở `frontend/index.html`:

**Cách 1: Double-click trên file**
- Chỉ cần double-click `index.html` để mở trên trình duyệt

**Cách 2: Live Server (VS Code)**
- Chuột phải trên `index.html` → "Open with Live Server"

**Cách 3: Python HTTP Server**
```bash
cd frontend
python -m http.server 5000
# Vào http://localhost:5000
```

**Cách 4: Node HTTP Server**
```bash
npm install -g http-server
cd frontend
http-server
# Vào http://localhost:8080
```

### 2.2 Chắc chắn Backend đang chạy

Frontend gọi API từ `http://localhost:3001`, vì vậy:
- Backend server phải đang chạy (Bước 1.3)
- Port 3001 không bị chiếm bởi ứng dụng khác

## BƯỚC 3: Test Ứng dụng

Khi Frontend tải xong, bạn sẽ thấy:
- Giao diện danh sách người dùng
- Ô tìm kiếm
- Nút "Thêm người dùng"
- Bảng danh sách

### Test chức năng:

1. **Thêm người dùng**
   - Click "Thêm người dùng"
   - Nhập: Tên, Tuổi, Email, Địa chỉ
   - Click "Lưu"

2. **Tìm kiếm**
   - Nhập từ khóa vào ô tìm kiếm
   - Bảng sẽ tự động cập nhật

3. **Phân trang**
   - Chọn số dòng/trang (3, 5, 10)
   - Click Prev/Next để chuyển trang

4. **Sửa người dùng**
   - Click nút "Sửa" trên mỗi dòng
   - Thay đổi thông tin
   - Click "Lưu"

5. **Xóa người dùng**
   - Click nút "Xóa" trên mỗi dòng
   - Xác nhận xóa

## Validation

- **Tên**: Bắt buộc, ít nhất 2 ký tự
- **Tuổi**: Bắt buộc, >= 0
- **Email**: Bắt buộc, phải chứa '@' và '.'
- **Địa chỉ**: Không bắt buộc

## Troubleshooting

### Error: "Cannot GET /api/users"
→ Backend không đang chạy. Hãy chạy `npm start` ở thư mục backend

### Error: "ECONNREFUSED"
→ Backend không chạy trên port 3001. Kiểm tra terminal backend

### Error: "Invalid MongoDB connection string"
→ Thay MSSV trong connection string bằng mã sinh viên thật

### Frontend không tải dữ liệu
→ Mở DevTools (F12) → Console → xem lỗi gì
→ Chắc chắn backend đang chạy
→ Chắc chắn MongoDB được kết nối

## Notes

- Frontend sử dụng React 18 từ CDN, không cần cài Node modules
- Backend sử dụng Express.js + MongoDB + Mongoose
- Tất cả code đã viết sơ sài, dễ hiểu, dễ modify
- Có thể chạy backend và frontend riêng biệt trên các terminal khác nhau
