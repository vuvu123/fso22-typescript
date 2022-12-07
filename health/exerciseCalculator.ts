interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface RatingResult {
  rating: number;
  description: string;
}

// const parseHourArgs = (args: Array<string>): Array<number> => {
//   if (args.length < 3) throw new Error('Not enough arguments');

//   let isNumbers = true;
//   for (let i = 2; i < args.length; i++) {
//     if (isNaN(Number(args[i]))) {
//       isNumbers = false;
//     }
//   }

//   if (isNumbers) {
//     const hourValues = [];
//     for (let i = 2; i < args.length; i++) {
//       hourValues.push(Number(args[i]));
//     }
//     return hourValues;
//   }
//   throw new Error('Provided arguments were not numbers!');
// };

const isSuccessfulWeek = (totalHours: number, target: number): boolean => {
  if (totalHours >= target) return true;
  return false;
};

const calculateRating = (totalHours: number, target: number): RatingResult => {
  if (totalHours < target) {
    return {
      rating: 1,
      description: 'You\'ve been slacking...'
    };
  } else if (totalHours <= target * 1.3) {
    return {
      rating: 2,
      description: 'Good work! You\'ve reached your goal hours!'
    };
  } else {
    return {
      rating: 3,
      description: 'Wow! You\'re going above and beyond! Stay hard!'
    };
  }
};

export const calculateExercises = (dailyExerciseHours: Array<number>, target: number): ExerciseResult => {
  const totalHours = dailyExerciseHours.reduce((a, b) => a + b, 0);
  const totalExercises = dailyExerciseHours.length;
  const trainingDays = dailyExerciseHours.filter(hour => hour > 0);

  // console.log('daily exercise hours', dailyExerciseHours, 'total hours', totalHours, 'total exercises', totalExercises, 'training days', trainingDays);

  const rating = calculateRating(totalHours, target); 

  return {
    periodLength: dailyExerciseHours.length,
    trainingDays: trainingDays.length,
    success: isSuccessfulWeek(totalHours, target),
    rating: rating.rating,
    ratingDescription: rating.description,
    target: target,
    average: totalHours / totalExercises,
  };
};

// try {
//   const exerciseHours = parseHourArgs(process.argv);
//   console.log(calculateExercises(exerciseHours, 5));
// } catch (error: unknown) {
//   if (error instanceof Error) {
//     console.log(`Something went wrong. Error: ${error.message}`);
//   }
// }