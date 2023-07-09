const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); // this allows us to have access to the body of the HTML which we are going to use in the post request to target the inputs in this case.

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;

  res.send('The result is ' + result);
});

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
  let w = Number(req.body.weight);
  let h = Number(req.body.height);
  let answer = parseInt(w / (h * h));

  if (answer > 25.1) {
    res.send(`Your BMI is ${answer}. You are overweight`);
  } else {
    res.send(`Your BMI is ${answer}.`);
  }
});

app.listen(9000, () => {
  console.log(`Listening on port 9000`);
});
