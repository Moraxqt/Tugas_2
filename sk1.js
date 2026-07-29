const hargaBuku = [45000, 30000, 65000, 20000];

function hitungTotalBuku(daftarHarga) {
    let total = 0;

    for (let i = 0; i < daftarHarga.length; i++) {
        total = total + daftarHarga[i];
    }
    
    if (total > 150000) {
        let diskon = total * 0.15;
        total = total - diskon;
    }

    return total;
}

let bayar = hitungTotalBuku(hargaBuku);
console.log("Total bayar: " + bayar);