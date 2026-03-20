import { useState, useEffect, useMemo } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import { hitungHPP } from "./utils/hpp";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState(() => {
    const data = JSON.parse(localStorage.getItem("hppData")) || [];
    return data.map((p, i) => ({
      ...p,
      id: p.id || Date.now() + i,
    }));
  });
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("hppData", JSON.stringify(products));
  }, [products]);

  const handleSubmit = (form) => {
    const result = hitungHPP(form);
    const newData = {
      ...form,
      ...result,
      id: editIndex !== null ? products[editIndex].id : Date.now(),
    };

    if (editIndex !== null) {
      setProducts((prev) => {
        const updated = [...prev];
        updated[editIndex] = newData;
        return updated;
      });
      setEditIndex(null);
    } else {
      setProducts((prev) => [newData, ...prev]);
    }
  };

  const handleEdit = (index) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const productToEdit = filteredProducts[index];
    const actualIndex = products.findIndex((p) => p.id === productToEdit.id);
    setEditIndex(actualIndex);
  };

  const handleDelete = (id) => {
    if (window.confirm("Hapus data ini?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.nama.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [products, searchTerm]);

  return (
    <div className="app-container">
      <header className="header">
        <h1>MyHPP</h1>
        <p>Professional Cost & Profit Manager</p>
      </header>

      <main className="main-glass glass">
        <h2 className="section-title">
          <span>{editIndex !== null ? "📝" : "✨"}</span>
          {editIndex !== null ? "Edit Produk" : "Tambah Produk Baru"}
        </h2>

        <ProductForm
          onSubmit={handleSubmit}
          editData={editIndex !== null ? products[editIndex] : null}
          onCancel={editIndex !== null ? () => setEditIndex(null) : null}
        />
      </main>

      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            <span>📊</span>
            Daftar Produk
          </h2>
          <div style={{ flex: "1", minWidth: "250px", maxWidth: "400px" }}>
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>
        </div>

        <ProductList
          products={filteredProducts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: "2rem",
          color: "var(--text-muted)",
          fontSize: "0.9rem",
        }}
      >
        &copy; {new Date().getFullYear()} MyHPP Premium • Precision Financial
        Planning
      </footer>
    </div>
  );
}
