/* eslint-disable */
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 1234;
app.use(express.static('dist'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});
app.listen(port, () => {
  console.log('Server started on port:', port);
});
