const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    var routeFile = path.join(__dirname, 'home.html');

    res.sendFile(routeFile);
})

app.listen(port, () => {
    console.log('app listening on port http://localhost:' + port)
})