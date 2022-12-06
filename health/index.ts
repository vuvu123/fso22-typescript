import express from 'express';
import calculateBmi from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const weight = req.query.weight;
  const height = req.query.height;
  const queryLength = Object.keys(req.query).length;

  if (isNaN(Number(height)) || isNaN(Number(weight)) || queryLength !== 2) {
    res.status(400).send({ error: 'malformatted parameters' });
    return;
  }

  res.send({
    weight: weight,
    height: height,
    bmi: calculateBmi(Number(height), Number(weight))
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});