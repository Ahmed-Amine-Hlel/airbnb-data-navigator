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
          strategies and overall business performance in the Airbnb market.
          These metrics provide insights that guide strategic decision-making.
        </p>
      </div>

      {/* ADR Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Average Daily Rate (ADR)
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          ADR measures the average revenue earned from rented rooms per day.
          Monitoring ADR helps in understanding the pricing effectiveness and
          adjusting rates to maximize revenue while remaining competitive in the
          market.
        </p>
      </div>

      {/* Occupancy Rate Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Occupancy Rate</h2>
        <p className="text-lg text-gray-600 mt-2">
          The Occupancy Rate reflects the percentage of all available rooms that
          are occupied at any given time. It is pivotal for identifying demand
          patterns and optimizing pricing models to improve room occupancy.
        </p>
      </div>

      {/* RevPAR Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Revenue Per Available Room (RevPAR)
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          RevPAR integrates ADR and Occupancy Rate to assess the overall
          financial performance of the property. It indicates how well the
          property utilizes its available rooms to generate revenue.
        </p>
      </div>

      {/* Seasonal Demand Trends Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Seasonal Demand Trends
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          This metric analyzes booking rates across different seasons to inform
          dynamic pricing adjustments. Understanding these trends helps in
          setting prices that capitalize on peak demand periods while attracting
          bookings during slower seasons.
        </p>
      </div>
    </div>
  );
};

export default KpisPage;
