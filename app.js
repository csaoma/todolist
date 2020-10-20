const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));


var items = []

app.get('/', (req, res) => {
  var today = new Date();

  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render('index', {day: day, items: items})

})

// POST method route
app.post('/', function (req, res) {
  var item = req.body.newItem;
  items.push(item);
  res.redirect('/');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
