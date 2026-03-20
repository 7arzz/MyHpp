import ProductCard from "./ProductCard";

export default function ProductList({ products, onEdit, onDelete }) {
  if (products.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
          color: "var(--text-muted)",
          border: "2px dashed var(--glass-border)",
          borderRadius: "1rem",
        }}
      >
        <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>🍱</p>
        <p>Belum ada data produk. Silakan tambahkan di atas!</p>
      </div>
    );
  }

  return (
    <div className="grid-list">
      {products.map((p, i) => (
        <ProductCard
          key={p.id}
          data={p}
          onEdit={() => onEdit(i)}
          onDelete={() => onDelete(p.id)}
        />
      ))}
    </div>
  );
}
