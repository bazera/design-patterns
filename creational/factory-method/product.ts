import { Section } from "./model";

export class VanGoghSection implements Section {
  artist = { name: "Van Gogh" };

  buyDrawing() {
    console.log(`buying Van Gogh drawing`);
  }
}

export class SalvadorDaliSection implements Section {
  artist = { name: "Salvador Dali" };

  buyDrawing() {
    console.log(`buying Salvador Dali drawing`);
  }
}
