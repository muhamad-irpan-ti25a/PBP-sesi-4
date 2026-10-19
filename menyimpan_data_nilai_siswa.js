
let studentsScore = [
    {
        name: 'Andi',
        score: 90
    },
    {
        name: 'Rudi',
        score: 80
    },
    {
        name: 'Dira',
        score: 100
    }
];

let siswaTertinggi = studentsScore[0];

for (let siswa of studentsScore) {
    if (siswa.score > siswaTertinggi.score) {
        siswaTertinggi = siswa;
    }
}

console.log("Nama siswa dengan nilai terbesar:", siswaTertinggi.name);
console.log("Nilai:", siswaTertinggi.score);
