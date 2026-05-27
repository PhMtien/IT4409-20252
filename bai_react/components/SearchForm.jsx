import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nhập MSSV..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Tra cứu</button>
    </form>
  );
}