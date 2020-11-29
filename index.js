const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

http.createServer((req, res)=>{

    // if(req.url === '/favicon.ico'){
    //     res.writeHead(204).end();
    // }

    if(req.url === '/result4/'){
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "x-test,Content-Type,Accept,Access-Control-Allow-Headers",
            "Content-Type": "application/json"
        });

        let xtextValue;
        //Read request headers
        if(req.headers['x-test']){
            xtextValue = req.headers['x-test']
            console.log(req.headers['x-test'])
        } 

        //Check for body
        //https://www.youtube.com/watch?v=_1xa8Bsho6A
        //42 Minute
        let xbodyValue;
        req.on('data', (chunk)=>{
            xbodyValue = chunk.toString();
        })

        req.on('end', ()=>{
            let obj = {
                'message': 'unom',
                'x-result': xtextValue || '',
                'x-body': xbodyValue || ''
            }
            res.write(JSON.stringify(obj));
            res.end();       
        })

    }else{
        res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
        res.end('Default');
    }
}).listen(PORT, ()=> console.log(`Server is working on port ${PORT}`));


