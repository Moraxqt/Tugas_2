const daftarPasien = [
    { nama: "Kakek Budi", usia: 65 },
    { nama: "Siti", usia: 25 },
    { nama: "Nenek Aminah", usia: 70 },
    { nama: "Doni", usia: 42 }
];

function kelompokkanAntreanPasien(pasien) {
    let daftarAntrean = [];

    for (let i = 0; i < pasien.length; i++) {
        let p = pasien[i];
        let kategori = "";

        if (p.usia >= 60) {
            kategori = "Prioritas Lansia";
        } else {
            kategori = "Antrean Reguler";
        }

        daftarAntrean.push({
            nama: p.nama,
            usia: p.usia,
            kategori: kategori
        });
    }

    return daftarAntrean;
}

let hasil = kelompokkanAntreanPasien(daftarPasien);

console.log("--- ANTREAN PASIEN KLINIK ---");

for (let i = 0; i < hasil.length; i++) {
    const finalResult = `${i + 1}. ${hasil[i].nama} (${hasil[i].usia} thn) -> ${hasil[i].kategori}`;
    console.log(finalResult);
}