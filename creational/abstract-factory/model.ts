export interface Jacket {
    getFullDescription(): string;
    hasDiscount(id: number): boolean;
}

export interface Trousers {
    getFullDescription(): string;
    canExchange(id: number): boolean;
}
