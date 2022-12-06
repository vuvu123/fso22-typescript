interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (dailyExerciseHours: Array<number>): ExerciseResult => {
  const totalHours = dailyExerciseHours.reduce((a, b) => a + b, 0);
  const totalExercises = dailyExerciseHours.length;
  const trainingDays = dailyExerciseHours.filter(hour => hour > 0);

  console.log('daily exercise hours', dailyExerciseHours, 'total hours', totalHours, 'total exercises', totalExercises, 'training days', trainingDays);

  const isSuccessfulWeek = (totalHours: number): boolean => {
    if (totalHours >= 5) return true;
    return false;
  };

  const calculateRating = (totalHours: number): { rating: number, description: string } => {
    if (totalHours < 5) {
      return {
        rating: 1,
        description: 'You\'ve been slacking...'
      };
    } else if (totalHours <= 7) {
      return {
        rating: 2,
        description: 'Good work! You\'ve reached your goal hours!'
      };
    } else {
      return {
        rating: 3,
        description: 'Wow! You\'re going above and beyond! Stay hard!'
      };
    };
  };

  const rating = calculateRating(totalHours); 

  return {
    periodLength: dailyExerciseHours.length,
    trainingDays: trainingDays.length,
    success: isSuccessfulWeek(totalHours),
    rating: rating.rating,
    ratingDescription: rating.description,
    target: 5,
    average: totalHours / totalExercises,
  };
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1]));