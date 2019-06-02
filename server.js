const express = require('express');
const app = express();
app.listen(3004, () => console.log('Listening at 3004'));
app.use(express.static('public'));
