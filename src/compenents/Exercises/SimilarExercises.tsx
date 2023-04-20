import { Box, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { IExersice } from './../../models/IExercise';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

interface SimilarExercisesProps {
  targetMuscleExercises: IExersice[];
  equipmentExercises: IExersice[];
}

const SimilarExercises: FC<SimilarExercisesProps> = ({
  targetMuscleExercises,
  equipmentExercises,
}) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography
      sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }}
      fontWeight={700}
      color="#000"
      mb="33px">
      Упражнения Для{' '}
      <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Группы Мышц</span>
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar
          exercises={targetMuscleExercises}
          data={null}
          setBodyPart={null}
          bodyPart={null}
        />
      ) : (
        <Loader />
      )}
    </Stack>
    <Typography
      sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }}
      fontWeight={700}
      color="#000"
      mb="33px">
      Упражнения С Похожим{' '}
      <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Сняряжением</span>{' '}
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar
          exercises={equipmentExercises}
          data={null}
          setBodyPart={null}
          bodyPart={null}
        />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);
export default SimilarExercises;
