const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;
  console.log('Server running on ' + port);
});
