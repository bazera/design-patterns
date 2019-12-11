import { ClothesFactory, CottonFactory } from './factory';

const factory: ClothesFactory = new CottonFactory();
const jacket = factory.createJacket();
const trousers = factory.createTrousers();

console.log(jacket.getFullDescription());
console.log(trousers.canExchange(1));