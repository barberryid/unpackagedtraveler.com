export interface TripLedgerCell {
  label: string;
  value: string;
  note: string;
}

export interface TripMeta {
  /** route stops in order, shown in the homepage ticker */
  stops: string[];
  hero: { src: string; alt: string; caption: string };
  ledger: {
    independent: TripLedgerCell;
    guided: TripLedgerCell;
    catch: TripLedgerCell;
    note: string;
  };
  /** mono stat line under the homepage hero CTA */
  stats: string;
  /** heading for the homepage photo rail */
  photoHeading: string;
  /** short mono meta after the photo count, e.g. "5 countries" or "3 islands" */
  galleryNote: string;
}

export const tripMetaByPlan: Record<string, TripMeta> = {
  'central-america-loop': {
    stops: [
      'Houston',
      'San Salvador',
      'Copán Ruinas',
      'Guatemala City',
      'Tikal',
      'Caye Caulker',
      'Chetumal',
      'Mexico City',
      'Houston',
    ],
    hero: {
      src: '/images/trip-plans/central-america-loop/caye-caulker-morning-pier.jpg',
      alt: 'A wooden pier stretching into calm sea under pastel morning light on Caye Caulker, Belize',
      caption: 'Caye Caulker, Belize · day 9, before the water taxi',
    },
    ledger: {
      independent: {
        label: 'This route, independent',
        value: '$1,650–2,220',
        note: 'per person · 14 days · 5 countries',
      },
      guided: {
        label: 'Guided small-group tours',
        value: '$3,000+',
        note: 'per person · about 8 days · before flights',
      },
      catch: {
        label: 'The catch',
        value: 'You organise it',
        note: 'and each plan removes most of that work',
      },
      note: 'Figures from the March 2026 run of the Central America Loop: real shuttles, real hotels, real border fees. Every plan publishes its costs the same way.',
    },
    stats: '5 countries in 14 days · 3 land borders · half the tour price',
    photoHeading: 'Real photos from the loop',
    galleryNote: '5 countries',
  },

  'galapagos-without-a-cruise': {
    stops: [
      'Guayaquil',
      'Santa Cruz',
      'Isabela',
      'Santa Cruz',
      'San Cristóbal',
      'Guayaquil',
      'Cuenca',
    ],
    hero: {
      src: '/images/trip-plans/galapagos-without-a-cruise/isabela-beach-dusk.jpg',
      alt: 'Lavender and pink dusk over the beach at Puerto Villamil, Isabela, with a couple sitting on the sand and beach-bar lights glowing',
      caption: 'Puerto Villamil, Isabela · dusk on day 5',
    },
    ledger: {
      independent: {
        label: 'This route, independent',
        value: '$1,400–2,000',
        note: 'per person · 12 days · 3 islands + Cuenca',
      },
      guided: {
        label: 'Galápagos cruises',
        value: '$2,000–3,000+',
        note: 'per person · 5–8 days · berth alone, before flights',
      },
      catch: {
        label: 'The catch',
        value: 'You organise it',
        note: 'and each plan removes most of that work',
      },
      note: 'Figures from the May 2024 run of this route, updated for the current $200 park fee. Real ferries, real hotels, real tours. Every plan publishes its costs the same way.',
    },
    stats: '3 islands in 12 days · 4 boat crossings · no cruise required',
    photoHeading: 'Real photos from the islands',
    galleryNote: '3 islands',
  },

  'tunisia-egypt-jordan-lebanon-loop': {
    stops: [
      'Tunis',
      'Sidi Bou Said',
      'Cairo',
      'Alexandria',
      'Dahab',
      'Mount Sinai',
      'Nuweiba',
      'Petra',
      'Amman',
      'Beirut',
    ],
    hero: {
      src: '/images/trip-plans/tunisia-egypt-jordan-lebanon-loop/petra-monastery-facade.jpg',
      alt: 'The sandstone facade of the Monastery at Petra, carved into the cliff, with a Jordanian flag flying in front and a traveler standing for scale',
      caption: 'The Monastery, Petra · day 12, after 800 steps up',
    },
    ledger: {
      independent: {
        label: 'This route, independent',
        value: '$2,400–3,200',
        note: 'per person · 16 days · 4 countries',
      },
      guided: {
        label: 'Guided small-group tours',
        value: '$5,500+',
        note: 'per person · similar route, before flights',
      },
      catch: {
        label: 'The catch',
        value: 'You organise it',
        note: 'and each plan removes most of that work',
      },
      note: 'Figures from the March 2018 run of this loop, with flight and fee ranges updated for current pricing. Real ferries, real border crossings, real hotels. Every plan publishes its costs the same way.',
    },
    stats: '4 countries in 16 days · 1 sea ferry · half the tour price',
    photoHeading: 'Real photos from the loop',
    galleryNote: '4 countries',
  },
};
