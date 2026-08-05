const daftarKendaraan = [1234, 5679, 8888, 1111];
const tanggalHariIni = 15;

function filterParkirGanjilGenap(daftarPlat, tanggal) {
    let kendaraanDiizinkan = [];
    let isTanggalGanjil = (tanggal % 2 !== 0);

    for (let i = 0; i < daftarPlat.length; i++) {
        let plat = daftarPlat[i];
        
        let isPlatGanjil = (plat % 2 !== 0);

        if (isPlatGanjil === isTanggalGanjil) {
            kendaraanDiizinkan.push(plat);
        }
    }

    return kendaraanDiizinkan;
}

let hasil = filterParkirGanjilGenap(daftarKendaraan, tanggalHariIni);

console.log(`--- KENDARAAN DIIZINKAN (TANGGAL ${tanggalHariIni}) ---`);
for (let i = 0; i < hasil.length; i++) {
    console.log(`${i + 1}. Plat Nomor : ${hasil[i]}`);
}