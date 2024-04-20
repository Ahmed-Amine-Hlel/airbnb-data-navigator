import Sidebar from '@/components/layout/sidebar/Sidebar';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-[#F1F2F6]">
      <Sidebar />
      <main className="flex-grow m-10 flex justify-center">{children}</main>
    </div>
  );
};

export default DashboardLayout;
