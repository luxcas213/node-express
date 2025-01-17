const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/public', express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/traernombre',(req,res)=>{
    res.json({nombre: 'lucas'});
});
app.listen(PORT, () => {
    console.log(`\nServidor corriendo en http://localhost:${PORT}`);
});
