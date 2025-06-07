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
    title: "Eje cafetero",
    subtitle: "Montañas y café",
    description:
      "Descubre la magia del Eje Cafetero, una región llena de montañas y café. Disfruta de la naturaleza y la cultura colombiana.",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/v1748743427/roadmap/ejecafetero_rjzbse.avif",
    href: "/tours/eje-cafetero",
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
    place: "Eje cafetero",
    title: "Ruta del Café",
    duration: "5 días / 4 noches",
    description:
      "Descubre la magia del Eje Cafetero, una región llena de montañas y café. Disfruta de la naturaleza y la cultura colombiana.",
    image:
      "https://res.cloudinary.com/lesteban/image/upload/v1748743427/roadmap/ejecafetero_rjzbse.avif",
    price: 1000000,
    href: "/tours/eje-cafetero",
    highlights: [
      "Visita a fincas cafeteras tradicionales",
      "Pueblos patrimonio: Salento y Filandia",
      "Recorrido por el Valle del Cocora",
      "Parque Nacional del Café",
    ],
    activities: [
      {
        title: "Visita fincas cafeteras tradicionales",
        description:
          "Visita una finca tradicional donde aprenderás todo sobre el cultivo, cosecha y procesamiento del café. Incluye degustación de diferentes variedades y preparaciones.",
        image:
          "https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748748143/roadmap/fincacafetera_ppqmkt.avif",
        duration: "5 horas",
        includes: [
          "Transporte",
          "Degustación de café",
          "Almuerzo típico",
          "Guía turística",
        ],
        price: 140000,
      },
      {
        title: "Valle del Cocora y Salento",
        description:
          "Explora el majestuoso Valle del Cocora, hogar de las palmas de cera más altas del mundo. Después, visita el pintoresco pueblo de Salento con sus coloridas casas y artesanías.",
        image:
          "https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748748950/roadmap/cocora_ul6dvu.avif",
        duration: "8 horas",
        includes: [
          "Transporte",
          "Visita al Valle del Cocora",
          "Visita a Salento",
          "Guía turística",
        ],
        price: 180000,
      },
      {
        title: "Parque Nacional del Café",
        description:
          "Descubre el Parque Nacional del Café, un lugar lleno de naturaleza y paisajes impresionantes. Disfruta de la naturaleza y la cultura colombiana.",
        image:
          "https://res.cloudinary.com/lesteban/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1748749160/roadmap/parquedelcafe_v9w4xi.jpg",
        duration: "5 horas",
        includes: ["Transporte", "Entrada al Parque", "Guía turística"],
        price: 100000,
      },
    ],
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
  phone: "+573147301659",
  instagram: "https://www.instagram.com/roadmapcol/",
  tiktok: "https://www.tiktok.com/@roadmapcol",
  email: "Roadtriptravel.col@gmail.com"
};