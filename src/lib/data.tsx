// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Gift, Home, Hotel, Info, Map, MapPin } from 'lucide-react'

export const HEADER_LINKS = [
  {
    label: 'Home',
    href: '/',
    icon: <Home />,
  },
  {
    label: 'Tours',
    href: '/tours',
    icon: <Map />,
  },
  // {
  //   label: 'Accommodation',
  //   href: '/accommodation',
  //   icon: <Hotel />,
  // },
  {
    label: 'Personalize your experience',
    href: '/personalize',
    icon: <MapPin />,
  },
]

export const LANDING_LINKS = [
  {
    chip: 'About us',
    chipIcon: <Info />,
    chipColor: 'bg-sky-200',
    title: 'Road Map Col',
    subtitle: 'Your tour guide in Colombia',
    description:
      'Discover the magic of Colombia with our unique and personalized experiences.',
    image:
      'https://res.cloudinary.com/lesteban/image/upload/v1748743344/roadmap/colombian-landscape_obm8nb.avif',
    href: '/tours',
    button: 'Learn more',
  },
  {
    chip: 'Promotion',
    chipIcon: <Gift />,
    chipColor: 'bg-green-200',
    title: 'Special offer',
    subtitle: '20% discount',
    description:
      'Discover the best discounts for groups in Colombia. Special offer for groups of 10 or more people.',
    image:
      'https://res.cloudinary.com/lesteban/image/upload/v1748229430/roadmap/tourism_nsahmt.avif',
    href: '/tours',
    button: 'Learn more',
  },
  {
    chip: 'Tour',
    chipIcon: <MapPin />,
    chipColor: 'bg-orange-200',
    title: 'El salto del buey - Canopy',
    subtitle: 'Mountains and adventure',
    description:
      'Discover the magic of the mountain of Antioquia, a region full of mountains and adventure. Enjoy the nature and the Colombian culture.',
    image:
      'https://res.cloudinary.com/lesteban/image/upload/v1749350820/roadmapcol/saltodelbuey/DJI_20241127_125105_379_i0fqid.jpg',
    href: '/tours/salto-del-buey',
    button: 'See tour',
  },
  {
    chip: 'Tour',
    chipIcon: <MapPin />,
    chipColor: 'bg-orange-200',
    title: 'Guatapé',
    subtitle: 'Mountains and adventure',
    description:
      'Guatape and El Peñol are some of the most touristic towns in Antioquia ' +
      'thanks to its architecture, cultural richness and touristic attractions ' +
      'such as the Peñol stone, the Guatape dam and the replica of the old ' +
      'Peñol, this place should be a must on your visit to Medellin.',
    image:
      'https://res.cloudinary.com/lesteban/image/upload/v1749420263/roadmapcol/guatape/IMG_0028_fmsxte.webp',
    href: '/tours/guatape',
    button: 'See tour',
  },
  {
    chip: 'Tour',
    chipIcon: <MapPin />,
    chipColor: 'bg-orange-200',
    title: 'City tour - Comuna 13',
    subtitle: 'City tour',
    description:
      'Get to know the most representative places of the city of medellin, learn about its culture, gastronomy and history in a tour designed for you to live the city like a local.',
    image:
      'https://res.cloudinary.com/lesteban/image/upload/v1749422811/roadmapcol/comuna13/IMG_2476_xoptdu.webp',
    href: '/tours/comuna13',
    button: 'See tour',
  },
  {
    chip: 'Tour',
    chipIcon: <MapPin />,
    chipColor: 'bg-orange-200',
    title: 'Paragliding',
    subtitle: 'Adventure tour',
    description:
      'Soar above the mountains and take in stunning views of Medellín from the sky — an unforgettable experience for thrill-seekers.',
    image:
      'https://res.cloudinary.com/lesteban/image/upload/v1749943359/roadmapcol/parapente/parapente-1_io49ci.jpg',
    href: '/tours/paragliding',
    button: 'See tour',
  },
  {
    chip: 'Tour',
    chipIcon: <MapPin />,
    chipColor: 'bg-orange-200',
    title: 'Orient Tour',
    subtitle: 'Cultural experience',
    description:
      'Escape the city and explore nearby traditional towns where local culture and customs are still alive. “Puebliar” is a favorite local activity — a way to reconnect with roots and experience authentic Colombian life.',
    image:
      'https://res.cloudinary.com/lesteban/image/upload/v1749944605/roadmapcol/oriente/oriente-1_jbhthn.jpg',
    href: '/tours/paragliding',
    button: 'See tour',
  },
  {
    chip: 'Tour',
    chipIcon: <MapPin />,
    chipColor: 'bg-orange-200',
    title: 'Jardin',
    subtitle: 'Cultural experience',
    description:
      'Jardín is a heritage town in Antioquia, known for its colorful architecture, rich culture, and ecological diversity. It’s a favorite destination for both locals and tourists.',
    image:
      'https://res.cloudinary.com/lesteban/image/upload/v1749945189/roadmapcol/jardin/jardin-1_gn3jrj.jpg',
    href: '/tours/jardin',
    button: 'See tour',
  },
  // {
  //   chip: 'Info',
  //   chipIcon: <Info />,
  //   chipColor: 'bg-blue-200',
  //   title: 'Accommodation',
  //   subtitle: 'Accommodation in Colombia',
  //   description:
  //     'Discover the best accommodation in Colombia, from colonial houses to ecolodges in the jungle.',
  //   image:
  //     'https://res.cloudinary.com/lesteban/image/upload/v1748815350/roadmap/finca_bdyr0s.avif',
  //   href: '/accommodation',
  //   button: 'See accommodation',
  // },
]

