import Link from 'next/link';
import React from 'react';
import {
  MdOutlineDashboard,
  MdOutlineDataUsage,
  MdAnalytics,
  MdReport,
  MdSettings,
  MdShowChart,
} from 'react-icons/md';

const Sidebar: React.FC = () => {
  return (
    <div className="relative flex flex-col h-full w-[18rem] bg-gray-800 text-gray-100 transition-width duration-300 ease-in-out dark:bg-gray-900">
      <div className="p-5 flex justify-center items-center">
        <div className="text-xl font-bold">Airbnb BI Dashboard</div>
      </div>
      <ul className="flex-grow space-y-4 mt-10">
        <li>
          <Link
            href="/dashboard"
            className="px-4 py-2 flex items-center gap-3 hover:bg-gray-700 rounded-md transition-colors duration-200 ease-in-out cursor-pointer"
          >
            <MdOutlineDashboard className="text-xl" />
            <span>Overview</span>
          </Link>
        </li>
        <li>
          <Link
            href="/data-management"
            className="px-4 py-2 flex items-center gap-3 hover:bg-gray-700 rounded-md transition-colors duration-200 ease-in-out cursor-pointer"
          >
            <MdOutlineDataUsage className="text-xl" />
            <span>Data Management</span>
          </Link>
        </li>
        <li>
          <Link
            href="/analysis-tools"
            className="px-4 py-2 flex items-center gap-3 hover:bg-gray-700 rounded-md transition-colors duration-200 ease-in-out cursor-pointer"
          >
            <MdAnalytics className="text-xl" />
            <span>Analysis Tools</span>
          </Link>
        </li>
        <li>
          <Link
            href="/kpi"
            className="px-4 py-2 flex items-center gap-3 hover:bg-gray-700 rounded-md transition-colors duration-200 ease-in-out cursor-pointer"
          >
            <MdShowChart className="text-xl" />
            <span>KPIs</span>
          </Link>
        </li>
        <li>
          <Link
            href="/reports"
            className="px-4 py-2 flex items-center gap-3 hover:bg-gray-700 rounded-md transition-colors duration-200 ease-in-out cursor-pointer"
          >
            <MdReport className="text-xl" />
            <span>Reports & Visualization</span>
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="px-4 py-2 flex items-center gap-3 hover:bg-gray-700 rounded-md transition-colors duration-200 ease-in-out cursor-pointer"
          >
            <MdSettings className="text-xl" />
            <span>Settings & Administration</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
