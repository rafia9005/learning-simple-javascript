// ada  3 contoh variable
let a = 10;
const b = 10;
var c = 10;

// fungsi sama saja -_-
let satu = 100;
let dua = 10;

// di tambah
const tambah = satu + dua;
console.log(tambah); // output 110

// di kurang
const kurang = satu - dua;
console.log(kurang); // ouput 90 karena satu lebih kecil dari 2

// di bagi
const bagi = satu / dua;
console.log(bagi); // output 10

// di kali
const kali = satu * dua;
console.log(kali); // output 1000;

// contoh fungsi if else dan try catch
const data = "empty";
// if else
if (data == "empty") {
  // jika isi dari variable data = "empty"
  console.log("data kosong"); // maka console = "data kosong"
} else {
  // dan jika sebaliknya
  console.log("data ada"); // console = "data ada"
}

// try catch
try {
  //  try dalam bahasa inggris adalah = "mencoba" biasa nya try dan catch ini di gunakan untuk mengirim suatu data ke back end
  console.log("hello");
} catch {
  // dan fungsi catch jika data yang di kirim itu gagal, maka di bawah catch lah yang akan di jalankan
  console.log("tidak jadi");
}

// perulangan
for (let i = 0; i < 10; i++) {
  // let i = 0 artinya variable i nilai nya = 0. i < 10 artinya i akan di lakukan perulangan sampai 10 kali.
  console.log("helo world", i + 1);
}
