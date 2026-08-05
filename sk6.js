const jamKerjaSeminggu = [4, 6, 6, 9, 8, 5]; 

function hitungGajiMingguan(jamKerja) {
    let totalJam = 0;

    for (let i = 0; i < jamKerja.length; i++) {
        totalJam += jamKerja[i];
    }

    let tarifDasar = 50000;
    let tarifLembur = 75000;
    let totalGaji = 0;

    if (totalJam > 40) {
        let jamLembur = totalJam - 40;
        let gajiBiasa = 40 * tarifDasar;
        let gajiLembur = jamLembur * tarifLembur;
        
        totalGaji = gajiBiasa + gajiLembur;
    } else {
        totalGaji = totalJam * tarifDasar;
    }

    return totalGaji;
}

let gajiBersih = hitungGajiMingguan(jamKerjaSeminggu);

console.log("--- PERHITUNGAN GAJI MINGGUAN ---");
console.log(`Total Gaji Bersih : Rp ${gajiBersih}`);