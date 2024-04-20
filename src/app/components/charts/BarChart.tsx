import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor?: string;
    borderWidth?: number;
  }[];
}

interface ChartProps {
  data: ChartData;
}

const BarChart: React.FC<ChartProps> = ({ data }) => {
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
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
