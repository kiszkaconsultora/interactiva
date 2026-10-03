// Coworking rooms and prices, from docs/Servicios/1. COWORKING.html.
export interface PriceRow {
  label: string;
  price: string;
  note?: string;
}

export interface Room {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  capacity?: string;
  equipment?: string;
  description?: string;
  prices?: PriceRow[];
  notes?: string[];
  pdf?: string;
}

export const priceNote = '*precios finales, incluyen IVA. Válidos desde Julio hasta Diciembre 2026 inclusive';

export const rooms: Room[] = [
  {
    id: 'salon-albricias',
    name: 'Salón Albricias',
    image: '/images/coworking/salon-albricias.webp',
    imageAlt: 'Salón Albricias con mesas largas blancas, televisor y estanterías',
    capacity: 'De 8 a 25 personas',
    equipment: 'Equipamiento completo: mesas, sillas, proyector, office equipado.',
    pdf: 'https://drive.google.com/file/d/18B19AflT-vrIDXAo9hMfFyNJtL7xjn9O/view?usp=sharing',
    prices: [
      { label: 'Por Hora', price: '$ 45.000' },
      { label: 'Por Reunión', price: '$ 81.000', note: 'de 1hs. a 3hs.' },
      { label: 'Por Media Jornada', price: '$ 126.000', note: 'de 3hs. a 6hs.' },
      { label: 'Por Jornada', price: '$ 180.000', note: 'de 6hs. a 8hs.' },
      { label: 'Por 8 Jornadas', price: '$ 810.000' },
      { label: 'Por 20 Jornadas', price: '$ 1.630.000' },
    ],
  },
  {
    id: 'sala-sinergia',
    name: 'Sala Sinergia',
    image: '/images/coworking/sala-sinergia.webp',
    imageAlt: 'Sala Sinergia con pared de ladrillo, mesa y plantas',
    capacity: 'De 4 a 8 personas',
    equipment: 'Equipamiento completo: mesas, sillas, pantalla.',
    description:
      'Espacio tipo Loft, amplio y luminoso, destinado a actividades empresariales, corporativas o de equipos. Ideal para Dictado de capacitaciones.',
    pdf: 'https://drive.google.com/file/d/1ky6KYNtha8nrWFVxpyiQX6pyEZfb-BAO/view?usp=sharing',
    prices: [
      { label: 'Por Hora', price: '$ 27.000' },
      { label: 'Por Reunión', price: '$ 45.000', note: 'de 1hs. a 3hs.' },
      { label: 'Por Media Jornada', price: '$ 63.000', note: 'de 3hs. a 6hs.' },
      { label: 'Por Jornada', price: '$ 90.000', note: 'de 6hs. a 8hs.' },
      { label: 'Por 8 Jornadas', price: '$ 630.000' },
      { label: 'Por 20 Jornadas', price: '$ 1.200.000' },
    ],
  },
  {
    id: 'sala-serendipia',
    name: 'Sala Serendipia',
    image: '/images/coworking/sala-serendipia.webp',
    imageAlt: 'Sala Serendipia con mesa de madera y cocina',
    capacity: 'De 2 a 4 personas',
    pdf: 'https://drive.google.com/file/d/1sfSnrGMbmT6on_lh57G0cFRifaTxek74/view?usp=sharing',
    prices: [
      { label: 'Por Hora', price: '$ 18.000' },
      { label: 'Por Reunión', price: '$ 36.000', note: 'de 1hs. a 3hs.' },
      { label: 'Por Media Jornada', price: '$ 45.000', note: 'de 3hs. a 6hs.' },
      { label: 'Por Jornada', price: '$ 72.000', note: 'de 6hs. a 8hs.' },
      { label: 'Por 8 Jornadas', price: '$ 450.000' },
      { label: 'Por 12 Jornadas', price: '$ 600.000' },
      { label: 'Por 20 Jornadas', price: '$ 900.000' },
    ],
  },
  {
    id: 'sala-stream-podcast',
    name: 'Sala Stream/Podcast',
    image: '/images/coworking/sala-stream-podcast.webp',
    imageAlt: 'Sala Stream/Podcast con escritorio, monitor y micrófonos',
    equipment: 'Equipamiento completo: mesas, sillas, pc, micrófonos, cámaras, escenografía.',
    notes: ['El valor de la operación técnica se regula por separado, estimado el $10.000 la hora reloj.'],
  },
  {
    id: 'sala-artefacto',
    name: 'Sala Artefacto',
    image: '/images/coworking/sala-artefacto.webp',
    imageAlt: 'Sala Artefacto con mesa blanca y plantas',
    notes: [
      'El costo expresado es final incluye IVA.',
      'Espacios totalmente equipados + Servicio de Limpieza + Wifi de 300 megas + servicios.',
      'Cantidad de horas por actividad: Por Reunión de 1hs. a 3hs., Por Media Jornada de 3hs. a 6hs., Por Jornada de 6hs. a 8hs.',
    ],
  },
];

export const equipment = [
  { src: '/images/coworking/plasma.webp', caption: 'Plasma 54" para Proyecciones', alt: 'Televisor sobre pared de ladrillo' },
  { src: '/images/coworking/proyectores.webp', caption: 'Proyectores', alt: 'Presentación con proyector frente a una audiencia sentada' },
  { src: '/images/coworking/pizarras.webp', caption: 'Pizarras', alt: 'Pizarra blanca junto a plantas' },
  { src: '/images/coworking/sillas-y-mesas.webp', caption: 'Sillas y mesas para 30 asistentes', alt: 'Filas de sillas negras dispuestas para un evento' },
  { src: '/images/coworking/cocina-equipada.webp', caption: 'Cocina Equipada', alt: 'Cocina con cafeteras, microondas y vasos' },
  { src: '/images/coworking/coffee-break.webp', caption: 'Coffee Break', alt: 'Mesa de catering con el cartel del coworking' },
];

export const otherSpaces = [
  {
    name: 'Sala IT',
    ideal: 'Encuentros equipos IT',
    text: 'Oficina con 4 sillas ergonómicas, pizarras, Wifi de alta velocidad. Privacidad, cocina equipada y servicio de limpieza incluido.',
  },
  {
    name: 'Sala Phygital',
    ideal: 'Digitalización de servicios',
    text: 'Oficinas totalmente equipadas para grabación de Podcast / Producciones Audiovisuales en formato virtual, sincrónico o asincrónico.',
  },
];
