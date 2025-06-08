import { Gift, Home, Hotel, Info, Map, MapPin } from "lucide-react";

export const HEADER_LINKS = [
  {
    label: "Inicio",
    href: "/",
    icon: <Home />,
  },
  {
    label: "Tours",
    href: "/tours",
    icon: <Map />,
  },
  {
    label: "Alojamiento",
    href: "/alojamiento",
    icon: <Hotel />,
  },
  {
    label: "Personaliza tu experiencia",
    href: "/personalizado",
    icon: <MapPin />,
  },
];

export const LANDING_LINKS = [
  {
    chip: "Sobre nosotros",
    chipIcon: <Info />,
    chipColor: "bg-sky-200",
    title: "Road Map Col",
    subtitle: "Tu guía turístico en Colombia",
    description:
      "Descubre la magia de Colombia con nuestras experiencias únicas y personalizadas.",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/v1748743344/roadmap/colombian-landscape_obm8nb.avif",
    href: "/tours",
    button: "Conoce más",
  },
  {
    chip: "Promoción",
    chipIcon: <Gift />,
    chipColor: "bg-green-200",
    title: "Oferta especial",
    subtitle: "20% de descuento",
    description:
      "Descubre los mejores descuentos para grupos en Colombia. Oferta especial para grupos de 10 o más personas.",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/v1748229430/roadmap/tourism_nsahmt.avif",
    href: "/tours",
    button: "Conoce más",
  },
  {
    chip: "Info",
    chipIcon: <Info />,
    chipColor: "bg-blue-200",
    title: "Alojamientos",
    subtitle: "Alojamientos en Colombia",
    description:
      "Descubre los mejores alojamientos en Colombia, desde casas coloniales hasta ecolodges en la selva.",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/v1748815350/roadmap/finca_bdyr0s.avif",
    href: "/alojamiento",
    button: "Ver alojamientos",
  },
  {
    chip: "Tour",
    chipIcon: <MapPin />,
    chipColor: "bg-orange-200",
    title: "El salto del Buey - Canopy",
    subtitle: "Montañas y aventura",
    description:
      "Descubre la magia de la montaña de Antioquia, una región llena de montañas y aventura. Disfruta de la naturaleza y la cultura colombiana.",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/v1749350820/roadmapcol/saltodelbuey/DJI_20241127_125105_379_i0fqid.jpg",
    href: "/tours/salto-del-buey",
    button: "Ver tour",
  },
  {
    chip: "Tour",
    chipIcon: <MapPin />,
    chipColor: "bg-orange-200",
    title: "Cartagena",
    subtitle: "Ciudad colonial",
    description:
      "Descubre la magia de Cartagena, una ciudad colonial llena de historia y cultura. Disfruta de la naturaleza y la cultura colombiana.",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/v1748743900/roadmap/cartagena_dy4wge.avif",
    href: "/tours/cartagena",
    button: "Ver tour",
  },
];

export const TOURS = [
  {
    place: "La Ceja, Antioquia",
    title: "El salto del Buey - Canopy",
    description:
      "Las montañas de Antioquia esconden paraísos y aventuras que no te puedes perder, visita con nosotros una de las cascadas mas hermosas e imponentes de nuestra región, vuela en el canopy mas alto de antioqua y si eres un poco mas aventurero atrévete a conquistar la montaña escalando a mas de 70 metros de altura ",
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
        alt: "Salto del buen"
      }
     
    ],
    duration: "8 horas",
    highlights: [
      "Transporte privado ida y regreso",
      "Acompañamiento guiado",
      "Ingreso a la reserva",
      "Vuelo en canopy",
      "Senderismo",
      "Visita a la cascada del salto",
      "Snacks típicos",
    ],
    href: "/tours/salto-del-buey",
    price: 120,
    activities: [],
  },

  {
    place: "Cartagena",
    title: "Cartagena Paraíso Colonial",
    duration: "4 días / 3 noches",
    description:
      "Descubre la magia de Cartagena, una ciudad colonial llena de historia y cultura. Disfruta de la naturaleza y la cultura colombiana.",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/v1748743900/roadmap/cartagena_dy4wge.avif",
    price: 1000000,
    href: "/tours/cartagena",
    highlights: [
      "Recorrido por la Ciudad Amurallada",
      "Día de playa en Islas del Rosario",
      "Visita al Castillo de San Felipe",
      "Tour gastronómico por Getsemaní",
    ],
    activities: [
      {
        title: "Tour Ciudad Amurallada",
        description:
          "Recorre las calles empedradas del centro histórico de Cartagena, declarado Patrimonio de la Humanidad por la UNESCO. Visita plazas, iglesias coloniales y las coloridas casas con balcones floridos.",
        image:
          "https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748750243/roadmap/ciudadamurallada_faidpf.avif",
        duration: "4 horas",
        includes: ["Guía local", "Refrigerio", "Entradas a monumentos"],
        price: 120000,
      },
      {
        title: "Día de playa en Islas del Rosario",
        description:
          "Disfruta de un día en las hermosas islas del Rosario, donde podrás relajarte en la playa y disfrutar de la naturaleza.",
        image:
          "https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748750498/roadmap/islasdelrosario_xie7ir.avif",
        duration: "8 horas",
        includes: ["Transporte", "Almuerzo en la isla", "Guía turística"],
        price: 150000,
      },
      {
        title: "Tour gastronómico por Getsemaní",
        description:
          "Disfruta de un tour gastronómico por Getsemaní, donde podrás degustar los platos típicos de la región. Visita los mercados y los restaurantes más famosos de la ciudad.",
        image:
          "https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748743900/roadmap/cartagena_dy4wge.avif",
        duration: "4 horas",
        includes: ["Transporte", "Almuerzo en la isla", "Guía turística"],
        price: 150000,
      },
      {
        title: "Crucero al Atardecer",
        description:
          "Disfruta de un crucero al atardecer por el río Magdalena, donde podrás disfrutar de la vista de la ciudad y los paisajes naturales.",
        image:
          "https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748750594/roadmap/velerocartagena_w0jtxh.avif",
        duration: "2 horas",
        includes: ["Transporte", "Almuerzo en la isla", "Guía turística"],
        price: 150000,
      },
    ],
  },
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
    href: "/alojamiento/casa-colonial",
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
    href: "/alojamiento/casa-colonial",
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
    href: "/alojamiento/casa-colonial",
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
    href: "/alojamiento/casa-colonial",
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
