const daftarRestoran = [
    { nama: "AW", rating: 4.8, buka: true },
    { nama: "MCD", rating: 4.2, buka: true },
    { nama: "KFC", rating: 4.6, buka: false },
    { nama: "Burger King", rating: 4.7, buka: true }
];

const ratingBintangMin = 4.5;

function filterRestoranFavorit(restoran, minRating) {
    let namaRestoranFavorit = [];

    for (let i = 0; i < restoran.length; i++) {
        let resto = restoran[i];

        if (resto.rating >= minRating && resto.buka === true) {
            namaRestoranFavorit.push(resto.nama);
        }
    }

    return namaRestoranFavorit;
}

let hasilFilter = filterRestoranFavorit(daftarRestoran, ratingBintangMin);

console.log(`--- DAFTAR RESTORAN FAVORIT & BUKA ---`);

for (let i = 0; i < hasilFilter.length; i++) {
    const finalResult = `${i + 1}. ${hasilFilter[i]}`;
    console.log(finalResult);
}