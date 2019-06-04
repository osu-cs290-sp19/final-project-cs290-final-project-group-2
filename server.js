const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
var port = process.env.PORT || 3001 || 3333;
app.use(express.static('public'));


// app.use(function(req,res,next){
//   res.status(404).send("Sorry, that page does not exist");
// });
app.post('/stats/update', function (req, res)){
  console.log('req: ', req);
  res.status(200).send('Request received.');
});
app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => console.log('Listening on port ', port));
