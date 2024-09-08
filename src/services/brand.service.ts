import bmwImage from '@/assets/brand-list/bmw.svg';
import chevroletImage from '@/assets/brand-list/chevrolet.svg';
import citroenImage from '@/assets/brand-list/citroen.svg';
import fiatImage from '@/assets/brand-list/fiat.svg';
import fordImage from '@/assets/brand-list/ford.svg';
import hondaImage from '@/assets/brand-list/honda.svg';
import mitsubishiImage from '@/assets/brand-list/mitsubishi.svg';
import suzukiImage from '@/assets/brand-list/suzuki.svg';
import toyotaImage from '@/assets/brand-list/toyota.svg';
import volkswagenImage from '@/assets/brand-list/volkswagen.svg';

interface BrandProps {
  image: any;
  name: string;
}

export const brandList: BrandProps[] = [
  {
    image: bmwImage,
    name: 'BMW'
  },
  {
    image: chevroletImage,
    name: 'Chevrolet',
  },
  {
    image: citroenImage,
    name: 'Citroen'
  },
  {
    image: fiatImage,
    name: 'Fiat'
  },
  {
    image: fordImage,
    name: 'Ford'
  },
  {
    image: hondaImage,
    name: 'Honda'
  },
  {
    image: mitsubishiImage,
    name: 'Mitsubishi'
  },
  {
    image: suzukiImage,
    name: 'Suzuki'
  },
  {
    image: toyotaImage,
    name: 'Toyota'
  },
  {
    image: volkswagenImage,
    name: 'Volkswagen'
  }
]