export interface ProjectLink {
  kind: 'site' | 'android' | 'ios' | 'drive';
  label: string;
  href: string;
  icon: string;
}

export interface Project {
  id: string;
  icon: string;
  badge: string;
  /** 'org' renders the blue badge variant (organization project) */
  badgeClass?: 'org';
  /** Optional company/product logo shown at the top of the card.
   *  theme 'light' renders the logo on a white chip (for logos made for light backgrounds).
   *  shape 'avatar' renders a square/circular photo (for portrait images like Dr Pillai).
   *  zoom renders with object-fit cover to crop heavy built-in image padding. */
  logo?: { src: string; alt: string; theme?: 'light'; shape?: 'avatar'; zoom?: boolean };
  title: string;
  tech: string;
  /** May contain HTML entities */
  description: string;
  highlights: string[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: 'proj-mservice',
    icon: 'fas fa-briefcase',
    badge: 'Selfservit (mservice.ai)',
    badgeClass: 'org',
    logo: {
      src: '/images/mservice-logo.png',
      alt: 'mservice.ai logo',
      theme: 'light',
    },
    title: 'MService Enterprise FSM App',
    tech: 'Cordova • jQuery Mobile • Kendo UI • Custom Java Plugins',
    description:
      'A B2B Field Service Management app for iOS &amp; Android, built to work even with no network.',
    highlights: [
      'Real-time task management, SLA tracking, barcode scanning &amp; map layers',
      'Offline-first data sync delivering 99.5% availability for field engineers',
      'Custom Java native plugins for background GPS location tracking',
    ],
    links: [
      { kind: 'site', label: 'Website', href: 'https://www.mservice.ai/', icon: 'fas fa-globe' },
      {
        kind: 'android',
        label: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.mservice.app',
        icon: 'fab fa-google-play',
      },
      {
        kind: 'ios',
        label: 'iOS',
        href: 'https://apps.apple.com/us/app/mservice/id945991789',
        icon: 'fab fa-apple',
      },
    ],
  },
  {
    id: 'proj-astroved-consumer',
    icon: 'fas fa-star',
    badge: 'AstroVed',
    badgeClass: 'org',
    logo: {
      src: '/images/astroved-logo.svg',
      alt: 'AstroVed logo',
      theme: 'light',
    },
    title: 'AstroVed Consumer Mobile App',
    tech: 'React Native • ZegoCall • TeleCMI • Exotel • Node.js • MongoDB',
    description:
      'A high-traffic B2C astrology app with live consultation and streaming modules.',
    highlights: [
      'Real-time chat, video &amp; voice using ZegoCall, TeleCMI &amp; Exotel',
      'Automated push notifications &amp; personalized user alerts',
      'Secure payment gateway integration on a Node.js / MongoDB backend',
    ],
    links: [
      { kind: 'site', label: 'Website', href: 'https://www.astroved.com/', icon: 'fas fa-globe' },
      {
        kind: 'android',
        label: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.astroved.birthchartnew',
        icon: 'fab fa-google-play',
      },
      {
        kind: 'ios',
        label: 'iOS',
        href: 'https://apps.apple.com/us/app/astroved-astrology-remedies/id1406242342',
        icon: 'fab fa-apple',
      },
    ],
  },
  {
    id: 'proj-astrovedspeaks',
    icon: 'fas fa-comments',
    badge: 'AstroVed',
    badgeClass: 'org',
    logo: {
      src: '/images/astroved-logo.svg',
      alt: 'AstroVed logo',
      theme: 'light',
    },
    title: 'AstroVedSpeaks — Consultation Platform',
    tech: 'Node.js • Express.js • PHP • MongoDB • ZegoCloud • TeleCMI • Exotel',
    description:
      'An on-demand marketplace connecting users with expert advisors through live chat, voice &amp; video.',
    highlights: [
      'Real-time WebRTC audio/video sessions via ZegoCloud SDK',
      'Cloud telephony PSTN routing with TeleCMI &amp; Exotel APIs',
      'Prepaid wallet with real-time per-minute billing engine (Node.js + MongoDB)',
      'Advisor filters, live status tracking &amp; booking schedules',
    ],
    links: [
      {
        kind: 'site',
        label: 'Website',
        href: 'https://www.astroved.com/astrovedspeaks/',
        icon: 'fas fa-globe',
      },
      {
        kind: 'android',
        label: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.astroved.birthchartnew',
        icon: 'fab fa-google-play',
      },
      {
        kind: 'ios',
        label: 'iOS',
        href: 'https://play.google.com/store/apps/details?id=com.astroved.birthchartnew',
        icon: 'fab fa-apple',
      },
    ],
  },
  {
    id: 'proj-quantumgpt',
    icon: 'fas fa-brain',
    badge: 'AstroVed',
    badgeClass: 'org',
    logo: {
      src: '/images/drpillailogo.png',
      alt: 'Dr Pillai logo',
      shape: 'avatar',
    },
    title: 'QuantumGPT — AI Spiritual & Life Guidance Platform',
    tech: 'React.js • React Native • Node.js • Express.js • MongoDB • JWT • OpenAI API',
    description:
      'A multi-platform AI companion that blends generative AI with Vedic time science, astrology &amp; karma logic for career, relationship &amp; decision guidance.',
    highlights: [
      'OpenAI API integration with domain-specific context constraints',
      'React.js web dashboard + React Native iOS/Android clients',
      'Personalized coaching, mantras &amp; remedies from user prompts + planetary metrics',
      'JWT auth + tiered subscriptions (Free / Plus / Pro) with daily question quotas',
    ],
    links: [
      {
        kind: 'site',
        label: 'Website',
        href: 'https://www.pillaicenter.com/dr-pillai-quantumgpt/',
        icon: 'fas fa-globe',
      },
      {
        kind: 'android',
        label: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.pillaicenter.drpillaiquantumgpt',
        icon: 'fab fa-google-play',
      },
      {
        kind: 'ios',
        label: 'iOS',
        href: 'https://apps.apple.com/us/app/dr-pillai-quantum-gpt/id6748348606',
        icon: 'fab fa-apple',
      },
    ],
  },
  {
    id: 'proj-pillai-center-academy',
    icon: 'fas fa-graduation-cap',
    badge: 'AstroVed',
    badgeClass: 'org',
    logo: {
      src: '/images/pillaicenteracademylogo.webp',
      alt: 'Pillai Center Academy logo',
      theme: 'light',
    },
    title: 'Pillai Center Academy — Transformational Learning App',
    tech: 'React Native • WordPress • BuddyBoss • In-App Purchases • Audio / Video Courses',
    description:
      'The online home of Dr. Baskaran Pillai&#39;s programs &amp; courses for health, wealth, relationships &amp; spiritual growth — guiding learners to a 200% life.',
    highlights: [
      'Lesson-based course catalog, live events &amp; free programs serving 1M+ learners across 98 countries',
      'Audio &amp; video lessons: mantras, meditations, karma-clearing protocols &amp; divine empowerment practices',
      'No-code WordPress + BuddyBoss web platform — mobile app consumes the existing course &amp; community APIs',
      'In-app purchases for audio programs (e.g. Karma Busting, Sharaba) on iOS &amp; Android',
    ],
    links: [
      {
        kind: 'site',
        label: 'Website',
        href: 'https://academy.pillaicenter.com/',
        icon: 'fas fa-globe',
      },
      {
        kind: 'android',
        label: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.pca.android',
        icon: 'fab fa-google-play',
      },
      {
        kind: 'ios',
        label: 'iOS',
        href: 'https://apps.apple.com/us/app/pillai-center-academy/id6748059707',
        icon: 'fab fa-apple',
      },
    ],
  },
  {
    id: 'proj-instant-pooja-homa',
    icon: 'fas fa-fire',
    badge: 'AstroVed',
    badgeClass: 'org',
    logo: {
      src: '/images/instantpoojahoma.png',
      alt: 'Instant Pooja Homa logo',
      zoom: true,
    },
    title: 'Instant Pooja Homa — Live Priest Booking App',
    tech: 'React Native • TypeScript • Redux Toolkit • ZegoCloud • Razorpay • Firebase • Notifee',
    description:
      'A React Native app by AstroVed for booking Instant Poojas and Homas with live priests on video call.',
    highlights: [
      'Home tabs for Poojas, Homas &amp; Priests with category, language &amp; online-status filters',
      'Buy flow: select Priest + Pooja — Razorpay / web checkout — MyOrders history',
      'ZegoCloud live video calls with Call Info page, scheduled-order pulse &amp; Join call',
      'Drawer menu: orders, feedback, support desk, settings, profile &amp; account deletion',
    ],
    links: [
      {
        kind: 'site',
        label: 'Website',
        href: 'https://www.astroved.com/instant-pooja',
        icon: 'fas fa-globe',
      },
      {
        kind: 'android',
        label: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.astroved.instantpoojahoma',
        icon: 'fab fa-google-play',
      },
      {
        kind: 'ios',
        label: 'iOS',
        href: 'https://apps.apple.com/us/app/instant-pooja-homa/id6478273914',
        icon: 'fab fa-apple',
      },
    ],
  },
  {
    id: 'proj-planets360',
    icon: 'fas fa-meteor',
    badge: 'Freelance Project',
    logo: {
      src: '/images/planets360-logo.svg',
      alt: 'Planets360 logo',
    },
    title: 'Planets360 — Vedic Astrology Platform',
    tech: 'Astro • React • TypeScript • Zod v4 • Netlify • SEO (JSON-LD)',
    description:
      'An authentic Vedic astrology web platform offering predictions, matchmaking, and celestial guidance.',
    highlights: [
      'Free Kundli (birth chart), daily predictions, Panchang &amp; Dasha timing',
      'Dosha checks (Mangal Dosha, Sade Satti) &amp; gemstone recommendations',
      '36-Guna Kundli matchmaking &amp; numerology readings',
      'Life predictions: career, marriage, health, wealth, education &amp; foreign settlement',
      'Astro framework + Zod v4 validation + JSON-LD structured data for SEO',
    ],
    links: [{ kind: 'site', label: 'Website', href: 'http://planets360.in/', icon: 'fas fa-globe' }],
  },
  {
    id: 'proj-commodity-quant',
    icon: 'fas fa-chart-line',
    badge: 'Freelance Project',
    logo: {
      src: '/images/commodity-quant-logo.png',
      alt: 'Commodity Quant logo',
    },
    title: 'Commodity Quant — MCX Signals App',
    tech: 'Expo SDK • Expo Router • React Native • TypeScript • OneSignal • TanStack Query • Zustand • Msg91',
    description:
      'A real-time MCX (Multi Commodity Exchange of India) trading signals app for Android, iOS &amp; Web — all from a single Expo codebase.',
    highlights: [
      'Live BUY/SELL signal feed with Entry, Target &amp; Stop-Loss levels',
      'Multi-method pivot analysis: Classical, Fibonacci &amp; Woodie&#39;s',
      'Personalized OneSignal push notifications with per-instrument preferences',
      'OTP login via Msg91 + tiered subscription with Pro upsell flows',
      'SEBI-registered Research Analyst branding &amp; compliance',
    ],
    links: [
      { kind: 'site', label: 'Website', href: 'https://www.commodityquant.com/', icon: 'fas fa-globe' },
      {
        kind: 'drive',
        label: 'Android APK',
        href: 'https://drive.google.com/drive/folders/1gt-QyNgMa3356pXKfBsZhxIFV-KMvjsz?usp=sharing',
        icon: 'fab fa-google-drive',
      },
    ],
  },
];
