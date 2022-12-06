// Calculate BMI based on given height (cm) and weight (kg) => return message that suits result (i.e. Normal (healthy weight))
type Result = string;

const calculateBmi = (height: number, weight: number): Result => {
  const bmi = weight / (height / 100) ** 2;
  console.log('height (cm)', height, 'weight (kg)', weight);
  console.log('bmi', bmi);

  if (bmi < 16) {
    return 'Underweight (Severe thinness)';
  } else if (bmi <= 16.9) {
    return 'Underweight (Moderate thinness)';
  } else if (bmi <= 18.4) {
    return 'Underweight (Mild thinness)';
  } else if (bmi <= 24.9) {
    return 'Normal (healthy weight)';
  } else if (bmi <= 29.9) {
    return 'Overweight (Pre-obese)';
  } else if (bmi <= 34.9) {
    return 'Obese (Class I)';
  } else if (bmi <= 39.9) {
    return 'Obese (Class II)';
  } else {
    return 'Obese (Class III)';
  }
}

console.log(calculateBmi(180, 74));
console.log(calculateBmi(174, 83.2342));
console.log(calculateBmi(174, 72.5748));
