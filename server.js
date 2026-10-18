const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const pages = {
  '/': 'index.html',
  '/alat': 'alat.html',
  '/akademik': 'akademik.html',
  '/kontak': 'kontak.html',
};

Object.entries(pages).forEach(([route, file]) => {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', file));
  });
});

app.listen(PORT, () => {
  console.log(`Portofolio jalan di http://localhost:${PORT}`);
});
