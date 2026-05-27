Hướng dẫn deploy frontend lên Firebase Hosting

Lưu ý: project Firebase mặc định được đặt trong `.firebaserc` là `20225555`. Nếu bạn chưa tạo project này, hãy dùng Firebase Console để tạo hoặc thay đổi `.firebaserc` thành project id của bạn.

Bước 1: Cài đặt Firebase CLI
```bash
npm install -g firebase-tools
```

Bước 2: Đăng nhập Firebase
```bash
firebase login
```

Bước 3: (Nếu chưa init) Khởi tạo hosting (chỉ cần chạy 1 lần)
```bash
cd frontend
firebase init hosting
```
- Chọn project hoặc nhập `20225555` nếu đã có
- Chọn public directory: `dist`
- Chọn SPA rewrite? Yes (rewrite all to /index.html)

Bước 4: Build và Deploy
```bash
npm install
npm run deploy
```

Sau khi deploy thành công, trang sẽ có dạng:
`https://20225555.web.app` hoặc `https://20225555.firebaseapp.com`

Nếu bạn cần đổi project id:
- Sửa `.firebaserc` hoặc dùng `firebase use --add` để chọn project khác

Troubleshooting:
- Nếu lỗi `ERR_NO_PROJECT`, chắc bạn chưa tạo project trên Firebase
- Nếu lỗi `command not found: firebase`, cài lại firebase-tools bằng npm
