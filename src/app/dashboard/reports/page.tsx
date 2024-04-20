import React from 'react';

const ReportsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-gray-900 my-6">
        Metrics Reporting for Airbnb Price Optimization
      </h1>
      <div className="space-y-8">
        {/* ADR Report Content */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900">
            Average Daily Rate (ADR) Report
          </h2>
          <p className="mt-2 text-gray-600">
            Detailed analysis of ADR fluctuations over time, comparison with
            market averages, and correlation with guest reviews and seasonal
            trends. Includes visual graphs to depict trends and outliers.
          </p>
          <div className="mt-4 text-gray-700">
            <h3 className="text-lg font-semibold">
              Interpretation of Results:
            </h3>
            <p>
              The ADR trends provide insights into the effectiveness of our
              pricing strategy. Higher ADR often correlates with higher guest
              satisfaction and improved reputation, which suggests our premium
              pricing strategy is well-received during peak seasons. Conversely,
              dips in ADR may indicate a need for promotional strategies or
              pricing adjustments to remain competitive.
            </p>
          </div>
        </div>

        {/* Occupancy Rate Report Content */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900">
            Occupancy Rate Report
          </h2>
          <p className="mt-2 text-gray-600">
            Comprehensive report on occupancy rates, showcasing patterns and
            peak demand times. Analysis of factors influencing occupancy rates
            and strategies to optimize them.
          </p>
          <div className="mt-4 text-gray-700">
            <h3 className="text-lg font-semibold">
              Interpretation of Results:
            </h3>
            <p>
              An optimal occupancy rate indicates effective market penetration
              and pricing alignment. Our analysis pinpoints opportunities during
              off-peak times for targeted marketing campaigns to increase
              occupancy without sacrificing rate integrity. Understanding
              occupancy fluctuations helps us fine-tune our dynamic pricing
              model to maximize revenue year-round.
            </p>
          </div>
        </div>

        {/* RevPAR Report Content */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900">
            Revenue Per Available Room (RevPAR) Report
          </h2>
          <p className="mt-2 text-gray-600">
            Evaluation of RevPAR to assess overall financial health. Report
            includes comparisons with industry standards and historical
            performance data.
          </p>
          <div className="mt-4 text-gray-700">
            <h3 className="text-lg font-semibold">
              Interpretation of Results:
            </h3>
            <p>
              RevPAR is a critical indicator of both pricing strategy
              effectiveness and property utilization. By integrating both ADR
              and occupancy rates, RevPAR provides a more comprehensive view of
              operational success. Strategic adjustments based on RevPAR
              analysis can lead to significant improvements in profitability,
              particularly by focusing on improving occupancy during
              traditionally lower booking periods.
            </p>
          </div>
        </div>

        {/* Seasonal Demand Trends Report Content */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900">
            Seasonal Demand Trends Report
          </h2>
          <p className="mt-2 text-gray-600">
            Analysis of demand variations throughout the year with
            recommendations for pricing strategies to adapt to these changes
            effectively.
          </p>
          <div className="mt-4 text-gray-700">
            <h3 className="text-lg font-semibold">
              Interpretation of Results:
            </h3>
            <p>
              Seasonal trends highlight the cyclic nature of the hospitality
              market. By anticipating these trends, we can proactively adjust
              our pricing and marketing strategies to not only capture peak
              demand but also stimulate growth during slower periods. This
              approach ensures that we maintain a competitive edge by adapting
              our pricing strategy to meet market demands efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
