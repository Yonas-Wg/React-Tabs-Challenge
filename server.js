const express = require('express');
const corsAnywhere = require('cors-anywhere');

const app = express();
const host = 'localhost';
const port = 8080;

corsAnywhere.createServer({
    // Optional: modify the following settings as needed
    originWhitelist: [], // Allow all origins
}).listen(port, host, () => {
    console.log(`CORS Anywhere is running on http://${host}:${port}`);
});
