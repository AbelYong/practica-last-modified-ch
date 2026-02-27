const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('demo'));

app.get('/products', (req, res) => {
    res.sendFile(__dirname+'/demo/product.html')
});

app.listen(port, () => {
    console.log(`Servidor de frontend corriendo en http://localhost:${port}`);
});