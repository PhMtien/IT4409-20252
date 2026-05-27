import { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import ResultTable from "./components/ResultTable";

import students from "./data/sinhvien.json";
import resultsData from "./data/ketqua.json";

function App() {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!studentId) return;

    setIsLoading(true);
    setError("");
    setStudent(null);
    setResults([]);

    setTimeout(() => {
      const foundStudent = students.find(s => s.mssv === studentId);

      if (!foundStudent) {
        setError("Không tìm thấy sinh viên!");
        setIsLoading(false);
        return;
      }

      const filteredResults = resultsData.filter(
        r => r.mssv === studentId
      );

      setStudent(foundStudent);
      setResults(filteredResults);
      setIsLoading(false);
    }, 2000);

  }, [studentId]);

  return (
    <div>
      <h1>Tra cứu sinh viên</h1>

      <SearchForm onSearch={setStudentId} />

      {isLoading && <p>Đang tải...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {student && <ResultTable student={student} results={results} />}
    </div>
  );
}

export default App;