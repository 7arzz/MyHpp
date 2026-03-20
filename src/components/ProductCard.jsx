export default function ProductCard({ data, onEdit, onDelete }) {
  const format = (n) => "Rp " + Number(n).toLocaleString("id-ID");

  const profitMargin = ((data.hargaJual - data.hpp) / data.hargaJual * 100).toFixed(1);

  return (
    <div className="glass-card" style={{ padding: "1.5rem", position: "relative", overflow: "hidden" }}>
      {/* Decorative Gradient Glow */}
      <div style={{
        position: "absolute",
        top: "-20px",
        right: "-20px",
        width: "100px",
        height: "100px",
        background: "var(--primary-glow)",
        filter: "blur(40px)",
        opacity: "0.2",
        pointerEvents: "none"
      }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
        <h4 style={{ fontSize: "1.25rem", color: "#fff", margin: 0 }}>{data.nama}</h4>
        <div style={{
          padding: "0.25rem 0.75rem",
          background: "rgba(16, 185, 129, 0.1)",
          color: "#10b981",
          borderRadius: "2rem",
          fontSize: "0.75rem",
          fontWeight: "700",
          border: "1px solid rgba(16, 185, 129, 0.2)"
        }}>
          +{profitMargin}% Margin
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
        <div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px" }}>Total Biaya</p>
          <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>{format(data.total)}</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px" }}>HPP / Pcs</p>
          <p style={{ fontSize: "1.1rem", fontWeight: "600", color: "var(--secondary)" }}>{format(data.hpp)}</p>
        </div>
      </div>

      <div style={{ 
        padding: "1rem", 
        background: "rgba(255, 255, 255, 0.03)", 
        borderRadius: "0.75rem", 
        border: "1px solid var(--glass-border)",
        marginBottom: "1.5rem"
      }}>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", marginBottom: "0.25rem" }}>Rekomendasi Harga Jual</p>
        <p style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--accent)", margin: 0 }}>{format(data.hargaJual)}</p>
      </div>

      <div style={{ display: "flex", gap: "0.75rem" }}>
        <button onClick={onEdit} className="btn btn-secondary" style={{ flex: 1, padding: "0.5rem" }}>
          ✏️ Edit
        </button>
        <button onClick={onDelete} className="btn btn-danger" style={{ flex: 1, padding: "0.5rem" }}>
          🗑️ Hapus
        </button>
      </div>
    </div>
  );
}


