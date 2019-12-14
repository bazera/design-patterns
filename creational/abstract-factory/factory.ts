import { Jacket, Trousers } from './model';
import {
    WoolenJacket,
    WoolenTrousers,
    CottonJacket,
    CottonTrousers
} from './products';

export interface ClothesFactory {
    createJacket(): Jacket;
    createTrousers(): Trousers;
}

export class WoolFactory implements ClothesFactory {
    createJacket(): Jacket {
        return new WoolenJacket();
    }

    createTrousers(): Trousers {
        return new WoolenTrousers();
    }
}

export class CottonFactory implements ClothesFactory {
    createJacket(): Jacket {
        return new CottonJacket();
    }

    createTrousers(): Trousers {
        return new CottonTrousers();
    }
}
