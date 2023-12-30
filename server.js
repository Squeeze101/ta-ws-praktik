const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pembeli = require('./src/models/PembeliModel');
const paket = require('./src/models/PaketModel');
const pulsa = require('./src/models/PulsaModel');
const transaksi = require('./src/models/TransaksiModel');

// Panggil routes
const routespembeli = require('./src/routes/routePembeli');

routespembeli(app);
const routespaket = require('./src/routes/routePaket');
routespaket(app);

const routespulsa = require('./src/routes/routePulsa');
routespulsa(app);

const routetransaksi = require('./src/routes/routeTransaksi');
routetransaksi(app);


// Sinkronisasi model dengan database
pulsa.sync({ force: false })
  .then(() => {
    console.log('Tabel Pulsa telah dibuat');
  })
  .catch((err) => {
    console.error('Gagal membuat tabel Pulsa:', err);
  });

  paket.sync({ force: false })
  .then(() => {
    console.log('Tabel Paket telah dibuat');
  })
  .catch((err) => {
    console.error('Gagal membuat tabel Transaksi:', err);
  });

pembeli.sync({ force: false })
  .then(() => {
    console.log('Tabel Pembeli telah dibuat');
  })
  .catch((err) => {
    console.error('Gagal membuat tabel Pembeli:', err);
  });

  transaksi.sync({ force: false })
  .then(() => {
    console.log('Tabel Transaksi telah dibuat');
  })
  .catch((err) => {
    console.error('Gagal membuat tabel Transaksi:', err);
  });

// Menjalankan server pada port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
