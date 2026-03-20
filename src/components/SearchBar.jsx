export default function SearchBar({ value, onChange }) {
  return (
    <div className="input-group" style={{ marginBottom: "2rem" }}>
      <div style={{ position: "relative" }}>
        <span style={{
          position: "absolute",
          left: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          color: "var(--text-muted)",
          fontSize: "1.2rem"
        }}>
          🔍
        </span>
        <input
          type="text"
          className="input-field"
          style={{ paddingLeft: "3rem" }}
          placeholder="Cari produk berdasarkan nama..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
