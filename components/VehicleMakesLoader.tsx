import React, { useEffect } from 'react';
import { fetchVehicleMakes } from '../services/vehicleService';
import { VehicleMake } from '../types/vehicleTypes';

const VehicleMakesLoader = ({ setVehicleMakeOptions }: { setVehicleMakeOptions: React.Dispatch<React.SetStateAction<{ value: string; label: string; }[]>> }) => {
  useEffect(() => {
    const fetchMakes = () => {
      fetchVehicleMakes().then((makes) => {
          const options = makes.map((make: VehicleMake) => ({
            value: make.MakeId,
            label: make.MakeName,
          }));
          setVehicleMakeOptions(options);
        })
        .catch((err) => {
          console.error("Error fetching vehicle makes:", err);
        });
    };

    fetchMakes();
  }, [setVehicleMakeOptions]);

  return null;
};

export default VehicleMakesLoader;
