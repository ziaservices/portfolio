import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import mesDelicesImg from './mes_delices.jpeg'
import cappucinoImg from './Cappucino.jpeg'
import oneWonImg from './1Won.jpeg'

const PROJECT_IMAGES = {
  mesDelices: mesDelicesImg,
  cappucino: cappucinoImg,
  oneWon: oneWonImg,
} as const

type Language = 'en' | 'fr' | 'ar'
type Theme = 'dark' | 'light'

type ProjectItem = {
  number: string
  name: string
  category: string
  description: string
  capabilities: string[]
  focus: string
  url: string
  image: string
}

type Copy = {
  nav: { work: string; about: string; skills: string; contact: string; available: string; language: string; theme: string; menu: string }
  hero: { available: string; title: string; italic: string; end: string; intro: string; work: string; talk: string }
  projects: { eyebrow: string; title: string; italic: string; body: string; visitWebsite: string; items: ProjectItem[] }
  skills: { eyebrow: string; title: string; italic: string; body: string; cards: { title: string; body: string }[] }
  experience: { eyebrow: string; title: string; italic: string; entries: { period: string; role: string; company: string; type: string; points: string[] }[] }
  contact: { eyebrow: string; title: string; italic: string; body: string; start: string; email: string }
}

const copies: Record<Language, Copy> = {
  en: {
    nav: { work: 'Work', about: 'About', skills: 'Skills', contact: 'Contact', available: 'Available for work', language: 'Language', theme: 'Toggle theme', menu: 'Toggle menu' },
    hero: { available: 'Available for freelance / studio opportunities', title: 'WEB DEVELOPER', italic: 'Building Digital', end: 'EXPERIENCES.', intro: 'I build fast, modern and scalable websites and web applications for businesses, brands and digital products.', work: 'View my work →', talk: "Let's talk" },
    projects: {
      eyebrow: 'Selected Work',
      title: 'Work that speaks',
      italic: 'for itself.',
      body: 'Live websites built for real businesses — designed to showcase products, attract customers, and support everyday operations.',
      visitWebsite: 'Visit Website ↗',
      items: [
        {
          number: '01',
          name: 'Mes Délices — Bakery Website',
          category: 'Bakery Website',
          description:
            'A modern bakery website designed to showcase the bakery\'s products and work, promote the business online, and allow customers to place orders directly through the website.',
          capabilities: [
            'Bakery product showcase',
            'Attractive presentation of the bakery\'s work',
            'Online promotion',
            'Customer ordering',
            'Responsive design',
            'Business-focused website experience',
          ],
          focus: 'Business-focused website experience',
          url: 'https://mes-delices-brown.vercel.app/',
          image: PROJECT_IMAGES.mesDelices,
        },
        {
          number: '02',
          name: 'Cappucino — Coffee Shop Website',
          category: 'Coffee Shop Website',
          description:
            'A coffee shop website created to showcase the shop\'s products and work, allow customers to place orders, and easily find the coffee shop\'s location.',
          capabilities: [
            'Coffee/product showcase',
            'Online ordering',
            'Business promotion',
            'Location information',
            'Responsive design',
            'Customer-focused experience',
          ],
          focus: 'Customer-focused experience',
          url: 'https://cappucino-ten.vercel.app/',
          image: PROJECT_IMAGES.cappucino,
        },
        {
          number: '03',
          name: '1Won — Food & Ride Delivery',
          category: 'Delivery Platform',
          description:
            'A food and ride delivery platform designed for delivery services across Morocco, combining food delivery and transportation into one platform.',
          capabilities: [
            'Food delivery',
            'Ride/transport services',
            'Morocco-wide service concept',
            'Customer-focused platform',
            'Delivery-oriented user experience',
            'Responsive web application',
          ],
          focus: 'Delivery-oriented user experience',
          url: 'https://1won.vercel.app/',
          image: PROJECT_IMAGES.oneWon,
        },
      ],
    },
    skills: { eyebrow: 'Skills', title: 'SERVICES', italic: 'clients can count on.', body: 'From first idea to a polished launch, I bring design thinking and dependable engineering to every project.', cards: [
      { title: 'Web Development', body: 'Responsive, accessible websites and web applications built for speed, clarity, and growth.' },
      { title: 'UI / UX Implementation', body: 'Thoughtful design translated into interfaces that feel intuitive, refined, and easy to use.' },
      { title: 'Business Automation', body: 'Practical digital tools and integrations that reduce manual work and keep your operations moving.' },
      { title: 'Technical Consulting', body: 'Clear technical direction, architecture reviews, and product guidance for confident decisions.' },
    ] },
    experience: { eyebrow: 'Journey', title: "WHERE I'VE BEEN", italic: 'building.', entries: [
      { period: '2021 — Now', role: 'Web Developer', company: 'Independent', type: 'Ongoing', points: ['Designing and developing websites and web applications for real-world clients', 'Building responsive interfaces from idea, wireframe, or Figma file', 'Integrating APIs, CMS platforms, payments, and custom business tools', 'Optimising performance, accessibility, and maintainability from day one'] },
      { period: '2022 — 2024', role: 'Hardware & Electronics', company: 'Independent projects', type: 'Technical', points: ['Exploring embedded systems, electronics, and physical computing', 'Designing and prototyping circuits with a practical, iterative approach', 'Connecting hardware thinking with software and user experience', 'Learning to solve complex problems across the full product surface'] },
    ] },
    contact: { eyebrow: 'Contact', title: 'HAVE A PROJECT', italic: 'in mind?', body: "Whether you're looking for a developer for your next client project or want to build something from scratch, I'd love to hear about it.", start: 'Start a conversation →', email: 'Email me' },
  },
  fr: {
    nav: { work: 'Projets', about: 'À propos', skills: 'Services', contact: 'Contact', available: 'Disponible', language: 'Langue', theme: 'Changer le thème', menu: 'Ouvrir le menu' },
    hero: { available: 'Disponible pour des missions freelance ou studio', title: 'DÉVELOPPEUR WEB', italic: 'Je crée des', end: 'EXPÉRIENCES DIGITALES.', intro: 'Je conçois des sites et applications web rapides, modernes et évolutifs pour les entreprises et produits digitaux.', work: 'Voir mes projets →', talk: 'Parlons-en' },
    projects: {
      eyebrow: 'Projets sélectionnés',
      title: 'Des réalisations qui',
      italic: 'parlent d\'elles-mêmes.',
      body: 'Des sites web en ligne conçus pour de vraies entreprises — pour présenter leurs produits, attirer des clients et soutenir leur activité.',
      visitWebsite: 'Visiter le site ↗',
      items: [
        {
          number: '01',
          name: 'Mes Délices — Site Web de Boulangerie',
          category: 'Site web boulangerie',
          description:
            'Un site web moderne de boulangerie conçu pour mettre en valeur les produits et le savoir-faire de la boulangerie, promouvoir l\'activité en ligne et permettre aux clients de passer commande directement sur le site.',
          capabilities: [
            'Présentation des produits de boulangerie',
            'Mise en valeur du savoir-faire',
            'Promotion en ligne',
            'Commande client',
            'Design responsive',
            'Expérience web orientée business',
          ],
          focus: 'Expérience web orientée business',
          url: 'https://mes-delices-brown.vercel.app/',
          image: PROJECT_IMAGES.mesDelices,
        },
        {
          number: '02',
          name: 'Cappucino — Site Web de Café',
          category: 'Site web café',
          description:
            'Un site web de café conçu pour présenter les produits et le savoir-faire du café, permettre aux clients de commander en ligne et trouver facilement l\'emplacement du café.',
          capabilities: [
            'Présentation café / produits',
            'Commande en ligne',
            'Promotion de l\'activité',
            'Informations de localisation',
            'Design responsive',
            'Expérience orientée client',
          ],
          focus: 'Expérience orientée client',
          url: 'https://cappucino-ten.vercel.app/',
          image: PROJECT_IMAGES.cappucino,
        },
        {
          number: '03',
          name: '1Won — Livraison de repas & transport',
          category: 'Plateforme de livraison',
          description:
            'Une plateforme de livraison de repas et de transport conçue pour les services de livraison au Maroc, combinant livraison alimentaire et transport sur une seule plateforme.',
          capabilities: [
            'Livraison de repas',
            'Services de transport',
            'Concept de service à l\'échelle du Maroc',
            'Plateforme orientée client',
            'Expérience utilisateur axée livraison',
            'Application web responsive',
          ],
          focus: 'Expérience utilisateur axée livraison',
          url: 'https://1won.vercel.app/',
          image: PROJECT_IMAGES.oneWon,
        },
      ],
    },
    skills: { eyebrow: 'Services', title: 'DES SOLUTIONS', italic: 'pensées pour vous.', body: 'De la première idée au lancement, je combine sens du design et ingénierie fiable.', cards: [{ title: 'Développement web', body: 'Des sites et applications responsives, accessibles et conçus pour grandir.' }, { title: 'UI / UX', body: 'Des interfaces intuitives, soignées et agréables à utiliser.' }, { title: 'Automatisation', body: 'Des outils et intégrations qui réduisent les tâches manuelles.' }, { title: 'Conseil technique', body: 'Une direction claire pour vos choix techniques et votre produit.' }] },
    experience: { eyebrow: 'Parcours', title: "MON PARCOURS", italic: 'en construction.', entries: [{ period: '2021 — Aujourd’hui', role: 'Développeur web', company: 'Indépendant', type: 'En cours', points: ['Conception et développement de sites et applications pour des clients', 'Création d’interfaces responsives depuis une idée ou une maquette', 'Intégration d’API, CMS, paiements et outils métier', 'Optimisation des performances et de l’accessibilité'] }, { period: '2022 — 2024', role: 'Hardware & électronique', company: 'Projets indépendants', type: 'Technique', points: ['Exploration des systèmes embarqués et de l’électronique', 'Conception et prototypage de circuits', 'Lien entre réflexion hardware, software et expérience utilisateur', 'Résolution de problèmes complexes de bout en bout'] }] },
    contact: { eyebrow: 'Contact', title: 'UN PROJET', italic: 'en tête ?', body: 'Vous cherchez un développeur pour un projet client ou souhaitez construire quelque chose de nouveau ? Échangeons.', start: 'Démarrer une conversation →', email: 'M’écrire' },
  },
  ar: {
    nav: { work: 'الأعمال', about: 'نبذة', skills: 'الخدمات', contact: 'تواصل', available: 'متاح للعمل', language: 'اللغة', theme: 'تغيير المظهر', menu: 'فتح القائمة' },
    hero: { available: 'متاح للعمل الحر أو ضمن استوديو', title: 'مطور ويب', italic: 'أبني تجارب', end: 'رقمية مميزة.', intro: 'أبني مواقع وتطبيقات ويب سريعة وعصرية وقابلة للتوسع للشركات والعلامات التجارية والمنتجات الرقمية.', work: 'شاهد أعمالي ←', talk: 'لنتحدث' },
    projects: {
      eyebrow: 'أعمال مختارة',
      title: 'مشاريع تتحدث',
      italic: 'عن نفسها.',
      body: 'مواقع حية بُنيت لأعمال حقيقية — لعرض المنتجات وجذب العملاء ودعم النشاط اليومي.',
      visitWebsite: 'زيارة الموقع ↗',
      items: [
        {
          number: '01',
          name: 'Mes Délices — موقع مخبزة',
          category: 'موقع مخبزة',
          description:
            'موقع مخبزة حديث مصمم لعرض منتجات المخبزة وأعمالها، الترويج للنشاط التجاري عبر الإنترنت، وتمكين العملاء من تقديم الطلبات مباشرة عبر الموقع.',
          capabilities: [
            'عرض منتجات المخبزة',
            'عرض جذاب لأعمال المخبزة',
            'الترويج عبر الإنترنت',
            'طلبات العملاء',
            'تصميم متجاوب',
            'تجربة موقع موجهة للأعمال',
          ],
          focus: 'تجربة موقع موجهة للأعمال',
          url: 'https://mes-delices-brown.vercel.app/',
          image: PROJECT_IMAGES.mesDelices,
        },
        {
          number: '02',
          name: 'Cappucino — موقع مقهى',
          category: 'موقع مقهى',
          description:
            'موقع مقهى أُنشئ لعرض منتجات المقهى وأعماله، وتمكين العملاء من تقديم الطلبات، والعثور بسهولة على موقع المقهى.',
          capabilities: [
            'عرض القهوة والمنتجات',
            'الطلب عبر الإنترنت',
            'الترويج للنشاط التجاري',
            'معلومات الموقع',
            'تصميم متجاوب',
            'تجربة موجهة للعملاء',
          ],
          focus: 'تجربة موجهة للعملاء',
          url: 'https://cappucino-ten.vercel.app/',
          image: PROJECT_IMAGES.cappucino,
        },
        {
          number: '03',
          name: '1Won — توصيل طعام ومواصلات',
          category: 'منصة توصيل',
          description:
            'منصة توصيل طعام ومواصلات مصممة لخدمات التوصيل في المغرب، تجمع بين توصيل الطعام وخدمات النقل في منصة واحدة.',
          capabilities: [
            'توصيل الطعام',
            'خدمات النقل والمواصلات',
            'مفهوم خدمة على مستوى المغرب',
            'منصة موجهة للعملاء',
            'تجربة مستخدم مخصصة للتوصيل',
            'تطبيق ويب متجاوب',
          ],
          focus: 'تجربة مستخدم مخصصة للتوصيل',
          url: 'https://1won.vercel.app/',
          image: PROJECT_IMAGES.oneWon,
        },
      ],
    },
    skills: { eyebrow: 'الخدمات', title: 'حلول', italic: 'يمكنكم الاعتماد عليها.', body: 'من الفكرة الأولى إلى الإطلاق، أجمع بين التفكير التصميمي والهندسة الموثوقة.', cards: [{ title: 'تطوير الويب', body: 'مواقع وتطبيقات متجاوبة وسريعة وسهلة الوصول.' }, { title: 'تنفيذ UI / UX', body: 'تصاميم واضحة تتحول إلى واجهات سهلة وممتعة.' }, { title: 'أتمتة الأعمال', body: 'أدوات وتكاملات تقلل العمل اليدوي.' }, { title: 'استشارات تقنية', body: 'توجيه واضح وهندسة أفضل لاتخاذ قرارات واثقة.' }] },
    experience: { eyebrow: 'المسيرة', title: 'مسيرتي في', italic: 'البناء والتجربة.', entries: [{ period: '2021 — الآن', role: 'مطور ويب', company: 'مستقل', type: 'مستمر', points: ['تصميم وتطوير مواقع وتطبيقات لعملاء حقيقيين', 'بناء واجهات متجاوبة انطلاقاً من فكرة أو تصميم', 'دمج واجهات API وأنظمة CMS والمدفوعات والأدوات المخصصة', 'تحسين الأداء وسهولة الوصول وقابلية الصيانة'] }, { period: '2022 — 2024', role: 'الأجهزة والإلكترونيات', company: 'مشاريع مستقلة', type: 'تقني', points: ['استكشاف الأنظمة المدمجة والإلكترونيات والحوسبة الفيزيائية', 'تصميم نماذج أولية للدوائر بطريقة عملية وتكرارية', 'الربط بين التفكير في العتاد والبرمجيات وتجربة المستخدم', 'حل المشكلات المعقدة عبر كامل المنتج'] }] },
    contact: { eyebrow: 'تواصل', title: 'لديك مشروع', italic: 'في ذهنك؟', body: 'سواء كنت تبحث عن مطور لمشروعك القادم أو تريد بناء شيء من الصفر، يسعدني أن أسمع منك.', start: 'ابدأ محادثة ←', email: 'راسلني' },
  },
}

const Context = createContext<{ language: Language; setLanguage: (value: Language) => void; theme: Theme; toggleTheme: () => void; t: Copy } | null>(null)

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('portfolio-language') as Language) || 'en')
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('portfolio-theme') as Theme) || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'))
  useEffect(() => { localStorage.setItem('portfolio-language', language); document.documentElement.lang = language; document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr' }, [language])
  useEffect(() => { localStorage.setItem('portfolio-theme', theme); document.documentElement.dataset.theme = theme }, [theme])
  const value = useMemo(() => ({ language, setLanguage, theme, toggleTheme: () => setTheme((v) => v === 'dark' ? 'light' : 'dark'), t: copies[language] }), [language, theme])
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function usePortfolio() {
  const value = useContext(Context)
  if (!value) throw new Error('usePortfolio must be used inside PortfolioProvider')
  return value
}

export type { Language, ProjectItem }
