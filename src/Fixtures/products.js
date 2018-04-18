import * as faker from 'faker';

const products = [
  {
    id: faker.random.uuid(),
    face: "( .-. )",
    size: "30",
    price: "30",
    date: new Date(Date.now()).toLocaleString(),
  },
];

export default products;
