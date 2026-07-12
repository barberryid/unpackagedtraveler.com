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
      src: '/images/trip-plans/tunisia-egypt-jordan-lebanon-loop/sphinx-profile-camel-rider.jpg',
      alt: 'A close profile view of the Great Sphinx of Giza with a camel rider crossing the desert in the background',
      caption: 'The Sphinx, Giza · day 6, camel rider in the distance',
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

  'maldives-malaysia-brunei-indonesia-timor-leste-loop': {
    stops: [
      'Malé',
      'Dhigurah',
      'Kuala Lumpur',
      'Bandar Seri Begawan',
      'Miri',
      'Denpasar',
      'Dili',
      'Kupang',
      'Jakarta',
      'Yogyakarta',
    ],
    hero: {
      src: '/images/trip-plans/maldives-malaysia-brunei-indonesia-timor-leste-loop/dhigurah-palm-sunset.jpg',
      alt: 'Palm fronds framing a sunset over turquoise water on Dhigurah, Maldives',
      caption: 'Dhigurah, Maldives · day 1, the first sunset of the loop',
    },
    ledger: {
      independent: {
        label: 'This route, independent',
        value: '$1,670–2,460',
        note: 'per person · 14 days · 5 countries',
      },
      guided: {
        label: 'Guided small-group tours',
        value: '$4,500+',
        note: 'per person · similar length · skips Brunei and Timor-Leste entirely',
      },
      catch: {
        label: 'The catch',
        value: 'You organise it',
        note: 'and each plan removes most of that work',
      },
      note: 'Figures from my April 2025 run of this loop: real budget flights, two land borders crossed on foot and by bus, real hostels and hotels. Every plan publishes its costs the same way.',
    },
    stats: '5 countries in 14 days · 2 land borders crossed on foot and by bus · half the guided-tour price',
    photoHeading: 'Real photos from the loop',
    galleryNote: '5 countries',
  },

  'venice-lake-bled-and-albania': {
    stops: [
      'Milan',
      'Venice',
      'Ljubljana',
      'Lake Bled',
      'Ljubljana Airport',
      'Tirana',
      'Berat',
      'Tirana',
    ],
    hero: {
      src: '/images/trip-plans/venice-lake-bled-and-albania/lake-bled-island-reflection.jpg',
      alt: 'Lake Bled island church reflected in still water with the Slovenian mountains behind it',
      caption: 'Lake Bled, Slovenia · day 4, before the crowds arrive',
    },
    ledger: {
      independent: {
        label: 'This route, independent',
        value: '$1,410-$2,350',
        note: 'per person · 10 days · 3 countries',
      },
      guided: {
        label: 'Comparable small-group travel',
        value: '$3,000+',
        note: 'per person · usually fewer stops · before long-haul flights',
      },
      catch: {
        label: 'The catch',
        value: 'You organise it',
        note: 'and each plan removes most of that work',
      },
      note: 'Figures from the May 2022 run, updated with a current-price cushion. Real train tickets, a €16 international bus, real hotels, and one short regional flight.',
    },
    stats: '3 countries in 10 days · €16 international bus · no rental car',
    photoHeading: 'Real photos from the loop',
    galleryNote: '3 countries',
  },
};
