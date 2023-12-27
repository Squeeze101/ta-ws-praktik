'use strict';

var response = require('../rest')
var connection = require('../koneksi')

exports.index = function(req, res){
    response.ok("Aplikasi REST API berjalan!", res)
}

// // GET tampil data mahasiswa
// exports.tampilkaryawan = function(req, res){
//     connection.query('SELECT * FROM karyawan', function(error, rows, fields){
//         if(error){
//             console.log(error);
//         }else{
//             response.ok(rows, res);
//         }
//     })
// }

// // TODO
// // GET tampilkan data mahasiswa berdasarkan [id]
// exports.tampilberdasarkanid = function(req, res){
//     let id = req.params.id;
//     connection.query("SELECT * FROM karyawan WHERE id = ?", [id],
//         function(error, rows, fields){
//             if(error){
//                 console.log(error)
//             }else{
//                 response.ok(rows, res)
//             }
//         }
//     )
// }

// // POST tambahkan data mahasiswa
// exports.tambahkaryawan = function(req, res){
//     //body data yang akan kita POST
//     var id = req.body.id;
//     var nama = req.body.nama;
//     var jabatan = req.body.jabatan;

//     connection.query('INSERT INTO karyawan(id,nama,jabatan) VALUES(?,?,?)',
//         [id, nama, jabatan],
//         function(error, rows, fields){
//             if(error){
//                 console.log(error)
//             }else{
//                 response.ok("Berhasil Menambahkan Data!", res)
//             }
//         }
//     );
// }

// // PUT mengubah data mahasiswa berdasarkan [id]
// exports.ubahkaryawan = function(req, res){
//     //body data yang akan kita POST
//     var id = req.body.id;
//     var nama = req.body.nama;
//     var jabatan = req.body.jurusan;

//     connection.query('UPDATE karyawan SET id = ?, nama=?, jabatan=? WHERE id=?', [id, nama, jabatan, id],
//         function(error, rows, fields){
//             if(error){
//                 console.log(error)
//             }else{
//                 response.ok("Berhasil Ubah Data!", res)
//             }
//         }
//     )
// }

// // DELETE menghapus data mahasiswa berdasarkan [id]
// exports.hapuskaryawan = function(req, res){
//     var id = req.body.id;
//     connection.query('DELETE FROM karyawan WHERE id=?', [id],
//     function(error, rows, fields){
//         if(error){  
//             console.log(error)
//         }else{
//             response.ok("Berhasil Hapus Data!", res)
//         }
//     }
// )}