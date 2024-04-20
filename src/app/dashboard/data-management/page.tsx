import React from 'react';

const DataManagementPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Data Management for Airbnb Price Optimization
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          This page explores the detailed steps I took in managing data, crucial
          for extracting actionable insights using Business Intelligence tools
          in optimizing Airbnb pricing strategies.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Data Sourcing</h2>
        <p className="text-lg text-gray-600 mt-2">
          I sourced the initial dataset from{' '}
          <a
            href="https://www.kaggle.com/datasets/dgomonov/new-york-city-airbnb-open-data"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Kaggle’s New York City Airbnb Open Data
          </a>
          . This dataset includes essential details for each listing, such as
          price, number of reviews, and availability, providing a robust
          foundation for analysis.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Data Preparation</h2>
        <p className="text-lg text-gray-600 mt-2">
          The data I obtained was already cleaned, which simplified the initial
          stages of my project. My preparation involved structuring the data to
          align with the analytical tools I planned to use, particularly
          focusing on optimizing formats for better integration with Chart.js
          and React-Chartjs-2.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Data Storage</h2>
        <p className="text-lg text-gray-600 mt-2">
          I stored the structured data in a local JSON format, which facilitates
          efficient data retrieval and manipulation for ongoing analysis. This
          approach ensures that I can access and analyze the data with minimal
          latency, crucial for maintaining the responsiveness of the BI tools
          used in the project.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Data Utilization</h2>
        <p className="text-lg text-gray-600 mt-2">
          I employ the data across various BI visualizations to drive insights
          into pricing optimization strategies. Utilizing Chart.js and
          React-Chartjs-2, I develop interactive and real-time visual reports
          that help in identifying trends, patterns, and outliers, which are
          pivotal for making informed pricing decisions.
        </p>
      </div>
    </div>
  );
};

export default DataManagementPage;
