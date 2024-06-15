// Creating a HTTP server using Express

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const PORT = 1245;
const filePath = process.argv[2];

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n')
  countStudents(filePath)
  .then((result) => {
    res.write(result);
    res.end();
  })
  .catch((error) => {
    res.status(500).send(error);
  });
})

app.listen(PORT);

module.exports = app;