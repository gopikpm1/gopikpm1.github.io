export interface ExperienceItem {
  icon: string;
  title: string;
  company: string;
  duration: string;
  /** Achievement bullet — may contain inline HTML such as <strong> */
  achievements: string[];
  keyProjectsLabel: string;
  keyProjects: { label: string; href: string }[];
}

export const experience: ExperienceItem[] = [
  {
    icon: 'fas fa-briefcase',
    title: 'Programmer Analyst - Product Engineering',
    company: 'Selfservit Solutions Pvt Ltd (mservice.ai) | Chennai, Tamil Nadu',
    duration: 'May 2012 – June 2016 (4 Years 1 Month)',
    achievements: [
      '<strong>Spearheaded end-to-end development</strong> of a cloud-based Field Service Management (FSM) mobile app for iOS and Android using Cordova, jQuery Mobile, and Kendo UI.',
      '<strong>Conducted Research &amp; Development</strong> with new technologies to build core software product components and solutions as a key member of the product engineering team.',
      '<strong>Developed hybrid mobile and web applications</strong> using jQuery, jQuery Mobile, and Kendo UI Mobile, alongside functional components using .NET technologies (.aspx, C#, and SQL Server).',
      '<strong>Built custom Java native plugins</strong> for background GPS location tracking and offline data synchronization.',
      '<strong>Architected an Offline-First mobile system</strong> ensuring 99.5% application availability for field engineers working in low-connectivity zones.',
      '<strong>Improved cross-device UI accessibility and mobile responsiveness by 30%</strong> across multiple screen sizes and operating systems.',
      '<strong>Managed app deployments across Google Play, Apple App Store, and Windows Store</strong>, owning release builds and store compliance.',
      '<strong>Handled requirements analysis, design, customer delivery, and support</strong>, translating business needs into product features and resolving client issues.',
    ],
    keyProjectsLabel: 'Key Project Delivered',
    keyProjects: [{ label: 'MService Enterprise FSM App', href: '#proj-mservice' }],
  },
  {
    icon: 'fas fa-star',
    title: 'Team Lead - Cross-Platform Mobile Applications',
    company: 'AstroVed | Chennai, Tamil Nadu',
    duration: 'Dec 2016 – Mar 2026 (9+ years)',
    achievements: [
      '<strong>Led end-to-end delivery of cross-platform mobile applications</strong> for iOS and Android using React Native, Ionic, and Angular, covering requirements, architecture, development, testing, deployment, and production support.',
      '<strong>Managed and mentored the mobile development team</strong>, including sprint planning, task allocation, technical guidance, performance management, and delivery tracking.',
      '<strong>Owned technical architecture and engineering standards</strong>, driving scalable solutions, reusable components, coding best practices, and maintainable application design.',
      '<strong>Led code reviews, technical reviews, debugging, and refactoring</strong>, ensuring code quality, performance, reliability, and adherence to development standards.',
      '<strong>Collaborated with product, backend, QA, UI/UX, and business teams</strong> to translate requirements into solutions, resolve technical challenges, and deliver features on schedule.',
      '<strong>Owned production support and application stability</strong>, including bug fixes, crash analysis, root-cause investigation, performance optimization, and incident resolution; improved mobile user engagement by 20%.',
      '<strong>Managed App Store and Google Play releases and the complete SDLC</strong>, including release planning, deployment, monitoring, maintenance, and continuous product improvements.',
    ],
    keyProjectsLabel: 'Key Projects Delivered',
    keyProjects: [
      { label: 'AstroVed Consumer Mobile App', href: '#proj-astroved-consumer' },
      { label: 'AstroVedSpeaks Consultation Platform', href: '#proj-astrovedspeaks' },
      { label: 'QuantumGPT AI Guidance Platform', href: '#proj-quantumgpt' },
    ],
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Freelance Mobile & Web Developer',
    company: 'Independent / Freelance | Chennai, Tamil Nadu',
    duration: 'Apr 2026 – Present',
    achievements: [
      '<strong>Design, build, and ship complete products end-to-end as an independent developer</strong> — from architecture and UI to publishing on Google Play, Apple App Store, and the web.',
      '<strong>Own the full product lifecycle</strong>, including branding, subscription monetization, push notification strategy, store compliance, SEO, and post-launch monitoring.',
    ],
    keyProjectsLabel: 'Key Projects Delivered',
    keyProjects: [
      { label: 'Planets360 — Vedic Astrology Platform', href: '#proj-planets360' },
      { label: 'Commodity Quant — MCX Signals App', href: '#proj-commodity-quant' },
    ],
  },
];
