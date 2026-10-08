import { streamVideos, type StreamVideo } from './streamVideos';

export interface StreamProgram {
  slug: string;
  name: string;
  /** Short name used on cards (as shown in the source). */
  tagline: string;
  description?: string;
  /** Short summary (max 140 chars) shown on the /stream program cards. */
  synopsis: string;
  credits: { role: string; value: string }[];
  banner?: string;
  bannerAlt?: string;
  videosHeading: string;
  youtube?: string;
  playlistId?: string;
  instagram?: string;
  email?: string;
  accent: string;
  videos: StreamVideo[];
}

const playlist = (id: string) => `https://www.youtube.com/playlist?list=${id}`;

/** Mercado Pago link for viewer donations to the Stream. */
export const donationLink = 'https://mpago.la/2iMa24h';

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
    synopsis: 'Entrevistas semanales a emprendedores chaqueños sobre moda, diseño, comunicación, ventas y música. Una vidriera digital del talento local.',
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
    videosHeading: 'Playlist',
    youtube: playlist('PLUeXZGb57lcltcTEjqFsolRImfoVjNLlF'),
    playlistId: 'PLUeXZGb57lcltcTEjqFsolRImfoVjNLlF',
    instagram: 'https://www.instagram.com/desafioemprendedor.ok',
    email: 'desafioemprendedor.ok@gmail.com',
    accent: 'var(--stream-2)',
    videos: streamVideos['desafio-emprendedor'],
  },
  {
    slug: 'error-404',
    name: 'Error 404',
    tagline: 'Vínculos humanos 2.0 mediados por tecnología.',
    synopsis: 'Charlas sobre vínculos humanos en la era digital: apps de citas, algoritmos y consejos para relacionarnos mejor a través de la tecnología.',
    description: 'Todas las semanas.',
    credits: [
      { role: 'Conducción y Producción', value: 'Esp. Cecilia Vallejos' },
      { role: 'Op. Técnica', value: 'Soledad Mansilla' },
      { role: 'Columnistas', value: 'Esp. María José Kiszka, Fot. Claudia Vega' },
    ],
    banner: '/images/stream/error-404.webp',
    bannerAlt: 'Error 404 Stream',
    videosHeading: 'Playlist',
    youtube: playlist('PLUeXZGb57lcksrerelUgn_ljNFIXNIK0G'),
    playlistId: 'PLUeXZGb57lcksrerelUgn_ljNFIXNIK0G',
    instagram: 'https://www.instagram.com/error404.stream',
    email: 'error404stream.ok@gmail.com',
    accent: 'var(--stream-1)',
    videos: streamVideos['error-404'],
  },
  {
    slug: 'interactiva-diario',
    name: 'Interactiva Diario',
    tagline: 'Ventana virtual de emprendedores chaqueños',
    synopsis: 'Todos los días visibilizamos emprendedores locales, para fortalecer su desarrollo comercial.',
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
    synopsis: 'Conversaciones con desarrolladores y empresas chaqueñas sobre tecnología e innovación en tiempos de inteligencia artificial.',
    credits: [
      { role: 'Conducción y Producción', value: 'Esp. María José Kiszka' },
      { role: 'Op. Técnica', value: 'Soledad Mansilla' },
    ],
    banner: '/images/stream/magia.webp',
    bannerAlt: 'magIA Tecnología 5.0',
    videosHeading: 'Playlist',
    youtube: playlist('PLUeXZGb57lcnc8BvIuQ6OAFabuJZGzGCn'),
    playlistId: 'PLUeXZGb57lcnc8BvIuQ6OAFabuJZGzGCn',
    instagram: 'https://www.instagram.com/gimnasiodeinnovacion/',
    email: 'interactiva5.0@gmail.com',
    accent: 'var(--gii-2)',
    videos: streamVideos['magia'],
  },
  {
    slug: 'sesiones-de-proyecto',
    name: 'Sesiones de Proyecto',
    tagline: 'Entrevistamos a emprendedores locales con una mirada transdisciplinar e innovadora.',
    synopsis: 'Estudios y empresas de la región presentan sus proyectos: arquitectura, steel framing, bioconstrucción, metalurgia y diseño BIM.',
    description: 'Entrevistamos a emprendedores locales con una mirada transdisciplinar e innovadora. de Resistencia, Chaco y alrededores',
    credits: [
      { role: 'Conducción', value: 'Sonia Rodriguez' },
      { role: 'Op. Técnica', value: 'Soledad Mansilla' },
      { role: 'Producción', value: 'Esp. María José Kiszka' },
    ],
    videosHeading: 'Playlist',
    youtube: playlist('PLN8z1hr0-qUQ'),
    playlistId: 'PLN8z1hr0-qUQ',
    banner: '/images/stream/sesiones-de-proyecto.jpeg',
    bannerAlt: 'Espacio creativo de trabajo para Sesiones de Proyecto',
    accent: 'var(--ink-0)',
    videos: streamVideos['sesiones-de-proyecto'],
  },
  {
    slug: 'teatro-de-resistencia',
    name: 'Teatro de Resistencia',
    tagline: 'Agenda teatral de Resistencia, Chaco y alrededores',
    synopsis: 'Grupos, elencos y artistas de Resistencia hablan de su obra: teatro musical, danza, improvisación, bufón y la agenda teatral local.',
    description: 'AGENDA TEATRAL de Resistencia, Chaco y alrededores',
    credits: [
      { role: 'Conducción', value: 'Arq. Sebastián Pérez' },
      { role: 'Op. Técnica', value: 'Soledad Mansilla' },
      { role: 'Producción', value: 'Esp. María José Kiszka' },
    ],
    banner: '/images/stream/teatro-de-resistencia.webp',
    bannerAlt: 'Teatro de Resistencia',
    videosHeading: 'Playlist',
    youtube: playlist('PLUeXZGb57lcnsAbkpw2WdLg-gqAQbMv7R'),
    playlistId: 'PLUeXZGb57lcnsAbkpw2WdLg-gqAQbMv7R',
    instagram: 'https://www.instagram.com/teatro.de.resistencia',
    accent: 'var(--seg-estudiantes)',
    videos: streamVideos['teatro-de-resistencia'],
  },
];
