export interface ServiceSlide {
  tag: string;
  icon: string;
  gradient: string;
  title: string;
  description: string;
  points: string[];
  cta: { label: string; href: string };
}

export const services: ServiceSlide[] = [
  {
    tag: 'Most Popular',
    icon: 'fas fa-robot',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
    title: 'Want an AI Chatbot for Your Business?',
    description:
      'Turn visitors into paying customers with a 24/7 AI assistant that chats, answers questions and books sales while you sleep — on mobile apps, website, Windows / Apple desktop apps & PWA.',
    points: [
      'ChatGPT-powered chat & voice bots',
      'Mobile apps, website, Windows / Mac desktop apps, WhatsApp, PWA & in-app assistants',
      'Trained on YOUR business data',
    ],
    cta: { label: 'Get AI for My Business', href: '#contact' },
  },
  {
    tag: 'Urgent Fix',
    icon: 'fas fa-bug-slash',
    gradient: 'linear-gradient(135deg, #b91c1c 0%, #7c2d12 100%)',
    title: 'Critical Bugs? Crashes No One Can Fix?',
    description:
      'Mobile app, website, desktop app or PWA crashing on launch? 1-star reviews piling up? I hunt down the nastiest production bugs and ship a safe hotfix — fast.',
    points: [
      'Crash, ANR & freeze diagnosis with root-cause report',
      'Broken payments, login & sync repaired',
      'Emergency hotfix released to stores, desktop & web within days',
    ],
    cta: { label: 'Fix My App Now', href: '#contact' },
  },
  {
    tag: 'AI-Powered Upgrade',
    icon: 'fas fa-wand-magic-sparkles',
    gradient: 'linear-gradient(135deg, #0d9488 0%, #7c3aed 100%)',
    title: 'Upgrade Your Code with AI Tools',
    description:
      'Legacy, messy or slow code eating your time and money? I refactor it with modern AI-assisted engineering — cleaner, faster, cheaper to maintain.',
    points: [
      'AI-assisted code review, cleanup & modernization',
      'Migrate legacy code to React Native, Expo, Electron & TypeScript',
      'Custom plugins & reusable libraries in Java, C# & npm',
      'Faster builds, fewer bugs, happier developers',
    ],
    cta: { label: 'Modernize My Code', href: '#contact' },
  },
  {
    tag: 'Best Value',
    icon: 'fas fa-indian-rupee-sign',
    gradient: 'linear-gradient(135deg, #16a34a 0%, #0d9488 100%)',
    title: 'Low Budget, High-Quality Apps?',
    description:
      'Big-agency quality without the big-agency invoice. One senior developer, zero middlemen — premium mobile apps, website, Windows / Apple desktop apps & PWA at freelance prices.',
    points: [
      'Fixed quote upfront — no hidden costs, ever',
      'Senior quality: clean code, tested releases',
      'Weekly demos — you see progress every week',
    ],
    cta: { label: 'Get My Free Quote', href: '#contact' },
  },
  {
    tag: 'Free Audit',
    icon: 'fas fa-rocket',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    title: 'Consult or Upgrade Your Mobile / Web / Desktop App',
    description:
      'Slow, buggy or outdated mobile app, website, desktop app or PWA losing users? Get a free expert audit and a clear upgrade plan — no jargon, just results.',
    points: [
      'Free performance, UI & crash audit',
      'Speed boost, bug fixes & modern redesign',
      'Migrate to React Native, Expo, Electron & the latest stack',
    ],
    cta: { label: 'Audit My App — Free', href: '#contact' },
  },
  {
    tag: 'Your Brand, Your App',
    icon: 'fas fa-mobile-screen-button',
    gradient: 'linear-gradient(135deg, #059669 0%, #2563eb 100%)',
    title: 'Build Your Own Brand Mobile App',
    description:
      'Stop depending on marketplaces. Launch your own branded mobile apps, website, Windows / Apple desktop apps & PWA and own your customers forever.',
    points: [
      'Mobile apps (iOS + Android), website, Windows / Mac desktop apps & PWA from a single codebase',
      'Your logo, your colors, your store listing',
      'Payments, subscriptions & push notifications built in',
    ],
    cta: { label: 'Start My Brand App', href: '#contact' },
  },
  {
    tag: 'Desktop Apps',
    icon: 'fas fa-desktop',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #2563eb 100%)',
    title: 'Need a Desktop App for Windows / Mac?',
    description:
      'Get a fast, installable desktop app for Windows & Apple macOS — plus mobile apps, website & PWA — all from one codebase to save time and cost. Need a special feature? I build custom native plugins & libraries in Java, C# & npm.',
    points: [
      'Electron desktop apps for Windows (NSIS / MSI) & macOS (DMG / Mac App Store)',
      'Mobile apps (iOS & Android) + responsive website + installable PWA from shared code',
      'Custom Java / C# / npm plugins & libraries for any native capability',
      'Offline support, system tray, native menus, notifications & secure auto-updates',
    ],
    cta: { label: 'Build My Desktop App', href: '#contact' },
  },
  {
    tag: 'Plugins & SDKs',
    icon: 'fas fa-plug',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #0ea5e9 100%)',
    title: 'Need a Custom Plugin or Library?',
    description:
      'Missing a native feature? I design and build custom plugins & reusable libraries in Java, C# and npm — so your mobile, desktop, web & PWA apps can do anything native can.',
    points: [
      'Java plugins: Cordova / Capacitor / React Native bridges, background GPS, AAR / JAR libs',
      'C# libraries: .NET class libs, NuGet packages, SDK & API integrations',
      'npm packages: TypeScript libs, versioned, documented & published',
    ],
    cta: { label: 'Build My Plugin', href: '#contact' },
  },
  {
    tag: 'Launch & Grow',
    icon: 'fas fa-chart-line',
    gradient: 'linear-gradient(135deg, #db2777 0%, #7c3aed 100%)',
    title: 'Launch, Rank & Grow Everywhere',
    description:
      'Publishing is just day one. Rank higher on the Play Store, App Store & Google and keep users coming back.',
    points: [
      'Store submission + ASO that ranks',
      'SEO, analytics & organic user growth',
      'Updates, monitoring & long-term support',
    ],
    cta: { label: 'Grow My Business', href: '#contact' },
  },
];
