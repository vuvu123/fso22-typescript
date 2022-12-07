// Calculate BMI based on given height (cm) and weight (kg) => return message that suits result (i.e. Normal (healthy weight))
type Result = string;

// interface BMIValues {
//   value1: number;
//   value2: number;
// }

// const parseArguments = (args: Array<string>): BMIValues => {
//   if (args.length < 4) throw new Error('Not enough arguments');
//   if (args.length > 4) throw new Error('Too many arguments');

//   if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//     return {
//       value1: Number(args[2]),
//       value2: Number(args[3])
//     };
//   }
//   throw new Error('Provided arguments were not numbers!');
// };

export const calculateBmi = (height: number, weight: number): Result => {
  const bmi = weight / (height / 100) ** 2;
  // console.log('height (cm)', height, 'weight (kg)', weight);
  // console.log('bmi', bmi);

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
};

// try {
//   const { value1, value2 } = parseArguments(process.argv);
//   console.log(calculateBmi(value1, value2));
// } catch (error: unknown) {
//   if (error instanceof Error) {
//     console.log(`Something went wrong. Error: ${error.message}`);
//   }
// }