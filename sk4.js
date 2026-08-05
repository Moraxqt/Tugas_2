const kaloriHarian = [450, 700, 350, 600];
const targetKalori = 2000;

function evaluasiAsupanKalori(daftarKalori, target) {
    let totalKalori = 0;

    // 1. Menghitung total kalori harian menggunakan perulangan for
    for (let i = 0; i < daftarKalori.length; i++) {
        totalKalori += daftarKalori[i];
    }

    // 2 & 3. Mengecek kondisi dan mengembalikan pesan evaluasi nutrisi
    if (totalKalori > target) {
        return `Total kalori harian (${totalKalori} kcal) MELEBIHI target (${target} kcal).`;
    } else if (totalKalori < target) {
        return `Total kalori harian (${totalKalori} kcal) KURANG DARI target (${target} kcal).`;
    } else {
        return `Total kalori harian (${totalKalori} kcal) PAS dengan target (${target} kcal).`;
    }
}

let pesanEvaluasi = evaluasiAsupanKalori(kaloriHarian, targetKalori);

console.log("--- EVALUASI KALORI HARIAN ---");
console.log(pesanEvaluasi);