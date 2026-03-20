export function hitungHPP({ bahan, biayaLain, jumlah, profit }) {
  const total = Number(bahan) + Number(biayaLain);
  const hpp = total / (jumlah || 1);
  const hargaJual = hpp + (hpp * profit / 100);

  return { total, hpp, hargaJual };
}