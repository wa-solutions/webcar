import { Accessory } from './Accessory';
import { Brand } from './Brand';
import { Image } from './Image';

export interface Car {
  id: number;
  km: number;
  manufactureYear: number;
  modelYear: number;
  modelName: string;
  engine: number;
  price: number;
  ports: number;
  color: string;
  gear: number;
  category: string;
  brand: Brand;
  accessoryList: Accessory[];
  imageList: Image[];
}