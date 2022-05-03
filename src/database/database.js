const mongoose = require('mongoose');
const remoteUrl =
  'mongodb+srv://adm:adm@paletastrab.nyl2m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const localUrl =
  '';

function connectToDatabase() {
   
  mongoose
    .connect(`${remoteUrl}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB conectado');
    })
    .catch((err) => {
      return console.log(`Erro na conexão com o banco : ${err}`);
    });
}

module.exports = connectToDatabase;
