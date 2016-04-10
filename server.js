const compression = require('compression');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(compression())
app.use(express.static(path.join(__dirname, 'public')));

app.get('*',  (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Production Express server running at localhost: + ${PORT})`)
});
