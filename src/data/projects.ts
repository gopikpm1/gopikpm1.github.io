export interface Project {
  id: string;
  icon: string;
  badge: string;
  /** 'org' renders the blue badge variant (organization project) */
  badgeClass?: 'org';
  title: string;
  tech: string;
  /** May contain HTML entities */
  description: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 'proj-mservice',
    icon: 'fas fa-briefcase',
    badge: 'Selfservit (mservice.ai)',
    badgeClass: 'org',
    title: 'MService Enterprise FSM App',
    tech: 'Cordova • jQuery Mobile • Kendo UI • Custom Java Plugins',
    description:
      'A B2B Field Service Management app for iOS &amp; Android, built to work even with no network.',
    highlights: [
      'Real-time task management, SLA tracking, barcode scanning &amp; map layers',
      'Offline-first data sync delivering 99.5% availability for field engineers',
      'Custom Java native plugins for background GPS location tracking',
    ],
  },
  {
    id: 'proj-astroved-consumer',
    icon: 'fas fa-star',
    badge: 'AstroVed',
    badgeClass: 'org',
    title: 'AstroVed Consumer Mobile App',
    tech: 'React Native • ZegoCall • TeleCMI • Exotel • Node.js • MongoDB',
    description:
      'A high-traffic B2C astrology app with live consultation and streaming modules.',
    highlights: [
      'Real-time chat, video &amp; voice using ZegoCall, TeleCMI &amp; Exotel',
      'Automated push notifications &amp; personalized user alerts',
      'Secure payment gateway integration on a Node.js / MongoDB backend',
    ],
  },
  {
    id: 'proj-astrovedspeaks',
    icon: 'fas fa-comments',
    badge: 'AstroVed',
    badgeClass: 'org',
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
  },
  {
    id: 'proj-quantumgpt',
    icon: 'fas fa-brain',
    badge: 'AstroVed',
    badgeClass: 'org',
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
  },
  {
    id: 'proj-planets360',
    icon: 'fas fa-meteor',
    badge: 'Freelance Project',
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
  },
  {
    id: 'proj-commodity-quant',
    icon: 'fas fa-chart-line',
    badge: 'Freelance Project',
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
  },
];
