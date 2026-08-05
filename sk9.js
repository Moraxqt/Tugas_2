const daftarPemain = [
    { nama: "ProGamer777", skor: 820 },
    { nama: "SlayerX", skor: 950 },
    { nama: "NoobMaster", skor: 650 },
    { nama: "ShadowNigga", skor: 910 },
    { nama: "CyberKing", skor: 780 }
];

function prosesLeaderboard(pemain) {
    pemain.sort(function(a, b) {
        return b.skor - a.skor;
    });

    let topLeaderboard = [];

    for (let i = 0; i < 3 && i < pemain.length; i++) {
        let p = pemain[i];
        let tier = "";

        if (p.skor >= 900) {
            tier = "Gold Tier";
        } else if (p.skor >= 750) {
            tier = "Silver Tier";
        } else {
            tier = "Bronze Tier";
        }

        topLeaderboard.push({
            peringkat: i + 1,
            nama: p.nama,
            skor: p.skor,
            tier: tier
        });
    }

    return topLeaderboard;
}

let hasilLeaderboard = prosesLeaderboard(daftarPemain);

console.log("--- TOP 3 LEADERBOARD E-SPORT ---");

for (let i = 0; i < hasilLeaderboard.length; i++) {
    let p = hasilLeaderboard[i];
    console.log(`${p.peringkat}. ${p.nama} | Skor: ${p.skor} [${p.tier}]`);
}