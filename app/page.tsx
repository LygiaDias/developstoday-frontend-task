// app/page.tsx
"use client";

import { Suspense, useState } from 'react';
import Link from 'next/link';
import SelectInput from '../components/SelectInput';
import VehicleMakesLoader from '../components/VehicleMakesLoader';
import Image from 'next/image'; 
import developsLogo from '../public/images/develops-logo.png';

export default function Home() {
  const [selectedMakeId, setSelectedMakeId] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [vehicleMakeOptions, setVehicleMakeOptions] = useState<{ value: string; label: string; }[]>([]);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => currentYear - i);
  
  const yearOptions = years.map((year) => ({
    value: year.toString(),
    label: year.toString(),
  }));

  const isNextEnabled = selectedMakeId && selectedYear;

  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-4"> 
      
   
      <Image
        src={developsLogo}
        alt="Develops Logo"
        width={500}
        className="mb-4" 
      />
      <h1 className="text-2xl font-bold text-gray-600 mb-4">Develops Today Dealer App</h1>

      <Suspense fallback={<h2 className="text-lg">Loading...</h2>}>
        <VehicleMakesLoader setVehicleMakeOptions={setVehicleMakeOptions} />

        <div className="w-full max-w-md space-y-4 justify-center mt-20">
          <SelectInput
            label="Vehicle Makes"
            id="make"
            options={vehicleMakeOptions} 
            value={selectedMakeId} 
            onChange={setSelectedMakeId} 
            placeholder="Select a vehicle make"
          />

          <SelectInput
            label="Model Year"
            id="year"
            options={yearOptions}
            value={selectedYear} 
            onChange={setSelectedYear}
            placeholder="Year"
          />
        </div>
      </Suspense>

      <Link href={`/result?makeId=${selectedMakeId}&year=${selectedYear}`}>
        <button
          disabled={!isNextEnabled}
          className={`mt-6 px-4 py-2 text-white font-semibold rounded-md transition-colors duration-300 
          ${isNextEnabled ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
        >
          Next
        </button>
      </Link>
    </div>
  );
}
