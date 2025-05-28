import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCenik extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ceniks';
  info: {
    displayName: 'Cenik';
  };
  attributes: {
    nadpis: Schema.Attribute.String;
    obrazekPozadi: Schema.Attribute.Media<'files' | 'images' | 'videos'>;
  };
}

export interface BlocksCeny extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cenies';
  info: {
    description: '';
    displayName: 'Ceny';
  };
  attributes: {
    cena: Schema.Attribute.Component<'elements.cena', true>;
    multisporText: Schema.Attribute.Text;
    nadpis: Schema.Attribute.String;
  };
}

export interface BlocksFaq extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faqs';
  info: {
    description: '';
    displayName: 'Faq';
  };
  attributes: {
    nadpis: Schema.Attribute.String;
    odpoved1: Schema.Attribute.RichText;
    odpoved2: Schema.Attribute.RichText;
    odpoved3: Schema.Attribute.RichText;
    odpoved4: Schema.Attribute.RichText;
    odpoved5: Schema.Attribute.RichText;
    otazka1: Schema.Attribute.Text;
    otazka2: Schema.Attribute.Text;
    otazka3: Schema.Attribute.Text;
    otazka4: Schema.Attribute.Text;
    otazka5: Schema.Attribute.Text;
  };
}

export interface BlocksHeroText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_texts';
  info: {
    displayName: 'Hero Text';
  };
  attributes: {
    nadpis: Schema.Attribute.Text;
    obrazekPozadi: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    podNadpis: Schema.Attribute.Text;
    tlacitko1: Schema.Attribute.Component<'elements.link', false>;
    tlacitko2: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface BlocksKontakt extends Struct.ComponentSchema {
  collectionName: 'components_blocks_kontakts';
  info: {
    displayName: 'Kontakt';
  };
  attributes: {
    nadpis: Schema.Attribute.String;
    obrazekPozadi: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
  };
}

export interface BlocksKontaktForm extends Struct.ComponentSchema {
  collectionName: 'components_blocks_kontakt_forms';
  info: {
    description: '';
    displayName: 'KontaktForm';
  };
  attributes: {
    blockKontakt: Schema.Attribute.Component<'elements.block', true>;
    nadpis: Schema.Attribute.String;
  };
}

export interface BlocksMap extends Struct.ComponentSchema {
  collectionName: 'components_blocks_maps';
  info: {
    displayName: 'Map';
  };
  attributes: {
    mapaUrl: Schema.Attribute.Text;
    nadpis: Schema.Attribute.String;
  };
}

export interface BlocksOnas extends Struct.ComponentSchema {
  collectionName: 'components_blocks_onas';
  info: {
    displayName: 'Onas';
  };
  attributes: {
    obrazek: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksPostup extends Struct.ComponentSchema {
  collectionName: 'components_blocks_postup_s';
  info: {
    displayName: 'Postup ';
  };
  attributes: {
    nadpisBlock1: Schema.Attribute.String;
    nadpisBlock2: Schema.Attribute.String;
    nadpisBlock3: Schema.Attribute.String;
    nadpisBlock4: Schema.Attribute.String;
    napis: Schema.Attribute.String;
    podNadpisBlock1: Schema.Attribute.Text;
    podNadpisBlock2: Schema.Attribute.Text;
    podNadpisBlock3: Schema.Attribute.Text;
    podNadpisBlock4: Schema.Attribute.Text;
    tlacitko: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface BlocksRecenze extends Struct.ComponentSchema {
  collectionName: 'components_blocks_recenzes';
  info: {
    description: '';
    displayName: 'Recenze';
  };
  attributes: {
    nadpis: Schema.Attribute.String;
    obrazekPozadi: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    recenze: Schema.Attribute.Component<'elements.recenze-jedna', true>;
  };
}

export interface BlocksRegistrace extends Struct.ComponentSchema {
  collectionName: 'components_blocks_registraces';
  info: {
    description: '';
    displayName: 'Registrace';
  };
  attributes: {
    cislo: Schema.Attribute.String;
    jmeno: Schema.Attribute.String;
    mail: Schema.Attribute.String;
    nadpis: Schema.Attribute.String;
    obrazekPozadi: Schema.Attribute.Media<'images' | 'files'>;
    prijdu: Schema.Attribute.String;
    sport: Schema.Attribute.String;
  };
}

export interface BlocksRozvrh extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rozvrhs';
  info: {
    displayName: 'Rozvrh';
  };
  attributes: {
    nadpis: Schema.Attribute.String;
    obrazekPozadi: Schema.Attribute.Media<'images' | 'videos'>;
  };
}

export interface BlocksRozvrhTable extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rozvrh_tables';
  info: {
    description: '';
    displayName: 'RozvrhTable';
  };
  attributes: {
    ctvrtek: Schema.Attribute.Component<'elements.training-schedule-row', true>;
    nadpis: Schema.Attribute.String;
    nedele: Schema.Attribute.Component<'elements.training-schedule-row', true>;
    patek: Schema.Attribute.Component<'elements.training-schedule-row', true>;
    pondeli: Schema.Attribute.Component<'elements.training-schedule-row', true>;
    sobota: Schema.Attribute.Component<'elements.training-schedule-row', true>;
    streda: Schema.Attribute.Component<'elements.training-schedule-row', true>;
    utery: Schema.Attribute.Component<'elements.training-schedule-row', true>;
  };
}

export interface BlocksTreneri extends Struct.ComponentSchema {
  collectionName: 'components_blocks_treneris';
  info: {
    description: '';
    displayName: 'Treneri';
  };
  attributes: {
    jmeno1: Schema.Attribute.String;
    jmeno2: Schema.Attribute.String;
    jmeno3: Schema.Attribute.String;
    jmeno4: Schema.Attribute.String;
    nadpis: Schema.Attribute.String;
    obrazekTrener: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    obrazekTrener2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    obrazekTrener3: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
    obrazekTrener4: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    podNadpis: Schema.Attribute.Text;
    popisTrener: Schema.Attribute.Text;
    popisTrener2: Schema.Attribute.Text;
    popisTrener3: Schema.Attribute.Text;
    popisTrener4: Schema.Attribute.Text;
    sport1: Schema.Attribute.String;
    sport2: Schema.Attribute.String;
    sport3: Schema.Attribute.String;
    sport4: Schema.Attribute.String;
  };
}

export interface ElementsBlock extends Struct.ComponentSchema {
  collectionName: 'components_elements_blocks';
  info: {
    displayName: 'block';
  };
  attributes: {
    kontaktUdaj: Schema.Attribute.Text;
    kontaktUdajNazev: Schema.Attribute.String;
  };
}

export interface ElementsCena extends Struct.ComponentSchema {
  collectionName: 'components_elements_cenas';
  info: {
    displayName: 'Cena';
  };
  attributes: {
    cena: Schema.Attribute.String;
    popis: Schema.Attribute.Text;
    tlacitko: Schema.Attribute.Component<'elements.link', false>;
    typVztupu: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    odkazNa: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    logoObrazek: Schema.Attribute.Media<'files' | 'images' | 'videos'>;
    LogoText: Schema.Attribute.String;
  };
}

export interface ElementsRecenzeJedna extends Struct.ComponentSchema {
  collectionName: 'components_elements_recenze_jednas';
  info: {
    displayName: 'recenzeJedna';
  };
  attributes: {
    jmenoRec: Schema.Attribute.String;
    recenze: Schema.Attribute.RichText;
  };
}

export interface ElementsTrainingScheduleRow extends Struct.ComponentSchema {
  collectionName: 'components_elements_training_schedule_rows';
  info: {
    displayName: 'Training Schedule Row';
  };
  attributes: {
    cas: Schema.Attribute.String;
    nazevTreninku: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    adresa: Schema.Attribute.Text;
    cislo: Schema.Attribute.Text;
    email: Schema.Attribute.Text;
    logo: Schema.Attribute.Component<'elements.logo', true>;
    navigace: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    adresa: Schema.Attribute.Text;
    cislo: Schema.Attribute.String;
    LogoStriking: Schema.Attribute.Component<'elements.logo', false>;
    navigace: Schema.Attribute.Component<'elements.link', true>;
    tlacitko: Schema.Attribute.Component<'elements.link', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.cenik': BlocksCenik;
      'blocks.ceny': BlocksCeny;
      'blocks.faq': BlocksFaq;
      'blocks.hero-text': BlocksHeroText;
      'blocks.kontakt': BlocksKontakt;
      'blocks.kontakt-form': BlocksKontaktForm;
      'blocks.map': BlocksMap;
      'blocks.onas': BlocksOnas;
      'blocks.postup': BlocksPostup;
      'blocks.recenze': BlocksRecenze;
      'blocks.registrace': BlocksRegistrace;
      'blocks.rozvrh': BlocksRozvrh;
      'blocks.rozvrh-table': BlocksRozvrhTable;
      'blocks.treneri': BlocksTreneri;
      'elements.block': ElementsBlock;
      'elements.cena': ElementsCena;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.recenze-jedna': ElementsRecenzeJedna;
      'elements.training-schedule-row': ElementsTrainingScheduleRow;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
