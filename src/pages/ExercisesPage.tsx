import { Box } from '@mui/material';
import React, { useState } from 'react';
import Exercises from '../compenents/Exercises/Exercises';
import HeroBanner from '../compenents/Exercises/HeroBanner';
import SearchExercises from '../compenents/Exercises/SearchExercises';

const ExercisesPage = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  console.log(exercises);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        exercises={exercises}
      />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default ExercisesPage;
