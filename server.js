const express = require('express');
const app = express();
const host = 'http://localhost'
const port = 8080

// We'll use the public directory to serve the Vue App
app.use(express.static('public'));

app.listen(port, () => {
 console.log(`App listening on ${host}:${port}`);
});