import { Button, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IExersice } from './../../models/IExercise';

interface ExerciseCardProps {
    exercise: IExersice;
}

const ExerciseCard: FC<ExerciseCardProps> = ({ exercise }) => {

  


    return (
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row">
                <Button
                    sx={{
                        ml: '21px',
                        color: '#fff',
                        background: '#FFA9A9',
                        fontSize: '14px',
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                        '&:hover': {
                            color: 'black',
                        },
                    }}>
                    {exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: '21px',
                        color: '#fff',
                        background: '#FCC757',
                        fontSize: '14px',
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                        '&:hover': {
                            color: 'black',
                        },
                    }}>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography
                ml="21px"
                color="#000"
                fontWeight="bold"
                sx={{ fontSize: { lg: '24px', xs: '20px' } }}
                mt="11px"
                pb="10px"
                textTransform="capitalize">
                {exercise.name}
            </Typography>
        </Link>
    );
};

export default ExerciseCard;
