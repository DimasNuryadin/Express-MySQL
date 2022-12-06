// Middleware : sebuah fungsi yang bisa mengakses req,res,next
// biasa digunakan sebagai jembatan ketika proses request terjadi
const logRequest = (req, res, next) => {
  console.log('Terjadi request ke PATH :', req.path);
  next();
}

module.exports = logRequest;