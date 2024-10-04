export function fetchVehicleMakes() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/GetMakesForVehicleType/car?format=json`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching vehicle data');
      }
      return response.json();
    })
    .then((data) => data.Results);
}

export function fetchVehicleModels(makeId: string, year: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching vehicle models');
      }
      return response.json();
    })
    .then((data) => data.Results || []);
}
