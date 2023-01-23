const http=require('http');
const realtime=require('./exportfile');
const math=require('./math')
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('the date and time are current:'+ realtime());
    res.write('the math randomness number is:'+math());
    res.end()
})
