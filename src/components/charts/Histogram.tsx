import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export interface HistogramData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

interface HistogramProps {
  data: HistogramData;
}

const Histogram: React.FC<HistogramProps> = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Price Distribution Across Listings',
      },
    },
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Histogram;
