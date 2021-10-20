export default {
  global: {
    componenteFormativo: 'La negociación según protocolos',
    descripcionCurso:
      'La negociación es un proceso de aprendizaje, que invita al reconocimiento de las emociones propias y ajenas, que produce la necesidad de aprender novedosas maneras de comunicación, de autorregular los sentimientos y pensar sobre las interferencias que pudieran ocasionar problemas, para llegar a concretar acuerdos y oportunidades.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Demostraciones de producto o servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características de la negociación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Habilidades y aplicabilidad de un negociador',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Técnicas de negociación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Preventa',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estrategias de ventas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Cierre de venta',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Postventa',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<em>Neuromarketing</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Gestión comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Elementos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Transacciones comerciales',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'ClickBalance. (2018). ¿Cómo debes de realizar la demostración de tus productos o servicios a tus clientes?',
      link:
        'https://clickbalance.com/blog/mercadotecnia-y-ventas/demostracion-de-tus-productos/#:~:text=Una%20excelente%20demostraci%C3%B3n%20debe%20de,producto%20y%20lo%20que%20aporta.',
    },
    {
      referencia:
        'Grupobancolombia. (2021). ¿Qué es la negociación? 5 técnicas para negociar con éxito.',
      link:
        'https://www.grupobancolombia.com/wps/portal/negocios/actualizate/mercadeo-y-ventas/que-es-negociacion-tecnicas-negociar-exito',
    },
    {
      referencia:
        'Hernández, M. (2021). Qué es negociación, tipos, etapas y técnicas efectivas.  Gestiopolis.',
      link:
        'https://www.gestiopolis.com/que-es-negociacion-tipos-etapas-y-tecnicas-efectivas/',
    },
    {
      referencia:
        'Núñez, V. (2018). Definiciones y ejemplos de Neuromarketing que de verdad funcionan.',
      link:
        'https://vilmanunez.com/neuromarketing/#Neuromarketing_Definiciones',
    },
    {
      referencia: 'Quiroga, M. (2021). Las técnicas de negociación.',
      link:
        'https://economipedia.com/definiciones/tecnicas-de-negociacion.html',
    },
    {
      referencia: 'Rdstation. (2020). Ventas: Todo lo que necesitas saber.',
      link: 'https://www.rdstation.com/co/ventas/',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje preventivo',
      significado:
        'acto más instructivo que educativo, el aprendizaje “preventivo” da supremacía a la transmisión de la cultura general frente a la perspectiva del individuo, sus potencialidades y su singularidad cognitiva.',
    },

    {
      termino: 'Comercialización',
      significado:
        'conjunto de actividades desarrolladas para facilitar la venta y/o conseguir que el producto llegue finalmente al consumidor.',
    },

    {
      termino: 'Consumidores',
      significado:
        'persona u organización que consume bienes o servicios, que los productores o proveedores ponen a su disposición en el mercado y que sirven para satisfacer algún tipo de necesidad. Este ofrece sus recursos, generalmente dinero, a cambio de dichos bienes o servicios.',
    },
    {
      terminoHtml: '<em>Marketing</em>',
      termino: 'Marketing',
      significado:
        'ciencia y el arte de explorar, crear y entregar valor para satisfacer necesidades de un mercado objetivo con lucro. El marketing identifica necesidades y deseos no realizados. Define, mide y cuantifica el tamaño del mercado identificado y el lucro potencial.',
    },
    {
      termino: 'Negociación colaborativa',
      significado:
        'herramienta de gestión de conflictos no confrontativa. Aborda los conflictos de manera creativa, indagando en los intereses de todas las partes y trabajando para que el acuerdo que se obtenga satisfaga esos intereses, y enriquezca la relación en el futuro.',
    },
    {
      termino: 'Ventajas',
      significado:
        'ganancia anticipada que un jugador concede a otro para compensar la superioridad que el primero tiene o se atribuye en habilidad o destreza.',
    },
  ],
  complementario: [
    {
      texto:
        'Manzano, M. (2017). <em>Cómo negociar con éxito: 6 claves para preparar tu negociación.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zAo63X1n214&t=14s',
    },
    {
      texto:
        'Marcos, D. (2014). <em>5 pasos para una negociación exitosa.</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IH0-WtWuzCE',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zolfang Rafael Guerrero Bayona',
        cargo: 'Experto Temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios (CIES) - Regional Norte de Santander',
      },
      {
        nombre: 'Paola Moya Peralta ',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['María Natalia Maldonado Delgado'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Alfonso González Vargas',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
