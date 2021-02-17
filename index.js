const express = require('express')
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log('App has been Started in ', port)
});
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.html')
});