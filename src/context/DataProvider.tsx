'use client';
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { parseCSV } from '@/utils/parseCSV';
import { Listing } from '../app/types';

export interface DataContextType {
  listings: Listing[];
  setListings: React.Dispatch<React.SetStateAction<Listing[]>>;
}

export const defaultState: DataContextType = {
  listings: [],
  setListings: () => {},
};

export const DataContext = createContext<DataContextType>(defaultState);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/AB_NYC_2019.csv');
        const csvText = await response.text();
        const listingsData: Listing[] = await parseCSV(csvText);
        setListings(listingsData.slice(0, 1000));
      } catch (error) {
        console.error('Failed to load or parse CSV', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ listings, setListings }}>
      {children}
    </DataContext.Provider>
  );
};
