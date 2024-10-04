// app/types/vehicleTypes.ts

export interface VehicleMake {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
  }
  
  export interface VehicleModel {
    Make_Name: string
    Model_ID: number;    
    Model_Name: string;  
    Make_ID: number;     
  }

  export type VehicleMakes = VehicleMake[];
  