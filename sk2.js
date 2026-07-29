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
        let status = "";

        if (mhs.ipk >= 3.5 && mhs.pendapatanOrangTua <= 5000000) {
            status = "Lolos";
        } else {
            status = "Tidak Lolos";
        }

        hasilSeleksi.push({
            nama: mhs.nama,
            ipk: mhs.ipk,
            pendapatanOrangTua: mhs.pendapatanOrangTua,
            status: status
        });
    }

    return hasilSeleksi;
}

let hasil = seleksiBeasiswa(daftarMahasiswa);

for (let i = 0; i < hasil.length; i++) {
    const finalResult = `
Nama             : ${hasil[i].nama}
IPK              : ${hasil[i].ipk}
Pendapatan Ortua : Rp ${hasil[i].pendapatanOrangTua}
Status           : ${hasil[i].status}

-----------------------------------`;

    console.log(finalResult);
}