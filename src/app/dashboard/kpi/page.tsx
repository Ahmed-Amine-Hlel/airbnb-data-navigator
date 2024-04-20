import React from 'react';

const KpisPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Key Performance Indicators (KPIs) for Airbnb Price Optimization
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Effective use of KPIs is critical in measuring the success of pricing
          strategies and overall business performance. This page outlines the
          specific KPIs I utilize to track and analyze the effectiveness of my
          price optimization strategies in the Airbnb market.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Average Daily Rate (ADR)
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          ADR represents the average rental income per paid occupied room in a
          given time period. It is calculated by dividing the total earned
          rental income by the number of rooms sold. This indicator helps assess
          the pricing efficiency and is pivotal for adjusting pricing strategies
          to maximize revenue.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Occupancy Rate</h2>
        <p className="text-lg text-gray-600 mt-2">
          The Occupancy Rate measures the ratio of rented or used rooms compared
          to the total available. It is a critical metric for understanding
          demand and seasonal trends, which assists in forecasting and dynamic
          pricing adjustments.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Revenue Per Available Room (RevPAR)
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          RevPAR combines aspects of ADR and occupancy rates to provide a
          comprehensive view of both pricing and room usage effectiveness. It is
          calculated by multiplying ADR by the occupancy rate, offering insights
          into overall financial performance relative to the total available
          room inventory.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Seasonal Demand Trends
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          This KPI tracks booking frequencies during different seasons,
          providing data to optimize pricing strategies according to seasonal
          variations in demand. Understanding these trends is essential for
          setting prices that attract guests while maximizing profitability
          during peak and off-peak seasons.
        </p>
      </div>
    </div>
  );
};

export default KpisPage;
