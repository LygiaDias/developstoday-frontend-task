// app/components/VehicleModels.tsx
import React, { useEffect, useState } from 'react';
import { VehicleModel } from '../types/vehicleTypes';
import { fetchVehicleModels } from '@/services/vehicleService';

export default function VehicleModels({ makeId, year }: { makeId: string; year: string }) {
  const [vehicleModels, setVehicleModels] = useState<VehicleModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true); 
    fetchVehicleModels(makeId, year)
      .then((model: VehicleModel[]) => {
        setVehicleModels(model); 
        setLoading(false); 
      })
      .catch((err: any) => {
        setLoading(false);
      });
  }, [makeId, year]); 

  if (loading) {
    return <p className="text-gray-700">Loading...</p>; 
  }

  return (
    <ul className="mt-4 space-y-2">
      {vehicleModels.length > 0 ? (
        vehicleModels.map((model: VehicleModel) => (
          <li key={model.Model_ID} className="border p-4 rounded shadow bg-white">
            <p className="text-gray-800"><strong>ID:</strong> {model.Model_ID}</p>
            <p className="text-gray-800"><strong>Make Name:</strong> {model.Make_Name}</p>
            <p className="text-gray-800"><strong>Model Name:</strong> {model.Model_Name}</p>
          </li>
        ))
      ) : (
        <p className="text-gray-700">Nenhum modelo encontrado para essa marca e ano.</p>
      )}
    </ul>
  );
}
