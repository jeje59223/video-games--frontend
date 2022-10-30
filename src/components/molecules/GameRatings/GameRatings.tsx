import React from 'react';
import {
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Game } from '../../../models/game';
import CircularProgressbar from '../../atoms/CircularProgressBar/CircularProgressBar';
import './GameRatings.scss';

export interface GameRatingsProps {
  rating: Game['rating'];
  ratings?: Game['ratings']
  ratings_count: Game['ratings_count'];
}

export const GameRatings: React.FC<GameRatingsProps> = ({
  rating,
  ratings_count,
  ratings,
}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Based on ${ratings_count}`,
      },
    },
  };

  const labels = ratings?.map((r) => r.id);

  const data = {
    labels,
    datasets: [
      {
        label: 'Ratings count',
        data: ratings?.map((r) => r.count),
        backgroundColor: '#0288d1',
      },
    ],
  };
  return (
    <div className="GameRatings">
      <div style={{ width: '100px', margin: 'auto' }}>
        <CircularProgressbar rating={rating} ratings_count={ratings_count} />
      </div>
      <div className="GameRatings--details">
          <Bar options={options} data={data} />
      </div>
    </div>
  );
};
