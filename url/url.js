const http=require('http');
const url=require('url')
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url);
    res.end()
})

http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    const q=url.parse(req.url,true).query;
    const text=q.year+"" +q.month;
    res.end(text)

})

const adr="http://localhost:8000/default.html?year=2021&month=November";
const query=url.parse(adr,true);
console.log(query.host)
console.log(query.pathname);
console.log(query.search);
console.log(query.hostname)


const adr1="http://www.google.com";
const q=url.parse(adr,true)
console.log(q.host);
console.log(q.path);

const address1="http://www.baidu.com.cn";
const request1=url.parse(address1,true)
console.log(request1.hostname)
console.log(request1.path);

