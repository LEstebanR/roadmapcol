import { Gift, Home, Hotel, Info, Map, MapPin } from "lucide-react";

export const HEADER_LINKS = [
  {
    label: "Home",
    href: "/",
    icon: <Home />,
  },
  {
    label: "Tours",
    href: "/tours",
    icon: <Map />,
  },
  {
    label: "Accommodation",
    href: "/accommodation",
    icon: <Hotel />,
  },
  {
    label: "Personalize your experience",
    href: "/personalize",
    icon: <MapPin />,
  },
];

export const LANDING_LINKS = [
  {
    chip: "About us",
    chipIcon: <Info />,
    chipColor: "bg-sky-200",
    title: "Road Map Col",
    subtitle: "Your tour guide in Colombia",
    description:
      "Discover the magic of Colombia with our unique and personalized experiences.",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/v1748743344/roadmap/colombian-landscape_obm8nb.avif",
    href: "/tours",
    button: "Learn more",
  },
  {
    chip: "Promotion",
    chipIcon: <Gift />, 
    chipColor: "bg-green-200",
    title: "Special offer",
    subtitle: "20% discount",
    description:
      "Discover the best discounts for groups in Colombia. Special offer for groups of 10 or more people.",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/v1748229430/roadmap/tourism_nsahmt.avif",
    href: "/tours",
    button: "Learn more",
  },
  {
    chip: "Tour",
    chipIcon: <MapPin />,
    chipColor: "bg-orange-200",
    title: "El salto del buey - Canopy",
    subtitle: "Mountains and adventure",
    description:
      "Discover the magic of the mountain of Antioquia, a region full of mountains and adventure. Enjoy the nature and the Colombian culture.",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/v1749350820/roadmapcol/saltodelbuey/DJI_20241127_125105_379_i0fqid.jpg",
    href: "/tours/salto-del-buey",
    button: "See tour",
  },
  {
    chip: "Tour",
    chipIcon: <MapPin />,
    chipColor: "bg-orange-200",
    title: "Guatapé",
    subtitle: "Mountains and adventure",
    description:
      "Guatape and El Peñol are some of the most touristic towns in Antioquia " +
      "thanks to its architecture, cultural richness and touristic attractions " +
      "such as the Peñol stone, the Guatape dam and the replica of the old " +
      "Peñol, this place should be a must on your visit to Medellin.",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/v1749420263/roadmapcol/guatape/IMG_0028_fmsxte.webp", 
    href: "/tours/guatape",
    button: "See tour",
  },
  {
    chip: "Info",
    chipIcon: <Info />,
    chipColor: "bg-blue-200",
    title: "Accommodation",
    subtitle: "Accommodation in Colombia",
    description:
      "Discover the best accommodation in Colombia, from colonial houses to ecolodges in the jungle.",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/v1748815350/roadmap/finca_bdyr0s.avif",
    href: "/accommodation",
    button: "See accommodation",
  },
];

