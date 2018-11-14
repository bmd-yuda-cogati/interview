arr = [
  { name: "satu", group: "siswa" },
  { name: "dua", group: "pelajar" },
  { name: "tiga", group: "pendatang" },
  { name: "empat", group: "siswa" }
];

let temp = [];

arrSort = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].group == "siswa") {
      temp.push(arr[i]);
    }
  }
};

arrSort();
console.log("temp", temp);
console.log("arr", arr.length);
// // buat kode untuk menampilkan group siswa

// Kunci Jawaban
// newArr = arr.filter(s => s.group === "siswa");
// console.log(newArr);
