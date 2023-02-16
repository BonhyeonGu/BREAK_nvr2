//index.js
const express = require('express');
const app = express();
const port = 5000;

const liveRouter = require('./routes/live'); app.use('/live', liveRouter);
const monitorRouter = require('./routes/monitor'); app.use('/monitor', monitorRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})