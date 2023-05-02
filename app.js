
const express = require('express');


const app = express();


//TEMPLATE ENGINE
app.set('view engine','ejs');

// MIDDLEWARE
app.use(express.static('public'));

app.get('/',(req,res) =>{
   res.render('index');
});



const port = 3000;
app.listen(port,() => {
    console.log(`Server ${port} portunda başlatıldı...`);
    
});
