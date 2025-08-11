const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <style> 
                h1 {
                    color: rgb(0, 255, 42);
                }
            </style>
        </head>
        <body>
            <h1>Class Management</h1>
           
        </body>
        </html>
    `);
});

app.listen(PORT, () => { 
    console.log(`Server is running at http://localhost:${PORT}`);
});