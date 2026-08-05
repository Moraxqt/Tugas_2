const daftarProduk = [
    { namaProduk: "Mouse Gaming", stok: 4, aktif: true },
    { namaProduk: "Keyboard Mechanical", stok: 15, aktif: true },
    { namaProduk: "Monitor 24 Inch", stok: 2, aktif: true },
    { namaProduk: "Headset Wireless", stok: 3, aktif: true }
];

const batasMinimum = 5;

function cekRestockGudang(produk, batasMinimum) {
    let perluRestock = [];

    for (let i = 0; i < produk.length; i++) {
        let barang = produk[i];

        if (barang.stok < batasMinimum && barang.aktif === true) {
            perluRestock.push(barang);
        }
    }

    return perluRestock;
}

let hasilRestock = cekRestockGudang(daftarProduk, batasMinimum);

console.log(`--- PRODUK WAJIB RESTOCK (STOK < ${batasMinimum}) ---`);

for (let i = 0; i < hasilRestock.length; i++) {
    const finalResult = `${i + 1}. ${hasilRestock[i].namaProduk} | Sisa Stok: ${hasilRestock[i].stok}`;
    console.log(finalResult);
}