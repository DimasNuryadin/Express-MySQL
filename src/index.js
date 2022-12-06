// Server

// ENV
require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();

const usersRoute = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs')

// Basic routing express : app.method(path, hadler);
// use() : bisa menggunakan semua method contoh post,get,delete,put,patch
// app.use("/", (req, res, next) => {
//   res.send("Hello World!")
// });

app.use(middlewareLogRequest);
// Midleware u/ mengizinkan request body
app.use(express.json())

// Memanggil file routes
app.use('/users', usersRoute);

// app.get("/", (req, res) => {
//   // response ada 3 : berupa text, html, dan json
//   // res.send("<h1>Hello Get Method</h1>")
//   res.json({
//     nama: "Dimas Nuryadin",
//     email: "dimasnuryadinn@gmail.com "
//   })
// })

app.listen(PORT, () => {
  console.log(`Server Berhasil di running di port : ${PORT}`)
})