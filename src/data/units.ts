// Business units, in the order agreed in D1.
export interface Unit {
  slug: string;
  href: string;
  name: string;
  navLabel: string;
  kicker: string;
  description: string;
  logo: string;
  /** Gradient or solid used for accent bars. */
  accent: string;
  /** Solid color used for numbers and eyebrows. */
  solid: string;
  email?: string;
}

export const units: Unit[] = [
  {
    slug: 'coworking',
    href: '/coworking',
    name: 'Coworking',
    navLabel: 'Coworking',
    kicker: 'Espacios',
    description: 'Espacios de trabajo equipados para Capacitaciones, Laboratorios, Networking y Coworking.',
    logo: '/logos/coworking.png',
    accent: 'var(--grad-cowork)',
    solid: 'var(--cowork-2)',
    email: 'interactivacoworking@gmail.com',
  },
  {
    slug: 'gimnasio-de-innovacion',
    href: '/gimnasio',
    name: 'Gimnasio de Innovación',
    navLabel: 'GII 5.0',
    kicker: 'GII 5.0',
    description:
      'Desarrollo de EBT que ayuda a las organizaciones a afrontar procesos de innovación y vinculación tecnológica para la adopción de nuevas capacidades.',
    logo: '/logos/gii50.png',
    accent: 'var(--grad-gii)',
    solid: 'var(--gii-2)',
    email: 'kiskza.consultora@gmail.com',
  },
  {
    slug: 'kiszka',
    href: '/kiszka',
    name: 'Kiszka Consultora I+D+i+V',
    navLabel: 'Kiszka',
    kicker: 'Consultora',
    description:
      'Fusionar ciencia, estrategia y bienestar para generar servicios de vinculación tecnológica, innovación y desarrollo de negocios.',
    logo: '/logos/lab-idiv.png',
    accent: 'var(--grad-lab)',
    solid: 'var(--lab-3)',
    email: 'kiskza.consultora@gmail.com',
  },
  {
    slug: 'sesiones-de-proyecto',
    href: '/sesiones-de-proyecto',
    name: 'Sesiones de Proyecto',
    navLabel: 'Sesiones de Proyecto',
    kicker: 'Diseño',
    description: 'Servicios de Asistencia Primaria en Diseño para Apasionados.',
    logo: '/logos/sesiones-de-proyecto.png',
    accent: 'var(--ink-0)',
    solid: 'var(--ink-0)',
    email: 'sesionesdeproyecto@gmail.com',
  },
  {
    slug: 'stream',
    href: '/stream',
    name: 'Stream',
    navLabel: 'Stream',
    kicker: 'Contenidos',
    description: 'El talento chaqueño merece ser visto y escuchado.',
    logo: '/logos/stream.png',
    accent: 'var(--grad-stream)',
    solid: 'var(--stream-2)',
  },
  {
    slug: 'productora',
    href: '/productora',
    name: 'Productora',
    navLabel: 'Productora',
    kicker: 'Producción',
    description:
      'Interactiva Hub cuenta con los recursos necesarios para desarrollar tu proyecto audiovisual en formato Streaming y Podcast.',
    logo: '/logos/stream.png',
    accent: 'var(--stream-1)',
    solid: 'var(--stream-1)',
    email: 'interactiva5.0@gmail.com',
  },
];

export const unitBySlug = (slug: string) => {
  const u = units.find((x) => x.slug === slug);
  if (!u) throw new Error(`Unknown unit: ${slug}`);
  return u;
};

// Logos only, no page yet (D1).
export const ecosystem = [
  { name: 'Artefacto', logo: '/logos/artefacto.png' },
  { name: 'Integra psiinn', logo: '/logos/integrapsiinn.png' },
];
