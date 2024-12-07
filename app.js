const express = require ('express');
const app = express()
const port = 3000;

const postRouter = require ('./routes/posts');
app.use("./posts", postRouter);
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send('Server del mio blog');
});



app.listen(port, ()=>{
    console.log('Ascolto mode on')
});