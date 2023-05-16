
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Post = require('./models/Post');

const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');

const app = express();

// DB CONNECT 
mongoose.connect('mongodb+srv://brknt:ZxvLsL6OGVwifqa0@cluster0.p3hsv9i.mongodb.net/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() =>{
        console.log('DB CONNECTED!');
        
    }).catch((err) =>{
        console.log(err);
        
    });


//TEMPLATE ENGINE
app.set('view engine', 'ejs');



// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method',{
    methods:["POST","GET"]
  }));



// ROUTES
app.get('/', postController.getAllPost);
app.get('/posts/:id', postController.getPost);
app.post('/posts',postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);


app.get('/about', pageController.getAboutPage);
app.get('/add',pageController.getAddPage);
app.get('/posts/edit/:id', pageController.getEditPage);





const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server ${port} portunda başlatıldı...`);

});