export const TOURS = [
  {
    place: 'La Ceja, Antioquia',
    title: 'El salto  - Canopy',
    description:
      'The mountains of Antioquia hide paradises and adventures that you can not miss, visit with us one of the most beautiful and impressive waterfalls of our region, fly in the highest canopy of Antioquia and if you are a little more adventurous dare to conquer the mountain climbing to more than 70 meters high. ',
    image:
      'https://res.cloudinary.com/lesteban/image/upload/v1749350820/roadmapcol/saltodelbuey/DJI_20241127_125105_379_i0fqid.jpg',
    images: [
      {
        type: 'video' as const,
        url: 'https://res.cloudinary.com/lesteban/video/upload/v1749350202/roadmapcol/saltodelbuey/IMG_4317_xbgjie.mov',
        alt: 'Vista panorámica del Salto del Buey',
      },
      {
        type: 'image' as const,
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749350820/roadmapcol/saltodelbuey/DJI_20241127_125105_379_i0fqid.jpg',
        alt: 'Vista panorámica del Salto del Buey',
      },
      {
        type: 'video' as const,
        url: 'https://res.cloudinary.com/lesteban/video/upload/v1749350824/roadmapcol/saltodelbuey/DJI_0270_2_k5phmc.mp4',
        alt: 'Vista panorámica del Salto del Buey',
      },

      {
        type: 'image' as const,
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749350821/roadmapcol/saltodelbuey/DJI_20250129_130826_894_iqjowc.jpg',
        alt: 'Vista panorámica del Salto del Buey',
      },
      {
        type: 'image' as const,
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749350821/roadmapcol/saltodelbuey/DJI_20241127_125440_302_v4biby.jpg',
        alt: 'Vista panorámica del Salto del Buey',
      },
      {
        type: 'image' as const,
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749350821/roadmapcol/saltodelbuey/DJI_20241231_123801_426_ufpq0n.jpg',
        alt: 'Vista panorámica del Salto del Buey',
      },
      {
        type: 'image' as const,
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749350819/roadmapcol/saltodelbuey/IMG_4391_qhyamk.png',
        alt: 'Vista panorámica del Salto del Buey',
      },
      {
        type: 'video' as const,
        url: 'https://res.cloudinary.com/lesteban/video/upload/v1749350239/roadmapcol/saltodelbuey/copy_CF5DE597-5748-4D6D-8025-892A124D1FB6_o7sxon.mov',
        alt: 'Vista panorámica del Salto del Buey',
      },
      {
        type: 'video' as const,
        url: 'https://res.cloudinary.com/lesteban/video/upload/v1749350206/roadmapcol/saltodelbuey/IMG_3632_qogszv.mov',
        alt: 'Vista panorámica del Salto del Buey',
      },
      {
        type: 'video' as const,
        url: 'https://res.cloudinary.com/lesteban/video/upload/v1749350206/roadmapcol/saltodelbuey/IMG_4310_lx7ofw.mov',
        alt: 'Canopy',
      },
      {
        type: 'video' as const,
        url: 'https://res.cloudinary.com/lesteban/video/upload/v1749350202/roadmapcol/saltodelbuey/IMG_4317_xbgjie.mov',
        alt: 'Salto del buey',
      },
    ],
    duration: '8 hours',
    highlights: [
      'Private transportation to and from',
      'Guided accompaniment',
      'Reservation entrance',
      'Canopy flight',
      'Hiking',
      'Visit to the waterfall of the bufe',
      'Typical snacks',
    ],
    href: '/tours/salto-del-buey',
    price: 120,
    activities: [
      {
        title: 'Via ferrata (Amateur climbing)',
        description:
          "Looking for an exciting outdoor adventure? Join us for a Via Ferrata climbing experience in the beautiful mountains of La Ceja, Antioquia. This activity is perfect for amateur climbers or anyone looking to try climbing for the first time in a safe and guided environment. Via Ferrata is a type of climbing route equipped with steel cables, ladders, and anchors fixed to the rock, making it accessible even if you have no prior climbing experience. You'll be safely harnessed at all times and guided by experienced instructors as you enjoy stunning views, fresh mountain air, and an unforgettable adrenaline rush. No special skills are required — just a sense of adventure!",
        image:
          'https://res.cloudinary.com/lesteban/image/upload/v1749939136/roadmapcol/saltodelbuey/IMG_6631_niiyrk.jpg',
        price: '30',
      },
      {
        title: 'Hanging Hammocks Experience – Sunset Over the Cañón del Buey',
        description:
          'Relax and take in one of the most breathtaking sunsets in Antioquia — while suspended over a canyon. This unique experience lets you enjoy the peaceful beauty of nature from hanging hammocks set up over the stunning Cañón del Buey. It’s the perfect plan to unwind, connect with nature, and feel the thrill of being literally hanging between the sky and the mountains. No physical effort required — just lay back, breathe deeply, and enjoy the view.',
        image:
          'https://res.cloudinary.com/lesteban/image/upload/v1749939959/roadmapcol/saltodelbuey/hamaca_uayjka.jpg',
        price: '20',
      },
      {
        title: 'Mountain Picnic – Wine & Cheese with a View',
        description:
          'Enjoy a premium picnic experience surrounded by nature, either at the top of the mountain or relaxing in hanging hammocks with a breathtaking view. This plan includes a beautifully arranged cheese board with a selection of matured cheeses and a bottle of wine — the perfect combo for a romantic date, a special celebration, or simply a relaxing moment outdoors. Choose your favorite spot:\n\n🍷 On the mountaintop, with panoramic views of La Ceja\n🧀 In the hammocks, suspended over the Cañón del Buey',
        image:
          'https://res.cloudinary.com/lesteban/image/upload/v1749939959/roadmapcol/saltodelbuey/picnic_waje1a.jpg',
        price: '100',
      },
    ],
  },
  {
    place: 'Antioquia',
    title: 'Guatapé',
    duration: '8 hours',
    description:
      'Guatape and El Peñol are some of the most touristic towns in Antioquia ' +
      'thanks to its architecture, cultural richness and touristic attractions ' +
      'such as the Peñol stone, the Guatape dam and the replica of the old ' +
      'Peñol, this place should be a must on your visit to Medellin.',
    image:
      'https://res.cloudinary.com/lesteban/image/upload/v1749420263/roadmapcol/guatape/IMG_0028_fmsxte.webp',
    price: 80,
    href: '/tours/guatape',
    highlights: [
      'Private transportation to and from',
      'Guided accompaniment',
      'Typical snacks',
    ],
    images: [
      {
        type: 'image' as const,
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749420263/roadmapcol/guatape/IMG_0028_fmsxte.webp',
        alt: 'Guatape',
      },
      {
        type: 'image' as const,
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749420270/roadmapcol/guatape/IMG_1257_dly1cv.webp',
        alt: 'Guatape',
      },
      {
        type: 'image' as const,
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749420269/roadmapcol/guatape/IMG_0731_vkc9dv.webp',
        alt: 'Guatape',
      },
      {
        type: 'image' as const,
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749420266/roadmapcol/guatape/IMG_0106_cxl0py.webp',
        alt: 'Guatape',
      },
      {
        type: 'image' as const,
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749420265/roadmapcol/guatape/IMG_0093_ivqgye.webp',
        alt: 'Guatape',
      },
    ],
    activities: [
      {
        title: 'Private Boat Tour – Guatapé & El Peñol Reservoir',
        description:
          'Cruise the El Peñol-Guatapé Reservoir on a private boat. Visit ruins of the old town, see Pablo Escobar’s former properties, and spot celebrity mansions — all while enjoying stunning views. Perfect for groups or couples.',
        includes: [
          'Private boat with driver',
          'Guided tour with local insights',
          'Life jackets',
          'Stops for photos and sightseeing',
        ],
        price: 50,
        image:
          'https://res.cloudinary.com/lesteban/image/upload/v1749940829/roadmapcol/guatape/IMG_1257_dly1cv.jpg',
      },
      {
        title: 'Jet Ski Adventure – Guatapé Reservoir',
        description:
          'Feel the adrenaline as you ride a high-powered jet ski across the beautiful El Peñol-Guatapé Reservoir. One of the most popular water activities in the area — perfect for thrill-seekers and water lovers.',
        price: 100,
        includes: ['High-powered jet ski', 'Safety gear', 'Brief instruction'],
        image:
          'https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749941492/roadmapcol/guatape/jetski_j6vctz.jpg',
        duration: '1hr',
      },
      {
        title: 'Helicopter Tour – Guatapé from the Sky',
        description:
          'See the El Peñol rock and reservoir like never before — from the air. This short helicopter ride offers guaranteed incredible views, photos, and videos of one of Colombia’s most iconic landscapes.',
        duration: '6 min',
        price: 100,
        image:
          'https://res.cloudinary.com/lesteban/image/upload/v1749941780/roadmapcol/guatape/guatape_yv0q5f.jpg',
      },
      {
        title: 'Wakesurf & Water Sports – Guatapé',
        description:
          'Enjoy wakesurfing and other water sports in the perfect spot for aquatic fun. Includes a speedboat, wakesurf board, gear, and an inflatable donut for extra thrills — all at a great price.',
        duration: '1 hr',
        price: '80',
        image:
          'https://res.cloudinary.com/lesteban/image/upload/v1749941966/roadmapcol/guatape/wakesurf_pwxgkh.jpg',
      },
      {
        title: 'Beach Club Day Pass – Guatapé',
        description:
          'Spend a full day at one of Guatapé’s top beach clubs. Enjoy cocktails, the pool, and amazing views of the reservoir with full access to premium facilities. 10AM - 8 PM',
        price: 50,
        includes: [
          'Lunch',
          'Pool & jacuzzi access',
          'Kayak or water bike (30 min)',
          'Towels, sunbeds, catamaran net',
        ],
        image:
          'https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749942200/roadmapcol/guatape/guatapesombrillas_qy98al.jpg',
      },
    ],
  },
  {
    place: 'Medellin, Antioquia',
    title: 'City tour - Comuna 13',
    description:
      'Get to know the most representative places of the city of medellin, learn about its culture, gastronomy and history in a tour designed for you to live the city like a local.',
    image:
      'https://res.cloudinary.com/lesteban/image/upload/v1749422811/roadmapcol/comuna13/IMG_2476_xoptdu.webp',
    duration: '6 hours',
    price: 120,
    href: '/tours/comuna13',
    highlights: [
      'Private transportation to and from',
      'Guided accompaniment',
      'Typical snacks',
    ],
    images: [
      {
        type: 'image' as const,
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749422811/roadmapcol/comuna13/IMG_2476_xoptdu.webp',
        alt: 'Comuna 13',
      },
      {
        type: 'image' as const,
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749422803/roadmapcol/comuna13/IMG_0333_ylxgze.webp',
        alt: 'Comuna 13',
      },
      {
        type: 'image' as const,
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749422807/roadmapcol/comuna13/IMG_0428_ynipjt.webp',
        alt: 'Comuna 13',
      },
      {
        type: 'image' as const,
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749422802/roadmapcol/comuna13/IMG_0325_aclpto.webp',
        alt: 'Comuna 13',
      },
      {
        type: 'image' as const,
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749422809/roadmapcol/comuna13/IMG_0751_gfvpel.webp',
        alt: 'Comuna 13',
      },
    ],
    activities: [
      {
        title: 'City Viewpoint Tour – Comuna 13, Medellín',
        description:
          'Explore one of Medellín’s popular viewpoints with amazing valley views. Enjoy local street food and learn about Paisa culture while soaking in the cityscape.',
        price: 50,
        image:
          'https://res.cloudinary.com/lesteban/image/upload/v1749422809/roadmapcol/comuna13/IMG_0751_gfvpel.webp',
      },
    ],
  },
  {
    place: 'Medellín',
    title: 'Paragliding',
    description:
      'Soar above the mountains and take in stunning views of Medellín from the sky — an unforgettable experience for thrill-seekers.',
    duration: '5 hours',
    price: 100,
    href: '/tours/paragliding',
    highlights: [
      'Round-trip private transport',
      'Guided support',
      'Traditional local snacks',
    ],
    image:
      'https://res.cloudinary.com/lesteban/image/upload/v1749943359/roadmapcol/parapente/parapente-1_io49ci.jpg',
    images: [
      {
        type: 'video',
        url: 'https://res.cloudinary.com/lesteban/video/upload/v1749943355/roadmapcol/parapente/parapente-5_qpyri0.mp4',
        alt: 'parapente',
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749943359/roadmapcol/parapente/parapente-1_io49ci.jpg',
        alt: 'parapente',
      },
      {
        type: 'video',
        url: 'https://res.cloudinary.com/lesteban/video/upload/v1749943368/roadmapcol/parapente/parapente-4_lkxlwx.mov',
        alt: 'parapente',
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749943357/roadmapcol/parapente/parapente-2_xr3ges.jpg',
        alt: 'parapente',
      },
      {
        type: 'video',
        url: 'hhttps://res.cloudinary.com/lesteban/video/upload/v1749943359/roadmapcol/parapente/parapente-3_rq6vsk.mov',
        alt: 'parapente',
      },
    ],
    activities: [],
  },
  {
    place: 'Medellín - Orient',
    title: 'Orient Tour – Cultural Experience',
    description:
      'Escape the city and explore nearby traditional towns where local culture and customs are still alive. “Puebliar” is a favorite local activity — a way to reconnect with roots and experience authentic Colombian life.',
    duration: '6 hours',
    price: 50,
    href: '/tours/orient-tour',
    highlights: [
      'Round-trip private transport',
      'Guided tour',
      'Traditional snacks',
    ],
    image:
      'https://res.cloudinary.com/lesteban/image/upload/v1749944605/roadmapcol/oriente/oriente-1_jbhthn.jpg',
    images: [
      {
        type: 'video',
        url: 'https://res.cloudinary.com/lesteban/video/upload/v1749944620/roadmapcol/oriente/oriente-2_abvz83.mov',
        alt: 'parapente',
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749944605/roadmapcol/oriente/oriente-1_jbhthn.jpg',
        alt: 'parapente',
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749944602/roadmapcol/oriente/oriente-3_jqeovj.heic',
        alt: 'parapente',
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749944601/roadmapcol/oriente/oriente-4_kfqzde.jpg',
        alt: 'parapente',
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749944600/roadmapcol/oriente/oriente-5_r7pwtc.jpg',
        alt: 'parapente',
      },
    ],
    activities: [],
  },
  {
    place: 'Jardín',
    title: 'Cultural & Nature Day Trip',
    description:
      'Jardín is a heritage town in Antioquia, known for its colorful architecture, rich culture, and ecological diversity. It’s a favorite destination for both locals and tourists.',
    duration: '8 hours',
    price: 70,
    href: '/tours/jardin',
    highlights: [
      'Round-trip private transport',
      'Guided tour',
      'Traditional snacks',
    ],
    image:
      'https://res.cloudinary.com/lesteban/image/upload/v1749945189/roadmapcol/jardin/jardin-1_gn3jrj.jpg',
    images: [
      {
        type: 'image',
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749945189/roadmapcol/jardin/jardin-1_gn3jrj.jpg',
        alt: 'jardin',
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749945189/roadmapcol/jardin/jardin-2_t1szg1.jpg',
        alt: 'jardin',
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749945187/roadmapcol/jardin/jardin-4_nzgepu.jpg',
        alt: 'jardin',
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749945187/roadmapcol/jardin/jardin-3_w2kxmx.jpg',
        alt: 'jardin',
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/lesteban/image/upload/v1749945185/roadmapcol/jardin/ardin-5_jf7e6u.jpg',
        alt: 'jardin',
      },
    ],
    activities: [
      {
        title: 'Coffee Tour',
        description:
          'Visit a local coffee farm and learn the full process from expert growers. Jardín’s climate and geography make its coffee among the best in the region.',
        price: 25,
        image:
          'https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749945185/roadmapcol/jardin/ardin-5_jf7e6u.jpg',
      },
      {
        title: 'Cueva del esplendor',
        description:
          'Visit a local coffee farm and learn the full process from expert growers. Jardín’s climate and geography make its coffee among the best in the region.',
        price: 25,
        image:
          'https://res.cloudinary.com/lesteban/image/upload/v1749945438/roadmapcol/jardin/cueva_dxl9u0.jpg',
      },
      {
        title: 'Seven Waterfalls Hike',
        description:
          'A full-day, high-intensity hike through one of the most water-rich regions in Antioquia. Explore several breathtaking waterfalls in the mountains of Jardín.',
        price: 25,
        image:
          'https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749945187/roadmapcol/jardin/jardin-4_nzgepu.jpg',
      },
    ],
  },
]

