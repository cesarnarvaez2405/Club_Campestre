export const linkRutas = [
  {
    path: "/",
    name: "home",
    title: "Inicio",
  },
  {
    name: "nosotros",
    title: "Nosotros",
    subMenu: [
      {
        path: "/nosotros/ElClub",
        name: "ElClub",
        title: "El Club",
      },
      {
        path: "/nosotros/instalaciones",
        name: "instalaciones",
        title: "Instalaciones",
      },
      // Más enlaces de submenú si los necesitas...
    ],
  },
  {
    path: "/eventos",
    name: "eventos",
    title: "Eventos",
  },
  {
    path: "/convenios",
    name: "convenios",
    title: "Convenios",
  },
  {
    path: "/hotel",
    name: "hotel",
    title: "Hotel",
  },
  {
    path: "/spa",
    name: "spa",
    title: "Spa",
  },
];
