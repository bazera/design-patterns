import { Section } from "./model";
import { VanGoghSection, SalvadorDaliSection } from "./product";

export abstract class Exhibition {
  exhibit() {
    const section = this.createSection();
    this.addToMuseum(section);
  }

  private addToMuseum(section: Section) {
    console.log(`adding ${section.artist.name} section to a museum`);
  }

  abstract createSection(): Section;
}

export class VanGoghExhibition extends Exhibition {
  createSection(): Section {
    return new VanGoghSection();
  }
}

export class SalvadorDaliExhibition extends Exhibition {
  createSection(): Section {
    return new SalvadorDaliSection();
  }
}
