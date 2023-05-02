// Clean Blog projesini farklı ödevlere ayırarak yapmaya çalışacağız. Bu ödevimizde yapılması gerekenler:



// CleanBlog proje klasörünü oluşturalım.
// Package.json dosyasını oluşturalım.
// Prettier ayarlarını yapalım.(İsteğe bağlı)
// Express ve Nodemon modüllerini indirelim.
// git init ile lokal repomuzu oluşturalım.
// get request içerisinde const blog = { id: 1, title: "Blog title", description: "Blog description" }, içeriğini gönderelim.
// .gitignore dosyası oluşturalım ve ilk repomuzu gönderelim.


const express = require('express');

const app = express();

const blog = { id: 1, title: "Blog title", description: "Blog description" };

app.get('/',(req,res) =>{
    console.log('get çağrıldı.');
    res.send(blog);
});


const port = 3000;
app.listen(port,() => {
    console.log(`Server ${port} portunda başlatıldı...`);
    
});
