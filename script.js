// Angkot

// var penumpang = [];
// var tambahPenumpang = function(namaPenumpang, penumpang) {
//     if (penumpang.length == 0) {
//         penumpang.push(namaPenumpang);
//         return penumpang;
//     } else {
//         for (var i = 0; i < penumpang.length; i++) {
//             if (penumpang[i] == undefined) {
//                 penumpang[i] = namaPenumpang;
//                 return penumpang;
//             } else if (penumpang[i] == namaPenumpang) {
//                 console.log('Mohon maaf, nama penumpang ' + namaPenumpang + ' sudah ada.');
//                 return penumpang;
//             } else if (i == penumpang.length - 1) {
//                 penumpang.push(namaPenumpang);
//                 return penumpang;
//             }
//         }
//     }
// }

// var hapusPenumpang = function(namaPenumpang, penumpang) {
//     if (penumpang.length == 0) {
//         console.log('Angkot masih kosong .');
//     } else {
//         for (var i = 0; i < penumpang.length; i++) {
//             if (penumpang[i] == namaPenumpang) {
//                 penumpang[i] = undefined;
//                 return penumpang;
//             } else if (i == penumpang.length - 1) {
//                 console.log(namaPenumpang + ' tidak ada di dalam angkot');
//             }
//         }
//     }
//     return penumpang;
// }

// Latihan Objek

var mhs = {
    nama: "Ahmad Junaedi",
    umur: 20,
    IPS: [3.50, 3.50, 3.45],
    alamat: {
        jalan: "Perum Regensi",
        kota: "Karawang",
        Provinsi: "Jawab Barat"
    }
};