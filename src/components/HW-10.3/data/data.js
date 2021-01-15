import { nanoid } from 'nanoid';

const data = [
  {
    id: nanoid(),
    name: 'Товар номер 1 со скидкой',
    price: 2019,
    link: '...',
    image: 'https://via.placeholder.com/120x150.png',
    saleType: 'discount',
    oldPrice: 2770,
  },
  {
    id: nanoid(),
    name: 'Товар номер 2 со скидкой и длинным названием',
    price: 5690,
    link: '...',
    image: 'https://via.placeholder.com/120x150.png',
    saleType: 'discount',
    oldPrice: 5966,
  },
  {
    id: nanoid(),
    name: 'Акционный товар номер 3',
    price: 2719,
    link: '...',
    image: 'https://via.placeholder.com/120x150.png',
    saleType: 'sale',
  },
  {
    id: nanoid(),
    name: 'Товар-новинка номер 4',
    price: 2689,
    link: '...',
    image: 'https://via.placeholder.com/120x150.png',
    saleType: 'latest',
  },
  {
    id: nanoid(),
    name: 'Товар номер 5',
    price: 4795,
    link: '...',
    image: 'https://via.placeholder.com/120x150.png',
    saleType: null,
  },
]

export default data;
