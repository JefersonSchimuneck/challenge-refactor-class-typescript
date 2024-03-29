export interface IFood {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export type IFoodData = Omit<IFood, 'id' | 'available'>