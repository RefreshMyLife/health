import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../compenents/Exercises/Detail';
import ExerciseVideos from '../compenents/Exercises/ExerciseVideos';
import SimilarExercises from '../compenents/Exercises/SimilarExercises';
import { RAPID_API_EXERCISE, RAPID_API_YOUTUBE } from '../http/http';
import { IExersice } from '../models/IExercise';

import ExerciseService from '../services/ExerciseServices';
import { IYouTubeVideo } from './../models/IYouTubeVideo';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState<IExersice>();
  const [exerciseVideos, setExerciseVideos] = useState<IYouTubeVideo[]>();
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDetailData = await ExerciseService.fetchExerciseByValue(
        `${RAPID_API_EXERCISE}/exercises/exercise/${id}`,
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await ExerciseService.fetchYouTubeVideo(
        `${RAPID_API_YOUTUBE}/search?query=${exerciseDetailData.name} exercise`,
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await ExerciseService.fetchExerciseByValue(
        `${RAPID_API_EXERCISE}/exercises/target/${exerciseDetailData.target}`,
      );
      setTargetMuscleExercises(targetMuscleExercisesData);
      console.log('targetMuscleExercisesData', targetMuscleExercisesData);
      const equimentExercisesData = await ExerciseService.fetchExerciseByValue(
        `${RAPID_API_EXERCISE}/exercises/equipment/${exerciseDetailData.equipment}`,
      );
      setEquipmentExercises(equimentExercisesData);
      console.log('equimentExercisesData', equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
