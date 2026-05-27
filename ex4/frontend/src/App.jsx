import React, { useEffect, useState } from "react";

const API_URL = "https://it4409-20252-at7f.onrender.com/api/users";


function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Tìm theo tên, email, địa chỉ..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function UserTable({ users, onEdit, onDelete }) {
  const handleDelete = (id, name) => {
    if (window.confirm(`Bạn có chắc muốn xóa "${name}"?`)) {
      onDelete(id);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ tên</th>
          <th>Tuổi</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>
              Không có dữ liệu
            </td>
          </tr>
        ) : (
          users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.address || "-"}</td>
              <td>
                <button className="edit-btn" onClick={() => onEdit(user)}>
                  Sửa
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(user._id, user.name)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

function Pagination({ page, totalPages, limit, onPageChange, onLimitChange }) {
  return (
    <div className="pagination">
      <div>
        Hiển thị:
        <select
          value={limit}
          onChange={(e) => onLimitChange(Number(e.target.value))}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        dòng/trang
      </div>

      <div>
        <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
          Prev
        </button>

        <span style={{ margin: "0 15px" }}>
          Trang {page}/{totalPages || 1}
        </span>

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function UserModal({ user, onClose, onSave }) {
  const [formData, setFormData] = useState(
    user || { name: "", age: "", email: "", address: "" }
  );
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Tên phải có ít nhất 2 ký tự";
    }

    if (formData.age === "" || Number(formData.age) < 0) {
      newErrors.age = "Tuổi phải >= 0";
    }

    if (
      !formData.email ||
      !formData.email.includes("@") ||
      !formData.email.includes(".")
    ) {
      newErrors.email = "Email không hợp lệ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const url = user ? `${API_URL}/${user._id}` : API_URL;
    const method = user ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        age: Number(formData.age),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert("Lỗi: " + data.error);
        } else {
          alert(data.message);
          onSave();
        }
      })
      .catch((err) => alert("Lỗi: " + err.message));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{user ? "Sửa người dùng" : "Thêm người dùng"}</h3>

        <label>Họ tên *</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nhập họ tên"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Tuổi *</label>
        <input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="Nhập tuổi"
        />
        {errors.age && <p className="error">{errors.age}</p>}

        <label>Email *</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Nhập email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Địa chỉ</label>
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Nhập địa chỉ"
        />

        <div className="modal-actions">
          <button onClick={handleSubmit}>Lưu</button>
          <button onClick={onClose} style={{ background: "#888" }}>
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = () => {
    const url = `${API_URL}?page=${page}&limit=${limit}&search=${search}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data || []);
        setTotalPages(data.totalPages || 0);
      })
      .catch((err) => console.error("Fetch error:", err));
  };

  useEffect(() => {
    fetchUsers();
  }, [page, limit, search]);

  const deleteUser = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        fetchUsers();
      })
      .catch((err) => alert("Lỗi: " + err.message));
  };

  return (
    <div className="container">
      <h1>Quản lý Người dùng</h1>

      <SearchBar value={search} onChange={setSearch} />

      <button
        className="add-btn"
        onClick={() => {
          setEditingUser(null);
          setShowModal(true);
        }}
      >
        + Thêm người dùng
      </button>

      <UserTable
        users={users}
        onEdit={(user) => {
          setEditingUser(user);
          setShowModal(true);
        }}
        onDelete={deleteUser}
      />

      <Pagination
        page={page}
        totalPages={totalPages}
        limit={limit}
        onPageChange={setPage}
        onLimitChange={setLimit}
      />

      {showModal && (
        <UserModal
          user={editingUser}
          onClose={() => setShowModal(false)}
          onSave={() => {
            fetchUsers();
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}