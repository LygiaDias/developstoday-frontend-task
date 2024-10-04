"use client";

import { useEffect, useState, Suspense } from 'react';
import VehicleModels from '../../components/VehicleModels';

export default function ResultPage() {
  const [makeId, setMakeId] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setMakeId(searchParams.get('makeId'));
    setYear(searchParams.get('year'));
  }, [window.location.search]); 

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">

      {makeId && year ? (
        <div className="bg-white shadow-md rounded-md p-4 max-w-[700px] w-full">
         

          <Suspense fallback={<p className="text-gray-600">Loading...</p>}>
            <VehicleModels makeId={makeId} year={year} />
          </Suspense>
        </div>
      ) : (
        <p className="text-lg text-gray-600"> No vehicle or year selected.</p>
      )}
    </div>
  );
}
