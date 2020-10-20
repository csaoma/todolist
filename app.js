const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));


let items = []

app.get('/', (req, res) => {
  let today = new Date();

  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render('index', {day: day, items: items})

})

// POST method route
app.post('/', function (req, res) {
  let item = req.body.newItem;
  items.push(item);
  res.redirect('/');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
