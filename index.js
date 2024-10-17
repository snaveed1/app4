const http = require('http');

const hostname = '0.0.0.0';
const port = 3004;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>App4</title>
            <style>
                body {
                    background-color: red;
                    margin: 0;
                    height: 100vh;
                    display: flex;
                    justify-content: flex-start;
                    align-items: start;
                    font-size: 2em;
                    font-weight: bold;
                    text-align: left;
                }
                div {
                    margin: 20px;
                }
            </style>
        </head>
        <body>
            <div>Take care byee from app4</div>
        </body>
        </html>
    `);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
