const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Finally Home</h1>')
})

app.listen(5050, ()=> console.log('listening on port 5050...'));