export const ACCOMMODATIONS = [
  {
    title: 'Casa Colonial',
    place: 'Cartagena',
    description:
      'Una casa colonial en el centro histórico de Cartagena, con vista a la ciudad amurallada.',
    type: 'Finca',
    image:
      'https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748815350/roadmap/finca_bdyr0s.avif',
    price: 120000,
    href: '/accommodation/casa-colonial',
    highlights: [
      'Vista a la ciudad amurallada',
      'Cerca de la playa',
      'Cerca de los restaurantes',
    ],
  },
  {
    title: 'Casa Colonial',
    place: 'Cartagena',
    description:
      'Una casa colonial en el centro histórico de Cartagena, con vista a la ciudad amurallada.',
    type: 'Finca',
    image:
      'https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748815350/roadmap/finca_bdyr0s.avif',
    price: 120000,
    href: '/accommodation/casa-colonial',
    highlights: [
      'Vista a la ciudad amurallada',
      'Cerca de la playa',
      'Cerca de los restaurantes',
    ],
  },
  {
    title: 'Casa Colonial',
    place: 'Cartagena',
    description:
      'Una casa colonial en el centro histórico de Cartagena, con vista a la ciudad amurallada.',
    type: 'Finca',
    image:
      'https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748815350/roadmap/finca_bdyr0s.avif',
    price: 120000,
    href: '/accommodation/casa-colonial',
    highlights: [
      'Vista a la ciudad amurallada',
      'Cerca de la playa',
      'Cerca de los restaurantes',
    ],
  },
  {
    title: 'Casa Colonial',
    place: 'Cartagena',
    description:
      'Una casa colonial en el centro histórico de Cartagena, con vista a la ciudad amurallada.',
    type: 'Finca',
    image:
      'https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748815350/roadmap/finca_bdyr0s.avif',
    price: 120000,
    href: '/accommodation/casa-colonial',
    highlights: [
      'Vista a la ciudad amurallada',
      'Cerca de la playa',
      'Cerca de los restaurantes',
    ],
  },
]

export const CONTACT = {
  phone: '+573127064293',
  instagram: 'https://www.instagram.com/roadmapcol/',
  tiktok: 'https://www.tiktok.com/@roadmapcol',
  email: 'Roadtriptravel.col@gmail.com',
}
