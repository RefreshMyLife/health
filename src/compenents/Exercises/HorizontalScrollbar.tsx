import { Box, Typography } from '@mui/material';
import React, { FC, useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import RightArrowIcon from '../../assets/exercises/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/exercises/icons/left-arrow.png';
import { IExersice } from '../../models/IExercise';
interface HorizontalScrollbarProps {
    data: string[] | null;
    setBodyPart: React.Dispatch<React.SetStateAction<string>> | null;
    bodyPart: string | null;
    exercises: IExersice[];
}
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const HorizontalScrollbar: FC<HorizontalScrollbarProps> = ({
    data,
    setBodyPart,
    bodyPart,
    exercises,
}) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data
                ? data.map((item) => (
                      //@ts-ignore
                      <Box key={item} itemId={item} title={item} m="0 40px">
                          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
                      </Box>
                  ))
                : exercises.map((item, index) => (
                      //@ts-ignore
                      <Box key={index} itemId={index} m="0 40px">
                          <ExerciseCard key={index} exercise={item} />
                      </Box>
                  ))}
        </ScrollMenu>
    );
};
export default HorizontalScrollbar;
