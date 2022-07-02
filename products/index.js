const express = require("express");

const app = express();

app.use(express.json());

app.use('/', (req, res, next) =>{


    return res.status(200).json({"msg": "helloe products"})
})

app.listen(8002, () => {
    console.log('productts is online')
})