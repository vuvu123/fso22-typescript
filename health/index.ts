import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

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

app.post('/exercises', (req, res) => {
  console.log('req body', req.body)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { daily_exercises, target } = req.body

  if (!target || !daily_exercises) {
    res.status(400).send({ error: 'parameters are missing' });
  }

  if (isNaN(Number(target)) || daily_exercises.some(isNaN)) {
    res.status(400).send({ error: 'parameters are not numbers' });
  }

  res.send(calculateExercises(daily_exercises, target));

})

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});