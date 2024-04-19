import React from 'react';
import Sidebar from '../components/layout/sidebar/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-grow m-10 flex justify-center">{children}</main>
    </div>
  );
};

export default DashboardLayout;
