let haftalikCizelge = [];

let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

for (let gun of gunler) {
    let aktivite = prompt(`${gun} günü için bir aktivite girin:`);

    let gunlukAktivite = {
        gun: gun,
        aktivite: aktivite
    };
    haftalikCizelge.push(gunlukAktivite);
}

console.log("Haftalık Aktivite Çizelgesi:");
for (let gunlukAktivite of haftalikCizelge) {
    console.log(`${gunlukAktivite.gun}: ${gunlukAktivite.aktivite}`);
}
