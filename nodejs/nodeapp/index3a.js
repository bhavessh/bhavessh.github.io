import http from 'http';

const server = http.createServer((req, res) => {
    res.end("Good morning");
    
});


server.listen(8082, () => {
    console.log("Server started");
});
