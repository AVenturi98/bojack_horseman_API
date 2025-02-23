
const express = require('express');
const app = express();
const port = 3033;
const router = require('./routers/router');
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
    res.send('App APIs')
})

app.use('/bj', router)

app.listen(port, () => {
    console.log(`My app to listen to ${port}`)
})