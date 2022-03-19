const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('hello peko')
})

app.listen(3000, () => {
  console.log(`server is running in 3000`);
})