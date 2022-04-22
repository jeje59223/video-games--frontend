import React from "react";
import {
    buildStyles,
    CircularProgressbarWithChildren
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Tooltip } from "@mui/material";
import { convertsRatingToPercent } from "./convertsRatingToPercent";
import { generateRatingColor } from "./generateRatingColor";

export interface CircularProgressbarProps {
    rating: number;
    ratings_count: number;
}

const CircularProgressbar: React.FC<CircularProgressbarProps> = ({
    rating,
    ratings_count,
}) => {
    const percentageRating = convertsRatingToPercent(rating);

    return (
        <Tooltip title={`There were ${ratings_count} ratings `} placement="top-start" arrow>
            <div className="CircleProgressbar">
                <CircularProgressbarWithChildren background value={percentageRating} styles={buildStyles({
                    backgroundColor: "#494949",
                    pathColor: `${generateRatingColor(percentageRating)}`,
                    trailColor: "grey",
                })}>
                    <div className="CircleProgressbar-rating">
                        <strong>{percentageRating}</strong><span>%</span>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </Tooltip>
    )
}

export default CircularProgressbar
