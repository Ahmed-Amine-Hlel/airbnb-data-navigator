'use client';
import React from 'react';
import BarChart from '@/components/charts/BarChart';
import PieChart from '@/components/charts/PieChart';
import LineChart from '@/components/charts/LineChart';
import Histogram from '@/components/charts/Histogram';
import { useData } from '../../hooks/useData';

const Overview = () => {
  const { listings } = useData();

  // console.log(listings);

  // Data processing for BarChart
  const neighbourhoodGroups = listings.reduce(
    (acc: { [key: string]: number }, curr) => {
      acc[curr.neighbourhood_group] = (acc[curr.neighbourhood_group] || 0) + 1;
      return acc;
    },
    {} as { [key: string]: number }
  );

  const barChartData = {
    labels: Object.keys(neighbourhoodGroups),
    datasets: [
      {
        label: 'Number of Properties',
        data: Object.values(neighbourhoodGroups) as number[],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  // Data processing for PieChart
  const roomTypeCounts = listings.reduce(
    (acc: { [key: string]: number }, { room_type }) => {
      acc[room_type] = (acc[room_type] || 0) + 1;
      return acc;
    },
    {} as { [key: string]: number }
  );

  const pieChartData = {
    labels: Object.keys(roomTypeCounts),
    datasets: [
      {
        data: Object.values(roomTypeCounts) as number[],
        backgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#cc65fe',
          '#ffce56',
          '#4bc0c0',
        ],
      },
    ],
  };

  // Data processing for LineChart
  const lineChartData = {
    labels: listings.slice(1, 150).map((_, i) => `Month ${i + 1}`),
    datasets: [
      {
        label: 'Average Availability',
        data: listings
          .slice(1, 150)
          .map((listing) => listing.availability_365) as number[],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const priceRanges = listings.reduce(
    (acc: { [key: string]: number }, { price }) => {
      const range = Math.floor(price / 100) * 100;
      acc[range] = (acc[range] || 0) + 1;
      return acc;
    },
    {} as { [key: string]: number }
  );

  const histogramData = {
    labels: Object.keys(priceRanges),
    datasets: [
      {
        label: 'Price Distribution',
        data: Object.values(priceRanges) as number[],
        backgroundColor: 'rgba(255,99,132,0.2)',
      },
    ],
  };

  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    } else {
      console.error('Modal not found');
    }
  };

  const cardStyles = 'px-6 py-8 shadow-lg rounded-lg bg-white text-center';
  const buttonStyles =
    'btn btn-large btn-neutral mt-4 py-2 px-6 rounded text-white font-semibold';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold leading-tight text-gray-900">
          Airbnb Price Optimization Case Study
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          This section provides an in-depth analysis of the Airbnb market in
          NYC, focusing on optimizing pricing strategies through Business
          Intelligence tools to enhance profitability and market
          competitiveness.
        </p>
      </div>

      {/* Business Context and Model of Need */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Business Need and Objectives
        </h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>
            Develop optimal pricing strategies to maximize profitability and
            ensure high occupancy rates throughout varying seasons.
          </li>
          <li>
            Perform comprehensive market analysis to understand and outperform
            competitors.
          </li>
          <li>
            Deploy targeted KPIs to steer operational and strategic decisions
            effectively.
          </li>
        </ul>
      </div>

      <div className="border-b border-[0.05rem] border-[#140D20] w-full my-8 rounded" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={cardStyles}>
          <h3 className="text-xl font-semibold">Neighbourhood Distribution</h3>
          <p className="text-gray-600">
            Analyze property distribution across NYC&apos;s neighborhoods to
            identify market saturation levels and untapped opportunities for
            growth, providing a strategic advantage in pricing and marketing.
          </p>
          <button
            className={buttonStyles}
            onClick={() => openModal('barChartModal')}
          >
            Open Bar Chart
          </button>
          <dialog id="barChartModal" className="modal">
            <div className="modal-box">
              <BarChart data={barChartData} />
              <p className="py-4">
                Visual representation of properties across neighbourhoods,
                aiding strategic positioning and market entry decisions.
              </p>
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </dialog>
        </div>

        {/* Insightful analysis of room types to guide marketing and operational strategies */}
        <div className={cardStyles}>
          <h3 className="text-xl font-semibold">Room Type Analysis</h3>
          <p className="text-gray-600">
            This analysis provides insight into the distribution of various room
            types within the listings, which is crucial for developing targeted
            marketing strategies and optimizing service offerings.
          </p>
          <button
            className={buttonStyles}
            onClick={() => openModal('pieChartModal')}
          >
            Open Pie Chart
          </button>
          <dialog id="pieChartModal" className="modal">
            <div className="modal-box">
              <PieChart data={pieChartData} />
              <p className="py-4">
                The pie chart demonstrates the market share of each room type,
                offering a visual understanding of consumer preferences and
                potential revenue streams.
              </p>
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </dialog>
        </div>

        {/* Tracking and predicting listing availability to optimize pricing dynamically */}
        <div className={cardStyles}>
          <h3 className="text-xl font-semibold">Availability Trends</h3>
          <p className="text-gray-600">
            Monitoring the fluctuations in listing availability provides
            predictive insights into peak demand periods, enabling proactive
            pricing strategies to maximize revenue during high-demand times.
          </p>
          <button
            className={buttonStyles}
            onClick={() => openModal('lineChartModal')}
          >
            Open Line Chart
          </button>
          <dialog id="lineChartModal" className="modal">
            <div className="modal-box">
              <LineChart data={lineChartData} />
              <p className="py-4">
                This chart tracks the changes in availability over time,
                highlighting trends that can inform strategic pricing
                adjustments.
              </p>
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </dialog>
        </div>

        {/* Deep dive into pricing strategies to identify and adapt to market demand shifts */}
        <div className={cardStyles}>
          <h3 className="text-xl font-semibold">Price Distribution</h3>
          <p className="text-gray-600">
            Detailed analysis of pricing patterns across different listings to
            identify standard rates and deviations, enabling tailored pricing
            strategies that respond dynamically to shifts in market demand.
          </p>
          <button
            className={buttonStyles}
            onClick={() => openModal('histogramModal')}
          >
            Open Histogram
          </button>
          <dialog id="histogramModal" className="modal">
            <div className="modal-box">
              <Histogram data={histogramData} />
              <p className="py-4">
                Histogram displaying the range of prices across listings,
                revealing the most common pricing points and opportunities for
                strategic adjustments.
              </p>
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Overview;
