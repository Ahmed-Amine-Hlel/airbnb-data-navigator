import { useContext } from 'react';
import { DataContext, DataContextType } from '../context/DataProvider';

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  console.log('DataContext value:', context);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
