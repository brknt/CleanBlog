
const express = require('express');
const mongoose = require('mongoose');

const Post = require('./models/Post');


const app = express();

// DB CONNECT
mongoose.connect('mongodb://localhost/cleanblog-test-db', 
{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


//TEMPLATE ENGINE
app.set('view engine','ejs');



// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



// ROUTES
app.get('/', async (req,res) =>{
   const post = await Post.find({});
   console.log(post);
   
   res.render('index',{
    post
   });
});

app.get('/about', (req,res) =>{
    res.render('about');
});

app.get('/add', (req,res) =>{
    res.render('add');
});

app.post('/photos', async (req,res) =>{
   await Post.create(req.body);
   res.redirect('/');
});




const port = 3000;
app.listen(port,() => {
    console.log(`Server ${port} portunda başlatıldı...`);
    
});