export const TOURS = [
  {
    place: "La Ceja, Antioquia",
    title: "El salto del Buey - Canopy",
    description:
      "The mountains of Antioquia hide paradises and adventures that you can not miss, visit with us one of the most beautiful and impressive waterfalls of our region, fly in the highest canopy of Antioquia and if you are a little more adventurous dare to conquer the mountain climbing to more than 70 meters high. ",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/v1749350820/roadmapcol/saltodelbuey/DJI_20241127_125105_379_i0fqid.jpg",
    images: [
      {
        type: 'video' as const,
        url: "https://res.cloudinary.com/lesteban/video/upload/v1749350202/roadmapcol/saltodelbuey/IMG_4317_xbgjie.mov",
        alt: "Vista panorámica del Salto del Buey"
      },
      {
        type: 'image' as const,
        url: "https://res.cloudinary.com/lesteban/image/upload/v1749350820/roadmapcol/saltodelbuey/DJI_20241127_125105_379_i0fqid.jpg",
        alt: "Vista panorámica del Salto del Buey"
      },
      {
        type: 'video' as const,
        url: "https://res.cloudinary.com/lesteban/video/upload/v1749350824/roadmapcol/saltodelbuey/DJI_0270_2_k5phmc.mp4",
        alt: "Vista panorámica del Salto del Buey"
      },

      {
        type: 'image' as const,
        url: "https://res.cloudinary.com/lesteban/image/upload/v1749350821/roadmapcol/saltodelbuey/DJI_20250129_130826_894_iqjowc.jpg",
        alt: "Vista panorámica del Salto del Buey"
      },
      {
        type: 'image' as const,
        url: "https://res.cloudinary.com/lesteban/image/upload/v1749350821/roadmapcol/saltodelbuey/DJI_20241127_125440_302_v4biby.jpg",
        alt: "Vista panorámica del Salto del Buey"
      },
      {
        type: 'image' as const,
        url: "https://res.cloudinary.com/lesteban/image/upload/v1749350821/roadmapcol/saltodelbuey/DJI_20241231_123801_426_ufpq0n.jpg",
        alt: "Vista panorámica del Salto del Buey"
      },
      {
        type: 'image' as const,
        url: "https://res.cloudinary.com/lesteban/image/upload/v1749350819/roadmapcol/saltodelbuey/IMG_4391_qhyamk.png",
        alt: "Vista panorámica del Salto del Buey"
      },
      {
        type: 'video' as const,
        url: "https://res.cloudinary.com/lesteban/video/upload/v1749350239/roadmapcol/saltodelbuey/copy_CF5DE597-5748-4D6D-8025-892A124D1FB6_o7sxon.mov",
        alt: "Vista panorámica del Salto del Buey"
      },
      {
        type: "video" as const,
        url: "https://res.cloudinary.com/lesteban/video/upload/v1749350206/roadmapcol/saltodelbuey/IMG_3632_qogszv.mov",
        alt: "Vista panorámica del Salto del Buey"
      },
      {
        type: "video" as const,
        url: "https://res.cloudinary.com/lesteban/video/upload/v1749350206/roadmapcol/saltodelbuey/IMG_4310_lx7ofw.mov",
        alt: "Canopy"
      },
      {
        type: "video" as const,
        url: "https://res.cloudinary.com/lesteban/video/upload/v1749350202/roadmapcol/saltodelbuey/IMG_4317_xbgjie.mov",
        alt: "Salto del buey"
      }

    ],
    duration: "8 hours",
    highlights: [
      "Private transportation to and from",
      "Guided accompaniment",
      "Reservation entrance",
      "Canopy flight",
      "Hiking",
      "Visit to the waterfall of the bufe",
      "Typical snacks",
    ],
    href: "/tours/salto-del-buey",
    price: 120,
    activities: [],
  },
  {
    place: "Antioquia",
    title: "Guatapé",
    duration: "8 hours",
    description:
      "Guatape and El Peñol are some of the most touristic towns in Antioquia " +
      "thanks to its architecture, cultural richness and touristic attractions " +
      "such as the Peñol stone, the Guatape dam and the replica of the old " +
      "Peñol, this place should be a must on your visit to Medellin.",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/v1749420263/roadmapcol/guatape/IMG_0028_fmsxte.webp",
      price: 80,
      href: "/tours/guatape",
      highlights: [
        "Private transportation to and from",
        "Guided accompaniment",
        "Typical snacks",
      ],
      images: [
        {
          type: "image" as const,
          url: "https://res.cloudinary.com/lesteban/image/upload/v1749420263/roadmapcol/guatape/IMG_0028_fmsxte.webp",
          alt: "Guatape",
        },
        {
          type: "image" as const,
          url: "https://res.cloudinary.com/lesteban/image/upload/v1749420270/roadmapcol/guatape/IMG_1257_dly1cv.webp",
          alt: "Guatape",
        },
        {
          type: "image" as const,
          url: "https://res.cloudinary.com/lesteban/image/upload/v1749420269/roadmapcol/guatape/IMG_0731_vkc9dv.webp",
          alt: "Guatape",
        },
        {
          type: "image" as const,
          url: "https://res.cloudinary.com/lesteban/image/upload/v1749420266/roadmapcol/guatape/IMG_0106_cxl0py.webp",
          alt: "Guatape",
        },
        {
          type: "image" as const,
          url: "https://res.cloudinary.com/lesteban/image/upload/v1749420265/roadmapcol/guatape/IMG_0093_ivqgye.webp",
          alt: "Guatape",
        },
      ],
    activities: [],
  },
  {
    place: "Medellin, Antioquia",
    title: "City tour - Comuna 13",
    description: "Get to know the most representative places of the city of medellin, learn about its culture, gastronomy and history in a tour designed for you to live the city like a local.",
    image: "https://res.cloudinary.com/lesteban/image/upload/v1749422811/roadmapcol/comuna13/IMG_2476_xoptdu.webp",
    duration: "6 hours",
    price: 120,
    href: "/tours/comuna13",
    highlights: [
      "Private transportation to and from",
      "Guided accompaniment",
      "Typical snacks",
    ],
    images: [
      {
        type: "image" as const,
        url: "https://res.cloudinary.com/lesteban/image/upload/v1749422811/roadmapcol/comuna13/IMG_2476_xoptdu.webp",
        alt: "Comuna 13",
      },  
      {
        type: "image" as const,
        url: "https://res.cloudinary.com/lesteban/image/upload/v1749422803/roadmapcol/comuna13/IMG_0333_ylxgze.webp",
        alt: "Comuna 13",
      },  
      {
        type: "image" as const,
        url: "https://res.cloudinary.com/lesteban/image/upload/v1749422807/roadmapcol/comuna13/IMG_0428_ynipjt.webp",
        alt: "Comuna 13",
      },  
      {
        type: "image" as const,
        url: "https://res.cloudinary.com/lesteban/image/upload/v1749422802/roadmapcol/comuna13/IMG_0325_aclpto.webp",
        alt: "Comuna 13",
      },  
      {
        type: "image" as const,
        url: "https://res.cloudinary.com/lesteban/image/upload/v1749422809/roadmapcol/comuna13/IMG_0751_gfvpel.webp",
        alt: "Comuna 13",
      },
    ],
    activities: [],
  }
  // {
  //   place: "Cartagena",
  //   title: "Cartagena Paraíso Colonial",
  //   duration: "4 días / 3 noches",
  //   description:
  //     "Descubre la magia de Cartagena, una ciudad colonial llena de historia y cultura. Disfruta de la naturaleza y la cultura colombiana.",
  //   image:
  //     "https://res.cloudinary.com/lesteban/image/upload/v1748743900/roadmap/cartagena_dy4wge.avif",
  //   price: 1000000,
  //   href: "/tours/cartagena",
  //   highlights: [
  //     "Recorrido por la Ciudad Amurallada",
  //     "Día de playa en Islas del Rosario",
  //     "Visita al Castillo de San Felipe",
  //     "Tour gastronómico por Getsemaní",
  //   ],
  //   activities: [
  //     {
  //       title: "Tour Ciudad Amurallada",
  //       description:
  //         "Recorre las calles empedradas del centro histórico de Cartagena, declarado Patrimonio de la Humanidad por la UNESCO. Visita plazas, iglesias coloniales y las coloridas casas con balcones floridos.",
  //       image:
  //         "https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748750243/roadmap/ciudadamurallada_faidpf.avif",
  //       duration: "4 horas",
  //       includes: ["Guía local", "Refrigerio", "Entradas a monumentos"],
  //       price: 120000,
  //     },
  //     {
  //       title: "Día de playa en Islas del Rosario",
  //       description:
  //         "Disfruta de un día en las hermosas islas del Rosario, donde podrás relajarte en la playa y disfrutar de la naturaleza.",
  //       image:
  //         "https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748750498/roadmap/islasdelrosario_xie7ir.avif",
  //       duration: "8 horas",
  //       includes: ["Transporte", "Almuerzo en la isla", "Guía turística"],
  //       price: 150000,
  //     },
  //     {
  //       title: "Tour gastronómico por Getsemaní",
  //       description:
  //         "Disfruta de un tour gastronómico por Getsemaní, donde podrás degustar los platos típicos de la región. Visita los mercados y los restaurantes más famosos de la ciudad.",
  //       image:
  //         "https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748743900/roadmap/cartagena_dy4wge.avif",
  //       duration: "4 horas",
  //       includes: ["Transporte", "Almuerzo en la isla", "Guía turística"],
  //       price: 150000,
  //     },
  //     {
  //       title: "Crucero al Atardecer",
  //       description:
  //         "Disfruta de un crucero al atardecer por el río Magdalena, donde podrás disfrutar de la vista de la ciudad y los paisajes naturales.",
  //       image:
  //         "https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748750594/roadmap/velerocartagena_w0jtxh.avif",
  //       duration: "2 horas",
  //       includes: ["Transporte", "Almuerzo en la isla", "Guía turística"],
  //       price: 150000,
  //     },
  //   ],
  // },
];

