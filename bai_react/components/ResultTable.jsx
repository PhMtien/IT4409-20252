export default function ResultTable({ student, results }) {
  return (
    <div>
      <h3>{student.name} ({student.mssv})</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Môn</th>
            <th>QT</th>
            <th>CK</th>
            <th>Học kỳ</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, index) => (
            <tr key={index}>
              <td>{r.subject}</td>
              <td>{r.qt}</td>
              <td>{r.ck}</td>
              <td>{r.hk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}