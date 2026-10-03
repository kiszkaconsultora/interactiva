import { streamVideos, type StreamVideo } from './streamVideos';

export interface StreamProgram {
  slug: string;
  name: string;
  /** Short name used on cards (as shown in the source). */
  tagline: string;
  description?: string;
  credits: { role: string; value: string }[];
  banner?: string;
  bannerAlt?: string;
  videosHeading: string;
  youtube?: string;
  instagram?: string;
  email?: string;
  accent: string;
  videos: StreamVideo[];
}

const playlist = (id: string) => `https://www.youtube.com/playlist?list=${id}`;

export const streamIntro = {
  title: 'Stream',
  lead: 'El talento chaqueño merece ser visto y escuchado. En nuestro Stream de Interactiva Hub producimos contenidos que muestran la creatividad, la innovación y las historias que están transformando nuestra región. Es más que una transmisión: es una ventana abierta al futuro, donde las ideas locales se conectan con el mundo.',
  programmingTitle: 'Nuestra Programación',
  programmingLead:
    'Accedé con un solo click a la variada oferta de episodios de nuestras propuestas. Visitá el Stream para entrar en la energía de la innovación chaqueña. Conectate, participá y sé parte de la comunidad que está creando el futuro desde hoy.',
};

export const streamPrograms: StreamProgram[] = [
  {
    slug: 'desafio-emprendedor',
    name: 'Desafío Emprendedor',
    tagline: 'Vidriera Digital del Talento Chaqueño',
    description: 'Todas las semanas entrevistamos a emprendedores locales.',
    credits: [
      { role: 'Conducción y Producción', value: 'Esp. María José Kiszka' },
      { role: 'Op. Técnica', value: 'Soledad Mansilla' },
      {
        role: 'Columnistas',
        value: 'Esp. Cecilia Vallejos, Cra. Nair Mattio, Lic. Jimea Monticelli, Lic. Andrea Quiero, Fot. Claudia Vega',
      },
    ],
    banner: '/images/stream/desafio-emprendedor.webp',
    bannerAlt: 'Desafío Emprendedor @Interactiva Hub',
    videosHeading: 'Temporada 2',
    youtube: playlist('PLUeXZGb57lcltcTEjqFsolRImfoVjNLlF'),
    instagram: 'https://www.instagram.com/desafioemprendedor.ok',
    email: 'desafioemprendedor.ok@gmail.com',
    accent: 'var(--stream-2)',
    videos: streamVideos['desafio-emprendedor'],
  },
  {
    slug: 'error-404',
    name: 'Error 404',
    tagline: 'Vínculos humanos 2.0 mediados por tecnología.',
    description: 'Todas las semanas.',
    credits: [
      { role: 'Conducción y Producción', value: 'Esp. Cecilia Vallejos' },
      { role: 'Op. Técnica', value: 'Soledad Mansilla' },
      { role: 'Columnistas', value: 'Esp. María José Kiszka, Fot. Claudia Vega' },
    ],
    banner: '/images/stream/error-404.webp',
    bannerAlt: 'Error 404 Stream',
    videosHeading: 'Nuestros Episodios',
    youtube: playlist('PLUeXZGb57lcksrerelUgn_ljNFIXNIK0G'),
    instagram: 'https://www.instagram.com/error404.stream',
    email: 'error404stream.ok@gmail.com',
    accent: 'var(--stream-1)',
    videos: streamVideos['error-404'],
  },
  {
    slug: 'interactiva-diario',
    name: 'Interactiva Diario',
    tagline: 'Ventana virtual de emprendedores chaqueños',
    description: 'Todos los días visibilizamos emprendedores locales, para fortalecer su desarrollo comercial.',
    credits: [
      { role: 'Conducción y Producción', value: 'Esp. María José Kiszka' },
      { role: 'Op. Técnica', value: 'Soledad Mansilla' },
      { role: 'Columnistas', value: 'Fot. Claudia Vega' },
    ],
    banner: '/images/stream/desafio-emprendedor.webp',
    bannerAlt: 'Desafío Emprendedor @Interactiva Hub',
    videosHeading: 'Videos',
    instagram: 'https://www.instagram.com/desafioemprendedor.ok',
    email: 'desafioemprendedor.ok@gmail.com',
    accent: 'var(--stream-2)',
    videos: streamVideos['interactiva-diario'],
  },
  {
    slug: 'magia',
    name: 'magIA',
    tagline: 'Desarrollos tecnológicos chaqueños en la era de la IA',
    credits: [
      { role: 'Conducción y Producción', value: 'Esp. María José Kiszka' },
      { role: 'Op. Técnica', value: 'Soledad Mansilla' },
    ],
    banner: '/images/stream/magia.webp',
    bannerAlt: 'magIA Tecnología 5.0',
    videosHeading: 'Episodios',
    instagram: 'https://www.instagram.com/gimnasiodeinnovacion/',
    email: 'interactiva5.0@gmail.com',
    accent: 'var(--gii-2)',
    videos: streamVideos['magia'],
  },
  {
    slug: 'sesiones-de-proyecto',
    name: 'Sesiones de Proyecto',
    tagline: 'Entrevistamos a emprendedores locales con una mirada transdisciplinar e innovadora.',
    description: 'Entrevistamos a emprendedores locales con una mirada transdisciplinar e innovadora. de Resistencia, Chaco y alrededores',
    credits: [
      { role: 'Conducción', value: 'Sonia Rodriguez' },
      { role: 'Op. Técnica', value: 'Soledad Mansilla' },
      { role: 'Producción', value: 'Esp. María José Kiszka' },
    ],
    videosHeading: 'Videos',
    accent: 'var(--ink-0)',
    videos: streamVideos['sesiones-de-proyecto'],
  },
  {
    slug: 'teatro-de-resistencia',
    name: 'Teatro de Resistencia',
    tagline: 'Agenda teatral de Resistencia, Chaco y alrededores',
    description: 'AGENDA TEATRAL de Resistencia, Chaco y alrededores',
    credits: [
      { role: 'Conducción', value: 'Arq. Sebastián Pérez' },
      { role: 'Op. Técnica', value: 'Soledad Mansilla' },
      { role: 'Producción', value: 'Esp. María José Kiszka' },
    ],
    banner: '/images/stream/teatro-de-resistencia.webp',
    bannerAlt: 'Teatro de Resistencia',
    videosHeading: 'Temporada 1',
    youtube: playlist('PLUeXZGb57lcnsAbkpw2WdLg-gqAQbMv7R'),
    instagram: 'https://www.instagram.com/teatro.de.resistencia',
    accent: 'var(--seg-estudiantes)',
    videos: streamVideos['teatro-de-resistencia'],
  },
];