export const ACCOMMODATIONS = [
  {
    title: "Casa Colonial",
    place: "Cartagena",
    description:
      "Una casa colonial en el centro histórico de Cartagena, con vista a la ciudad amurallada.",
    type: "Finca",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748815350/roadmap/finca_bdyr0s.avif",
    price: 120000,
    href: "/accommodation/casa-colonial",
    highlights: [
      "Vista a la ciudad amurallada",
      "Cerca de la playa",
      "Cerca de los restaurantes",
    ],
  },
  {
    title: "Casa Colonial",
    place: "Cartagena",
    description:
      "Una casa colonial en el centro histórico de Cartagena, con vista a la ciudad amurallada.",
    type: "Finca",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748815350/roadmap/finca_bdyr0s.avif",
    price: 120000,
    href: "/accommodation/casa-colonial",
    highlights: [
      "Vista a la ciudad amurallada",
      "Cerca de la playa",
      "Cerca de los restaurantes",
    ],
  },
  {
    title: "Casa Colonial",
    place: "Cartagena",
    description:
      "Una casa colonial en el centro histórico de Cartagena, con vista a la ciudad amurallada.",
    type: "Finca",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748815350/roadmap/finca_bdyr0s.avif",
    price: 120000,
    href: "/accommodation/casa-colonial",
    highlights: [
      "Vista a la ciudad amurallada",
      "Cerca de la playa",
      "Cerca de los restaurantes",
    ],
  },
  {
    title: "Casa Colonial",
    place: "Cartagena",
    description:
      "Una casa colonial en el centro histórico de Cartagena, con vista a la ciudad amurallada.",
    type: "Finca",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748815350/roadmap/finca_bdyr0s.avif",
    price: 120000,
    href: "/accommodation/casa-colonial",
    highlights: [
      "Vista a la ciudad amurallada",
      "Cerca de la playa",
      "Cerca de los restaurantes",
    ],
  },
];

export const CONTACT = {
  phone: "+573127064293",
  instagram: "https://www.instagram.com/roadmapcol/",
  tiktok: "https://www.tiktok.com/@roadmapcol",
  email: "Roadtriptravel.col@gmail.com",
};
