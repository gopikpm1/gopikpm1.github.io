import type { MobileService } from './mobileServices';
import { seoChennaiVellore } from './seoLocationsA';
import { seoThiruvallurKanchi } from './seoLocationsB';
import { seoTrust } from './seoTrust';
import { seoGrowth } from './seoGrowth';
import { seoCompareA } from './seoCompareA';
import { seoCompareB } from './seoCompareB';
import { seoExtraA } from './seoExtraA';
import { seoExtraB } from './seoExtraB';
import { seoTech } from './seoTech';

export const guidesHub = {
  slug: 'guides',
  metaTitle: 'Mobile App Guides & Local Developer Info — Chennai, Vellore, Thiruvallur | Gopi M',
  metaDescription:
    'Guides by freelance mobile app developer Gopi M: Chennai, Vellore, Thiruvallur, Kanchipuram & Tamil Nadu hiring, Tamil-speaking developer, Hybrid vs Native, Ionic vs React Native, React vs Angular, why apps & growth.',
  keywords:
    'freelance mobile app developer chennai, vellore, thiruvallur, tamil speaking developer, hybrid vs native, ionic vs react native, react vs angular, why need mobile app, business growth',
};

export const seoPages: MobileService[] = [
  ...seoChennaiVellore,
  ...seoThiruvallurKanchi,
  ...seoTrust,
  ...seoGrowth,
  ...seoCompareA,
  ...seoCompareB,
  ...seoExtraA,
  ...seoExtraB,
  ...seoTech,
];

export const moreMenuGroups = [
  {
    heading: 'Hire Local Developer',
    links: [
      'freelance-mobile-app-developer-in-chennai',
      'freelance-mobile-app-developer-in-vellore',
      'freelance-mobile-app-developer-in-thiruvallur',
      'freelance-mobile-app-developer-in-kanchipuram',
      'freelance-mobile-app-developer-in-tamil-nadu-india',
      'tamil-speaking-freelance-mobile-app-developer',
      'react-native-app-developer-in-chennai-india',
      'ionic-app-developer-in-chennai-india',
      'cordova-app-developer-in-chennai-india',
    ],
  },
  {
    heading: 'Compare & Decide',
    links: [
      'hybrid-vs-native-mobile-app-development',
      'ionic-vs-react-native-which-is-better',
      'react-vs-angular-which-is-better-for-app',
      'hire-freelance-app-developer-vs-agency',
      'how-much-does-mobile-app-cost-in-chennai-india',
    ],
  },
  {
    heading: 'Why App & Growth',
    links: [
      'why-your-business-needs-a-mobile-app',
      'how-mobile-apps-help-business-growth',
      'custom-mobile-app-for-small-business-shops-startups',
    ],
  },
];

