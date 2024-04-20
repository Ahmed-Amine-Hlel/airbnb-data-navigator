import { Listing } from '@/app/types';
import Papa from 'papaparse';

export const parseCSV = (fileContent: string): Promise<Listing[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(fileContent, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data as Listing[]);
      },
      error: (error: any) => {
        reject(error);
      },
    });
  });
};
