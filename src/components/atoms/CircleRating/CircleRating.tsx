import React from "react";
import './CircleRating.scss';

const styles = {
    percentVeryGood: {
        stroke: "#efc400",
    },
    percentGood: {
        stroke: "#4dd4ac",
    },
    percentMedium: {
        stroke: "#fd7e14",
    },
    percentBad: {
        stroke: "#dc3545",
    }
}

export interface CircleRatingProps {
    rating: number;
}

const CircleRating: React.FC<CircleRatingProps> = ({
    rating,
}) => {
    return (
        <svg viewBox="0 0 75 75"  className="CircleRating">

            <path className="CircleRating-around" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            {
                rating * 2 * 10 >= 80 &&
                <path style={styles.percentVeryGood} className="CircleRating-percent" strokeDasharray={`${rating * 2 * 10}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            }
            {
                rating * 2 * 10 >= 70 && rating * 2 * 10 < 80 &&
                <path style={styles.percentGood} className="CircleRating-percent" strokeDasharray={`${rating * 2 * 10}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            }
            {
                (rating * 2 * 10 < 70 && rating * 2 * 10 >= 50) &&
                <path style={styles.percentMedium} className="CircleRating-percent" strokeDasharray={`${rating * 2 * 10}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            }
            {
                (rating * 2 * 10 < 50) &&
                <path style={styles.percentBad} className="CircleRating-percent" strokeDasharray={`${rating * 2 * 10}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            }
            <text x="18" y="14" textAnchor="middle" dy="7">{`${rating * 2 * 10}%`}</text>

        </svg>
    )
}

export default CircleRating;
