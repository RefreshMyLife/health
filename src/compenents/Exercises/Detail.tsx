import { Button, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { IExersice } from './../../models/IExercise';

import BodyPartImage from '../../assets/exercises/icons/body-part.png';
import TargetImage from '../../assets/exercises/icons/target.png';
import EquipmentImage from '../../assets/exercises/icons/equipment.png';
import { useAppDispatch } from '../../hooks/redux';
import { addExercise } from '../../store/reducers/exercise/exercise';
interface DetailProps {
    exerciseDetail: IExersice;
}

const Detail: FC<DetailProps> = ({ exerciseDetail }) => {
    const dispatch = useAppDispatch();
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const handleAddExercise = () => {
        dispatch(addExercise(exerciseDetail));
    };
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];
    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography
                    sx={{ fontSize: { lg: '64px', xs: '30px' } }}
                    fontWeight={700}
                    textTransform="capitalize">
                    {name}
                </Typography>
                <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
                    Тренировки делают вас сильнее. <br />{' '}
                    <span style={{ textTransform: 'capitalize' }}>{name}</span> bup одно из лучших
                    упражнения для ваших групп мышц {target}.<br /> Это даст вам заряд хорошего
                    настроения и энергии.
                </Typography>
                {extraDetail?.map((item) => (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button
                            sx={{
                                background: '#FFF2DB',
                                borderRadius: '50%',
                                width: '100px',
                                height: '100px',
                            }}>
                            <img
                                src={item.icon}
                                alt={bodyPart}
                                style={{ width: '50px', height: '50px' }}
                            />
                        </Button>
                        <Typography
                            textTransform="capitalize"
                            sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
                <Button
                    onClick={() => handleAddExercise()}
                    sx={{
                        background: '#FFF2DB',
                        borderRadius: '20px',
                        padding: '20px',
                        fontWeight: '700',
                        width: '50%',
                        color: 'rgb(255, 38, 37)',
                    }}>
                    Добавить упражнение
                </Button>
            </Stack>
        </Stack>
    );
};

export default Detail;
