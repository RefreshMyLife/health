import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import ExerciseService from '../../services/ExerciseServices';
import { IExersice } from './../../models/IExercise';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

interface ExercisesProps {
  setExercises: React.Dispatch<React.SetStateAction<never[]>>;
  exercises: IExersice[];
  bodyPart: string;
}
const Exercises: FC<ExercisesProps> = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await ExerciseService.fetchAllExercise();
      } else {
        exercisesData = await ExerciseService.fetchExerciseByName(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  
  const paginate = (event: any, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="46px">
        Список упражнений
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: '107px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
