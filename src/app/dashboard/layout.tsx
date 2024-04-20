import Sidebar from '@/components/layout/sidebar/Sidebar';
import { DataProvider } from '@/context/DataProvider';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DataProvider>
      <div className="flex h-screen bg-[#F1F2F6]">
        <Sidebar />
        <main className="flex-grow m-10 flex justify-center">{children}</main>
      </div>
    </DataProvider>
  );
};

export default DashboardLayout;
