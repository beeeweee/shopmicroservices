const express = require("express");
const cors = require('cors')
const proxy = require('express-http-proxy')
//will take rquest and redirect based upon endpoints

const app = express();

app.use(cors());
app.use(express.json());


app.use('/customer', proxy('http://localhost:8001'))
app.use('/shopping', proxy('http://localhost:8003')) //shoping
app.use('/', proxy('http://localhost:8002'))//products

app.listen(8000, () => {
    console.log('Gateway is online')
})