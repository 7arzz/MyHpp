import { useState, useEffect } from "react";

export default function ProductForm({ onSubmit, editData, onCancel }) {
  const [form, setForm] = useState({
    nama: "",
    bahan: "",
    biayaLain: "",
    jumlah: "",
    profit: "",
  });

  useEffect(() => {
    if (editData) {
      setForm(editData);
    } else {
      setForm({
        nama: "",
        bahan: "",
        biayaLain: "",
        jumlah: "",
        profit: "",
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAction = (e) => {
    e.preventDefault();
    if (!form.nama || !form.bahan || !form.jumlah) {
      alert("Mohon lengkapi data utama!");
      return;
    }
    onSubmit(form);
    if (!editData) {
      setForm({
        nama: "",
        bahan: "",
        biayaLain: "",
        jumlah: "",
        profit: "",
      });
    }
  };

  return (
    <form onSubmit={handleAction} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
      <div className="input-group" style={{ gridColumn: "span 2" }}>
        <label>Nama Produk</label>
        <input
          name="nama"
          className="input-field"
          placeholder="Contoh: Kopi Susu Gula Aren"
          value={form.nama}
          onChange={handleChange}
        />
      </div>
      
      <div className="input-group">
        <label>Biaya Bahan (Rp)</label>
        <input
          name="bahan"
          type="number"
          className="input-field"
          placeholder="0"
          value={form.bahan}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Biaya Operasional (Rp)</label>
        <input
          name="biayaLain"
          type="number"
          className="input-field"
          placeholder="0"
          value={form.biayaLain}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Jumlah Produk (Pcs)</label>
        <input
          name="jumlah"
          type="number"
          className="input-field"
          placeholder="1"
          value={form.jumlah}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Target Profit (%)</label>
        <input
          name="profit"
          type="number"
          className="input-field"
          placeholder="10"
          value={form.profit}
          onChange={handleChange}
        />
      </div>

      <div style={{ gridColumn: "span 2", display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>
          {editData ? "💾 Update Produk" : "➕ Tambah Produk"}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="btn btn-secondary" style={{ flex: 1 }}>
            Batal
          </button>
        )}
      </div>
    </form>
  );
}

