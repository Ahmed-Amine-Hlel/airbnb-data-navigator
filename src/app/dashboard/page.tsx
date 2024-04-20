'use client';
import React, { useEffect, useState } from 'react';
import { parseCSV } from '@/utils/parseCSV';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import LineChart from '../components/charts/LineChart';
import Histogram from '../components/charts/Histogram';

export interface Listing {
  id: number;
  name: string;
  host_id: number;
  neighbourhood_group: string;
  room_type: string;
  price: number;
  minimum_nights: number;
  number_of_reviews: number;
  last_review: string;
  reviews_per_month: number;
  calculated_host_listings_count: number;
  availability_365: number;
}

const Overview = () => {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/AB_NYC_2019.csv');
        const csvText = await response.text();
        const listingsData: Listing[] = await parseCSV(csvText);
        setListings(listingsData.slice(0, 1000));
      } catch (error) {
        console.error('Failed to load or parse CSV', error);
      }
    };

    fetchData();
  }, []);

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

  const cardStyles = 'p-6 shadow-lg rounded-lg bg-white text-center';
  const buttonStyles =
    'btn btn-large btn-neutral mt-4 py-2 px-6 rounded text-white font-semibold';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold leading-tight text-gray-900">
          Real Estate Market Overview
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Snapshot of key real estate metrics and trends
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={cardStyles}>
          <h3 className="text-xl font-semibold">Neighbourhood Distribution</h3>
          <p className="text-gray-600">
            Explore property distribution across different neighbourhoods.
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
                Distribution of properties across neighbourhoods.
              </p>
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </dialog>
        </div>

        <div className={cardStyles}>
          <h3 className="text-xl font-semibold">Room Type Analysis</h3>
          <p className="text-gray-600">
            Examine the prevalence of various room types across listings.
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
              <p className="py-4">Average price by room type showing.</p>
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </dialog>
        </div>

        <div className={cardStyles}>
          <h3 className="text-xl font-semibold">Availability Trends</h3>
          <p className="text-gray-600">
            Track changes in listing availability over time.
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
              <p className="py-4">Listing trends over time indicating.</p>
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </dialog>
        </div>

        <div className={cardStyles}>
          <h3 className="text-xl font-semibold">Price Distribution</h3>
          <p className="text-gray-600">
            Analyze pricing patterns to identify potential market strategies.
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
                Review distribution across listings revealing.
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
