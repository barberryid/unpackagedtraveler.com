export interface TripPhoto {
  src: string;
  alt: string;
  stop: string;
  label: string;
}

export const tripPhotosByPlan: Record<string, TripPhoto[]> = {
  'central-america-loop': [
    {
      src: '/images/trip-plans/central-america-loop/el-salvador-from-the-air.jpg',
      alt: 'El Salvador coastline and volcanoes seen from an airplane window',
      stop: 'El Salvador',
      label: 'First glimpse of El Salvador from the inbound flight',
    },
    {
      src: '/images/trip-plans/central-america-loop/san-salvador-national-palace.jpg',
      alt: 'The National Palace in San Salvador historic center',
      stop: 'San Salvador',
      label: 'National Palace, part of an easy historic-center walking day',
    },
    {
      src: '/images/trip-plans/central-america-loop/san-salvador-cathedral.jpg',
      alt: 'Metropolitan Cathedral facade in San Salvador',
      stop: 'San Salvador',
      label: 'Metropolitan Cathedral in the renovated old center',
    },
    {
      src: '/images/trip-plans/central-america-loop/san-salvador-bus-blur.jpg',
      alt: 'A yellow bus moving through San Salvador street traffic',
      stop: 'San Salvador',
      label: 'City traffic near the center, useful context for moving around',
    },
    {
      src: '/images/trip-plans/central-america-loop/zacamil-mural-portrait.jpg',
      alt: 'Colorful portrait mural in the Zacamil apartment complex',
      stop: 'San Salvador',
      label: 'Zacamil mural district, a worthwhile street-art detour',
    },
    {
      src: '/images/trip-plans/central-america-loop/zacamil-volcano-mural.jpg',
      alt: 'Volcano mural painted across a building wall in Zacamil',
      stop: 'San Salvador',
      label: 'Volcano mural in Zacamil',
    },
    {
      src: '/images/trip-plans/central-america-loop/zacamil-colorful-courtyard.jpg',
      alt: 'Brightly painted courtyard and railings in Zacamil',
      stop: 'San Salvador',
      label: 'Colorful apartment walkways around the Zacamil murals',
    },
    {
      src: '/images/trip-plans/central-america-loop/early-shuttle-to-honduras.jpg',
      alt: 'A shuttle bus waiting before dawn for the Honduras transfer',
      stop: 'Transfer day',
      label: 'The early tourist shuttle to Honduras, before the day warms up',
    },
    {
      src: '/images/trip-plans/central-america-loop/welcome-to-honduras-border.jpg',
      alt: 'Welcome to Honduras sign at the border crossing',
      stop: 'Honduras border',
      label: 'Crossing into Honduras by road',
    },
    {
      src: '/images/trip-plans/central-america-loop/copan-ruinas-town-street.jpg',
      alt: 'A cobbled street in Copan Ruinas with low colonial buildings',
      stop: 'Copan Ruinas',
      label: 'Copan Ruinas town, compact enough to do on foot',
    },
    {
      src: '/images/trip-plans/central-america-loop/macaw-mountain-entrance.jpg',
      alt: 'Entrance sign at Macaw Mountain bird park',
      stop: 'Copan Ruinas',
      label: 'Macaw Mountain, the easy add-on after the ruins',
    },
    {
      src: '/images/trip-plans/central-america-loop/macaw-mountain-scarlet-macaw.jpg',
      alt: 'Scarlet macaw perched at Macaw Mountain',
      stop: 'Macaw Mountain',
      label: 'Scarlet macaw close-up at Macaw Mountain',
    },
    {
      src: '/images/trip-plans/central-america-loop/macaw-mountain-toucan.jpg',
      alt: 'Toucan perched inside Macaw Mountain bird park',
      stop: 'Macaw Mountain',
      label: 'Toucan in the Macaw Mountain aviary',
    },
    {
      src: '/images/trip-plans/central-america-loop/copan-maya-carving.jpg',
      alt: 'Detailed Maya stone carving at the Copan archaeological site',
      stop: 'Copan ruins',
      label: 'One of the carved details that makes Copan special',
    },
    {
      src: '/images/trip-plans/central-america-loop/copan-ruins-stone-steps.jpg',
      alt: 'Stone steps and trees at the Copan Maya ruins',
      stop: 'Copan ruins',
      label: 'Copan ruins, shaded enough for a comfortable morning visit',
    },
    {
      src: '/images/trip-plans/central-america-loop/copan-ruinas-hillside-view.jpg',
      alt: 'View across rooftops and hills in Copan Ruinas',
      stop: 'Copan Ruinas',
      label: 'Hillside view over Copan Ruinas',
    },
    {
      src: '/images/trip-plans/central-america-loop/guatemala-border-sign.jpg',
      alt: 'Guatemala welcome sign on the road transfer',
      stop: 'Guatemala',
      label: 'The road transfer into Guatemala',
    },
    {
      src: '/images/trip-plans/central-america-loop/guatemala-city-restaurant-stop.jpg',
      alt: 'Casual restaurant stop in Guatemala City',
      stop: 'Guatemala City',
      label: 'A practical overnight stop before the dawn Flores flight',
    },
    {
      src: '/images/trip-plans/central-america-loop/lake-peten-itza-evening.jpg',
      alt: 'Evening sky over Lake Peten Itza',
      stop: 'El Remate',
      label: 'Lake Peten Itza evening, the reward for basing at El Remate',
    },
    {
      src: '/images/trip-plans/central-america-loop/el-remate-lake-sunrise.jpg',
      alt: 'Sunrise over the lake at El Remate',
      stop: 'El Remate',
      label: 'Quiet lake morning in El Remate',
    },
    {
      src: '/images/trip-plans/central-america-loop/la-casa-de-don-david-lodge.jpg',
      alt: 'La Casa de Don David lodge entrance with flowers',
      stop: 'El Remate',
      label: 'La Casa de Don David, the Tikal base used in the plan',
    },
    {
      src: '/images/trip-plans/central-america-loop/belize-water-taxi-terminal.jpg',
      alt: 'San Pedro Belize Express water taxi terminal',
      stop: 'Belize City',
      label: 'Water taxi handoff from Belize City to Caye Caulker',
    },
    {
      src: '/images/trip-plans/central-america-loop/caye-caulker-clear-water.jpg',
      alt: 'Clear turquoise water off Caye Caulker',
      stop: 'Caye Caulker',
      label: "Caye Caulker water, the trip's slowest day",
    },
    {
      src: '/images/trip-plans/central-america-loop/caye-caulker-palm-street.jpg',
      alt: 'Palm trees, golf cart, and colorful buildings on Caye Caulker',
      stop: 'Caye Caulker',
      label: 'No cars, just golf carts and sand lanes',
    },
    {
      src: '/images/trip-plans/central-america-loop/caye-caulker-sunset-dock.jpg',
      alt: 'Sunset at a dock on Caye Caulker',
      stop: 'Caye Caulker',
      label: 'Caye Caulker sunset by the water',
    },
    {
      src: '/images/trip-plans/central-america-loop/caye-caulker-morning-pier.jpg',
      alt: 'Morning pier and calm sea on Caye Caulker',
      stop: 'Caye Caulker',
      label: 'Morning light before leaving the island',
    },
    {
      src: '/images/trip-plans/central-america-loop/belize-sign.jpg',
      alt: 'Colorful Belize sign',
      stop: 'Belize',
      label: 'Belize, the splurge stop in the loop',
    },
    {
      src: '/images/trip-plans/central-america-loop/mexico-city-arrival-sign.jpg',
      alt: 'Mexico sign after arrival from Chetumal',
      stop: 'Mexico City',
      label: 'Arrival in Mexico City after the Chetumal flight',
    },
    {
      src: '/images/trip-plans/central-america-loop/mexico-city-historic-center-street.jpg',
      alt: 'Historic center street in Mexico City',
      stop: 'Mexico City',
      label: 'Centro Historico streets, a soft landing after the road days',
    },
    {
      src: '/images/trip-plans/central-america-loop/zocalo-mexican-flag.jpg',
      alt: 'Mexican flag flying over the Zocalo',
      stop: 'Mexico City',
      label: 'The Zocalo and the flag, central to the walking plan',
    },
    {
      src: '/images/trip-plans/central-america-loop/mexico-city-cathedral.jpg',
      alt: 'Mexico City Metropolitan Cathedral from the Zocalo',
      stop: 'Mexico City',
      label: 'Metropolitan Cathedral from the main square',
    },
    {
      src: '/images/trip-plans/central-america-loop/mexico-city-tiled-dome.jpg',
      alt: 'Colorful tiled dome in Mexico City',
      stop: 'Mexico City',
      label: 'Historic tilework between museum stops',
    },
    {
      src: '/images/trip-plans/central-america-loop/soumaya-museum-mexico-city.jpg',
      alt: 'Museo Soumaya silver tiled facade in Mexico City',
      stop: 'Mexico City',
      label: 'Museo Soumaya, one of the easy city add-ons',
    },
    {
      src: '/images/trip-plans/central-america-loop/frida-kahlo-mural-mexico-city.jpg',
      alt: 'Frida Kahlo mural in Mexico City',
      stop: 'Mexico City',
      label: 'Frida Kahlo imagery on the city art circuit',
    },
    {
      src: '/images/trip-plans/central-america-loop/mexico-city-market-umbrellas.jpg',
      alt: 'Colorful umbrellas over a Mexico City market or food hall',
      stop: 'Mexico City',
      label: 'A market stop for food instead of hotel breakfast',
    },
    {
      src: '/images/trip-plans/central-america-loop/mexico-city-church-facade.jpg',
      alt: 'Decorative church facade in Mexico City',
      stop: 'Mexico City',
      label: 'One more church facade on the final full day',
    },
    {
      src: '/images/trip-plans/central-america-loop/aeromexico-flight-home.jpg',
      alt: 'Aeromexico airplane at the end of the trip',
      stop: 'Homeward flight',
      label: 'The final flight back toward Houston',
    },
  ],
};
