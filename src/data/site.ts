// Site-wide constants. All values come from docs/ (see odd/tasks/astro-site.md, D3/D4).
export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Coworking', href: '/coworking' },
  { label: 'Stream', href: '/stream' },
  { label: 'Gimnasio', href: '/gimnasio' },
  {
    label: 'Consultoría',
    href: '/kiszka',
    children: [
      { label: 'Sesiones de Proyecto', href: '/sesiones-de-proyecto' },
      { label: 'Artefacto', href: '/artefacto' },
      { label: 'INTEGRAPSIINN', href: '/integrapsiinn' },
    ],
  },
  { label: 'Productora', href: '/productora' },
  { label: 'Radar', href: '/radar' },
  { label: 'Contacto', href: '/contacto' },
];

export const contact = {
  address: 'Av. Edison 636, Resistencia, Chaco',
  hours: 'Lun a Vie · 9:00 a 18:00 hs',
  phone: '3624261185',
  phoneDisplay: '3624-261185',
  phoneHref: 'tel:+543624261185',
  whatsappHref:
    'https://wa.me/543624261185?text=Hola!%20Vengo%20desde%20la%20web%20de%20Interactiva%20Hub%20y%20quiero%20hacer%20una%20consulta.',
  mainEmail: 'interactivahub@gmail.com',
} as const;

export interface UnitEmail {
  label: string;
  email: string;
}

export const emails: UnitEmail[] = [
  { label: 'Interactiva Hub', email: 'interactivahub@gmail.com' },
];

export const nasa = (id: string) => `https://images-assets.nasa.gov/image/${id}/${id}~medium.jpg`;
export const nasaImages = {
  earth: nasa('as17-148-22727'),
  astronaut: nasa('s84-27017'),
  astronautLunar: nasa('as11-40-5903'),
};
