//Tipe Data pada Javascript
//1.String
var nama = "Dennis";
console.log(nama);
var umur = "20";
console.log(umur);

var nama_saya = "Dennis Jason"; //pakai underscore
console.log(nama_saya);
var namaSaya = "Dennis Jason"; //camel case
console.log(namaSaya);
var NAMA_SAYA = "Dennis Jason"; //untuk nilai constant
console.log(NAMA_SAYA);

//2.Integer
var contohAngka = 123;
console.log(contohAngka);
var jumlahJari = 10;
console.log(jumlahJari);

//3.Decimal
//jangan menggunakan koma, pakai titik
var phi = 3.14;
console.log(phi);
var random = 2342342.24234;
console.log(random);

//4.Boolean
var iniSalah = "false" //jika menggunakan petik dua atau satu dianggap sebagai string
console.log(iniSalah);
var iniBenar = true //penulisan yang benar tanpa petik
console.log(iniBenar);
var iniBooleanSalah = false
console.log(iniBooleanSalah);

//5.Array
var buah = ["apel", "duren", "duku", "durian"];
console.log(buah);

for (let i = 0; i < buah.length; i++) {
    console.log(buah[i]);
}

//6.Object
var mobil = {
    jumlahBan: 4,
    warna: "Kuning",
    karburator: false,
    injeksi: true,
    merek: "Honda",
};

//mencetak object keseluruhan
console.log(mobil);

//mencetak propeties object satu per satu
console.log(mobil.jumlahBan);
console.log(mobil.warna);
console.log(mobil.karburator);
console.log(mobil.injeksi);
console.log(mobil.merek);
