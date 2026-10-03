// Site-wide constants. All values come from docs/ (see odd/tasks/astro-site.md, D3/D4).
export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Coworking', href: '/coworking' },
  { label: 'GII 5.0', href: '/gimnasio-de-innovacion' },
  { label: 'Kiszka', href: '/kiszka' },
  { label: 'Sesiones de Proyecto', href: '/sesiones-de-proyecto' },
  { label: 'Stream', href: '/stream' },
  { label: 'Productora', href: '/productora' },
  { label: 'Contacto', href: '/contacto' },
];

export const contact = {
  address: 'Av. Edison 636, Resistencia, Chaco',
  hours: 'Lun a Vie · 9:00 a 18:00 hs',
  phone: '3624261185',
  phoneDisplay: '3624-261185',
  phoneHref: 'tel:+543624261185',
  whatsappHref: 'https://wa.me/543624261185',
  mainEmail: 'interactivacoworking@gmail.com',
} as const;

export interface UnitEmail {
  label: string;
  email: string;
}

// One entry per email address, labeled by unit/program (D4).
export const emails: UnitEmail[] = [
  { label: 'Interactiva Coworking', email: 'interactivacoworking@gmail.com' },
  { label: 'GII 5.0, magIA y Productora', email: 'interactiva5.0@gmail.com' },
  { label: 'Kiszka Consultora I+D+i+V', email: 'kiskza.consultora@gmail.com' },
  { label: 'Sesiones de Proyecto', email: 'sesionesdeproyecto@gmail.com' },
  { label: 'Desafío Emprendedor e Interactiva Diario', email: 'desafioemprendedor.ok@gmail.com' },
  { label: 'Error 404', email: 'error404stream.ok@gmail.com' },
];

export const nasa = (id: string) => `https://images-assets.nasa.gov/image/${id}/${id}~medium.jpg`;
export const nasaImages = {
  earth: nasa('as17-148-22727'),
  astronaut: nasa('s84-27017'),
  astronautLunar: nasa('as11-40-5903'),
};
