const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
app.use(cors())

const allChefs = require('./allDetails.json');

app.get('/', (req, res) => {
  res.send('Hellow')
})
app.get('/chefs', (req, res) => {
  res.send(allChefs)
})
app.get('/chefs/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const single = allChefs.find(s => s.id == id)
  res.send(single)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})