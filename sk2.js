const daftarMahasiswa = [
    { nama: "Andi", ipk: 3.6, pendapatanOrangTua: 4000000 },
    { nama: "Budi", ipk: 3.4, pendapatanOrangTua: 3000000 },
    { nama: "Cici", ipk: 3.8, pendapatanOrangTua: 6000000 },
    { nama: "Deni", ipk: 3.5, pendapatanOrangTua: 5000000 }
];

function seleksiBeasiswa(dataMahasiswa) {
    let hasilSeleksi = [];
    for (let i = 0; i < dataMahasiswa.length; i++) {
        let mhs = dataMahasiswa[i];
        mhs.status = (mhs.ipk >= 3.5 && mhs.pendapatanOrangTua <= 5000000) ? "Lolos" : "Tidak Lolos";
        hasilSeleksi.push(mhs);
    }
    return hasilSeleksi;
}

let hasil = seleksiBeasiswa(daftarMahasiswa);
hasil.forEach(mhs => {
    console.log(`Nama: ${mhs.nama} | IPK: ${mhs.ipk} | Pendapatan Orang Tua: ${mhs.pendapatanOrangTua} |Status: ${mhs.status}`);
});