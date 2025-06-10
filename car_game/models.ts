type TractionType = 'AWD' | 'FWD' | 'RWD';

interface Car {
  maximumSpeed: number;
  color: string;
  traction: TractionType;
}

interface Garage {
  cars: Car[];
  location: {
    x: number;
    y: number;
  };
  carSlots: number;
}

interface Brand {
  logo: string;
  name: string;
  history: string;
}
