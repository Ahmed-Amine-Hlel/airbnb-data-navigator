import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export interface LineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
  }[];
}

interface LineChartProps {
  data: LineChartData;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart Title',
      },
    },
  };
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <Line data={data} options={options} />{' '}
    </div>
  );
};

export default LineChart;
