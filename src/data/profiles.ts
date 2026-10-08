// Audience profiles for the home hero (brief lines 7-11 and 21; Softlanding dropped, D5).
export interface Profile {
  index: string;
  audience: string;
  title: string;
  benefit: string;
  href: string;
  cta: string;
  accent: string;
}

export const profiles: Profile[] = [
  {
    index: '01',
    audience: 'Empresas',
    title: 'Innovación estratégica',
    benefit: 'Empresas que buscan desarrollarse con perspectiva de innovación estratégica.',
    href: '/gimnasio',
    cta: 'Entrenar mi empresa',
    accent: 'var(--seg-empresas)',
  },
  {
    index: '02',
    audience: 'Investigadores y docentes',
    title: 'Vinculación tecnológica',
    benefit:
      'Investigadores, docentes universitarios que buscan integrarse a un ecosistema de innovación, vinculación tecnológica, empresas.',
    href: '/kiszka',
    cta: 'Conocé la consultora',
    accent: 'var(--seg-academia)',
  },
  {
    index: '03',
    audience: 'Instituciones y gobierno',
    title: 'Desarrollo local',
    benefit: 'Instituciones, organizaciones, áreas gubernamentales implicadas en el desarrollo local.',
    href: '/kiszka#dicha',
    cta: 'Conocé D!Cha',
    accent: 'var(--seg-instituciones)',
  },
  {
    index: '04',
    audience: 'Estudiantes y comunidad',
    title: 'Resultados aplicables',
    benefit: 'Público general o instituciones que buscan resultados aplicables. Estudiantes que buscan prácticas.',
    href: '/stream',
    cta: 'Mirá el Stream',
    accent: 'var(--seg-estudiantes)',
  },
];

export const helpVerbs = [
  'Diagnosticar.',
  'Analizar.',
  'Diseñar estrategias.',
  'Vincular.',
  'Desarrollar innovación.',
  'Integrar un ecosistema.',
];

export const allies = ['UNNE', 'UNCAUS', 'ICCTI', 'ALTEC'];
