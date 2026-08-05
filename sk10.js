const daftarEmail = [
    "justin.ohio@gmail.com",
    "roma.irama.com", 
    "lappak_32@yahoo",
    "lionel_sindhubaren@outlook.com"
];

function validasiDaftarEmail(emails) {
    let hasilValidasi = [];

    for (let i = 0; i < emails.length; i++) {
        let email = emails[i];
        let status = "";

        if (email.includes('@') && email.includes('.')) {
            status = "Valid";
        } else {
            status = "Tidak Valid";
        }

        hasilValidasi.push({
            email: email,
            status: status
        });
    }

    return hasilValidasi;
}

let hasil = validasiDaftarEmail(daftarEmail);

console.log("--- HASIL VALIDASI EMAIL ---");

for (let i = 0; i < hasil.length; i++) {
    console.log(`${i + 1}. ${hasil[i].email} -> [${hasil[i].status}]`);
}