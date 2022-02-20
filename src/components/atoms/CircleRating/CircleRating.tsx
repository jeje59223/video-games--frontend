import React from "react";
import { Tooltip } from '@mui/material';
import './CircleRating.scss';

export interface CircleRatingProps {
    rating: number;
    ratings_count: number;
}

function convertsRatingToPercent(rating: number): number {
    return rating * 2 * 10;
}

const CircleRating: React.FC<CircleRatingProps> = ({
    rating,
    ratings_count,
}) => {
    const percentageRating = convertsRatingToPercent(rating);
    let colorRating = '';

    if (percentageRating >= 85) {
        colorRating = 'percentVeryGood';
    } else if (percentageRating >= 70 && percentageRating < 85) {
        colorRating = 'percentGood';
    } else if (percentageRating < 70 && percentageRating >= 50) {
        colorRating = 'percentMedium';
    } else {
        colorRating = 'percentBad';
    }

    return (
        <Tooltip title={`There were ${ratings_count} ratings `} placement="top-start" arrow>
            <svg className="CircleRating">
                <path className="CircleRating-around" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <path className={`CircleRating-percent--${colorRating}`} strokeDasharray={`${percentageRating}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <text className={`CircleRating-text--${colorRating}`} x="18" y="14" textAnchor="middle" dy="7">{`${percentageRating}%`}</text>
            </svg>
        </Tooltip>
    )
}

export default CircleRating;
