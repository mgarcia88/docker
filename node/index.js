const express = require('express')
const app = express()
const port = 3000

const db = require('./db')

app.get('/', async (req, res) => {
  await db.insertOne()
  var result = await db.getAll();
  var htmlResult = '<h1>Full Cycle Rocks!</h1>'
  console.log(result)
  result.forEach(element => {
    htmlResult += '<p>'+element.name+'</p>'
  })

  res.send(htmlResult)
})

app.listen(port, () => {
  console.log(`rodando ..`)
})