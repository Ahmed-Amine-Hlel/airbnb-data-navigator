import React from 'react';

const AnalysisToolsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Analysis Tools for Airbnb Price Optimization
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          This page delves into the various analytical tools I utilized to
          interpret the Airbnb data, focusing on how each contributes to
          refining pricing strategies and enhancing market understanding.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Chart.js and React-Chartjs-2
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          For dynamic and interactive visualizations, I integrated Chart.js and
          React-Chartjs-2 into the project. These libraries allow me to create
          responsive charts that are both informative and visually appealing.
          They are particularly useful for depicting data trends over time,
          comparing multiple data sets side-by-side, and showcasing distribution
          through bar, line, pie, and histogram charts.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Papa Parse</h2>
        <p className="text-lg text-gray-600 mt-2">
          Papa Parse is employed to handle CSV data parsing. This tool helps me
          efficiently convert large CSV files into JSON format, making the data
          more accessible and easier to manipulate within my React application.
          It&spos;s crucial for the initial data processing phase, ensuring data
          integrity and speeding up the load time for data analysis.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Custom Data Analysis Scripts
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          In addition to using pre-built libraries, I developed custom scripts
          in JavaScript to perform specific data operations that are unique to
          this project. These scripts include algorithms for calculating optimal
          pricing based on historical data trends and predictive models for
          future pricing strategies. The custom scripts enable tailored analysis
          that aligns with the specific needs of the Airbnb market in NYC.
        </p>
      </div>
    </div>
  );
};

export default AnalysisToolsPage;
