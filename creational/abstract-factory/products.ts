import { Jacket, Trousers } from './model';

export class WoolenJacket implements Jacket {
    getFullDescription(): string {
        return "full description of Woolen Jacket";
    }

    hasDiscount(id: number): boolean {
        return true;
    }
}

export class CottonJacket implements Jacket {
    getFullDescription(): string {
        return "full description of Cotton Jacket";
    }

    hasDiscount(id: number): boolean {
        return false;
    }
}

export class WoolenTrousers implements Trousers {
    getFullDescription(): string {
        return "full description of Woolen Trousers";
    }

    canExchange(id: number): boolean {
        return false;
    }
}

export class CottonTrousers implements Trousers {
    getFullDescription(): string {
        return "full description of Cotton Trousers";
    }

    canExchange(id: number): boolean {
        return true;
    }
}