import Link from 'next/link';
import React from 'react';
import {
  MdOutlineDashboard,
  MdOutlineDataUsage,
  MdAnalytics,
  MdReport,
  MdShowChart,
} from 'react-icons/md';

const Sidebar: React.FC = () => {
  return (
    <div className="relative flex flex-col h-full w-[19rem] bg-gray-800 text-gray-100 transition-width duration-300 ease-in-out dark:bg-gray-900">
      <div className="p-5 flex justify-center items-center">
        <Link href="/" className="text-xl font-bold">
          Airbnb BI Dashboard
        </Link>
      </div>
      <ul className="flex-grow space-y-4 mt-10">
        <li>
          <Link
            href="/dashboard"
            className="px-4 py-2 flex items-center gap-3 hover:bg-gray-700 rounded-md transition-colors duration-200 ease-in-out cursor-pointer"
          >
            <MdOutlineDashboard className="text-xl" />
            <span>Overview & Need Model</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/data-management"
            className="px-4 py-2 flex items-center gap-3 hover:bg-gray-700 rounded-md transition-colors duration-200 ease-in-out cursor-pointer"
          >
            <MdOutlineDataUsage className="text-xl" />
            <span>Data Management & BI Process</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/analysis-tools"
            className="px-4 py-2 flex items-center gap-3 hover:bg-gray-700 rounded-md transition-colors duration-200 ease-in-out cursor-pointer"
          >
            <MdAnalytics className="text-xl" />
            <span>Analysis Tools</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/kpi"
            className="px-4 py-2 flex items-center gap-3 hover:bg-gray-700 rounded-md transition-colors duration-200 ease-in-out cursor-pointer"
          >
            <MdShowChart className="text-xl" />
            <span>KPIs</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/reports"
            className="px-4 py-2 flex items-center gap-3 hover:bg-gray-700 rounded-md transition-colors duration-200 ease-in-out cursor-pointer"
          >
            <MdReport className="text-xl" />
            <span>Reports</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
