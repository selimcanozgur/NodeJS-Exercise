/*
createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.
*/

const http = require('http');
const server = http.createServer((req, res)=>{
    if (req.url == '/'){
        res.writeHead(200,{'Content-Type' : 'text/html'})
        res.write('<h2> Welcome to the home page <h2/>')
    }
    else if (req.url == '/about'){
        res.writeHead(200,{'Content-Type' : 'text/html'})
        res.write ('<h1> Welcome to the about page </h1>')
    }

    else if (req.url == '/contact'){
        res.writeHead(200,{'Content-Type' : 'text/html'})
        res.write ('<h1> Welcome to the contact page. </h1>')
    }
    else {
        res.writeHead(404,{'Content-Type' : 'text/html'})
        res.write (`<strong> 404 </strong> <br> The requested URL was not found `)
    }
    res.end();
})

const port = 5000;
server.listen(port,()=>{
    console.log(`Server port opened at ${port}`);
})  