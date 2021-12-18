import React from "react";
import './CircleRating.scss';

export interface CircleRatingProps {
    rating: number;
}

function convertsRatingToPercent(rating: number): number {
    return rating * 2 * 10;
}

const CircleRating: React.FC<CircleRatingProps> = ({
    rating,
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
        <svg viewBox="0 0 75 75"  className="CircleRating">
            <path className="CircleRating-around" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path className={`CircleRating-percent--${colorRating}`} strokeDasharray={`${percentageRating}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <text className={`CircleRating-text--${colorRating}`} x="18" y="14" textAnchor="middle" dy="7">{`${percentageRating}%`}</text>
        </svg>
    )
}

export default CircleRating;
