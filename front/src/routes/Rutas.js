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
        path: "/nosotros/el-club",
        name: "el-club",
        title: "El Club",
      },
      {
        path: "/nosotros/servicios",
        name: "servicios",
        title: "Servicios",
      },
      // Más enlaces de submenú si los necesitas...
    ],
  },
  // {
  //   path: "/noticias",
  //   name: "noticias",
  //   title: "Noticias",
  // },
  {
    path: "/convenios",
    name: "convenios",
    title: "Convenios",
  },
  // {
  //   path: "/eventos",
  //   name: "eventos",
  //   title: "Eventos",
  // },
  {
    path: "/hotel",
    name: "hotel",
    title: "Hotel",
  },
  {
    path: "/plataforma/inicio",
    name: "plataforma",
    title: "Plataforma",
    estaRegistrado: true,
  },
];
