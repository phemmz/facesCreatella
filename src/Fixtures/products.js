import * as faker from 'faker';

const products = [
  {
    id: faker.random.uuid(),
    face: "( .-. )",
    size: "30",
    price: "30",
    date: "Mon Apr 09 2018 22:34:03 GMT+0100 (WAT)",
  },
  {
    id: faker.random.uuid(),
    face: "( .o.)",
    size: "20",
    price: "40",
    date: faker.date.recent(),
  },
  {
    id: faker.random.uuid(),
    face: "( `·´ )",
    size: "25",
    price: "$10",
    date: faker.date.recent(),
  },
  {
    id: faker.random.uuid(),
    face: "( ° ͜ ʖ °)",
    size: "26",
    price: "130",
    date: faker.date.recent(),
  },
  {
    id: faker.random.uuid(),
    face: "( ͡° ͜ʖ ͡°)",
    size: "25",
    price: "310",
    date: faker.date.recent(),
  },
  {
    id: faker.random.uuid(),
    face: "( ⚆ _ ⚆ )",
    size: "40",
    price: "30",
    date: faker.date.recent(),
  },
  {
    id: faker.random.uuid(),
    face: "( ︶︿︶)",
    size: "23",
    price: "40",
    date: faker.date.recent(),
  },
  {
    id: faker.random.uuid(),
    face: "( ﾟヮﾟ)",
    size: "15px",
    price: "$10",
    date: "6 days ago"
  },
  {
    id: faker.random.uuid(),
    face: "(\\/)(°,,,°)(\\/)",
    size: "15",
    price: "130",
    date: faker.date.recent(),
  },
  {
    id: faker.random.uuid(),
    face: "(¬_¬)",
    size: "25",
    price: "310",
    date: faker.date.recent(),
  },
  {
    id: faker.random.uuid(),
    face: "(¬º-°)¬",
    size: "21",
    price: "30",
    date: faker.date.recent(),
  },
  {
    id: faker.random.uuid(),
    face: "(¬‿¬)",
    size: "15",
    price: "40",
    date: faker.date.recent(),
  },
  {
    id: faker.random.uuid(),
    face: "(°ロ°)☝",
    size: "28",
    price: "10",
    date: faker.date.recent(),
  },
  {
    id: faker.random.uuid(),
    face: "(´・ω・)っ",
    size: "35",
    price: "130",
    date: faker.date.recent(),
  },
  {
    id: faker.random.uuid(),
    face: "(ó ì_í)",
    size: "28",
    price: "310",
    date: faker.date.recent(),
  },
];

export default products;
