# Frontend - Quản lý Người dùng

## Cách chạy

### 1. Chạy trực tiếp với HTML

File `index.html` đã chứa toàn bộ code React (sử dụng CDN), bạn có thể:

**Cách 1: Mở file HTML trực tiếp**
- Double-click vào `index.html` để mở trên trình duyệt

**Cách 2: Sử dụng Live Server (nếu có VS Code)**
- Chuột phải trên `index.html` → "Open with Live Server"

**Cách 3: Sử dụng Python (nếu có cài đặt)**
```bash
# Python 3
python -m http.server 5000

# Sau đó vào: http://localhost:5000/index.html
```

**Cách 4: Sử dụng Node.js HTTP Server**
```bash
npm install -g http-server
http-server

# Sau đó vào: http://localhost:8080/index.html
```

### 2. Đảm bảo Backend đang chạy

Frontend gọi API từ `http://localhost:3001`, vì vậy hãy chắc chắn:
- Backend server đã khởi động (xem hướng dẫn ở folder `backend`)
- Backend chạy trên port 3001

## Chức năng

✓ Hiển thị danh sách người dùng
✓ Tìm kiếm theo tên, email, địa chỉ
✓ Phân trang (3, 5, 10 dòng/trang)
✓ Thêm người dùng mới
✓ Sửa thông tin người dùng
✓ Xóa người dùng
✓ Validation dữ liệu
✓ Responsive design (desktop & mobile)
