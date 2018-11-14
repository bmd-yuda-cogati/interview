arr = [
  { id: 1, name: "satu" },
  { id: 2, name: "dua" },
  { id: 3, name: "tiga" }
];

arrSort = () => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].id + " - " + arr[i].name);
  }
};

arrSort();

//buat output:
//1 - satu
//2 - dua
//3 - tiga

// // Kunci Jawaban
// arr.map(s => console.log(`${s.id} - ${s.name}`));
