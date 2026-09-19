export interface MobileService {
  slug: string;
  icon: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  tagline: string;
  intro: string[];
  forWho: string[];
  benefits: { title: string; text: string }[];
  features: string[];
  faqs: { q: string; a: string }[];
}

export const mobileHub = {
  slug: 'mobile-app-development',
  metaTitle: 'Mobile App Development Chennai, India | iOS & Android Apps for Shops, Startups & Enterprises — Gopi M',
  metaDescription:
    'Hire freelance mobile app developer in Chennai, India. Custom iOS & Android apps with React Native & Expo for local shops, startups, retail stores, internal teams, booking, education & streaming. Fixed quote, fast launch, Play Store + App Store release.',
  keywords:
    'mobile app development chennai, mobile app developer india, ios android app developer, react native developer india, expo developer, hire app developer, freelance app developer, startup app development, retail store app',
};

export const mobileServices: MobileService[] = [
  {
    slug: 'local-shop-retail-store-app-development',
    icon: 'fas fa-store',
    label: 'Local Shops & Retail Store Apps',
    metaTitle: 'Retail Store & Local Shop App Development | Your Shop on Mobile — Gopi M',
    metaDescription:
      'Get your local shop on mobile! Custom retail store app for kirana, bakery, pharmacy & supermarkets in Chennai, India. Catalogue, offers, WhatsApp orders, UPI payments & push notifications.',
    keywords: 'local shop app development, retail store app developer, kirana store app, shop mobile app chennai, small business app india',
    h1: 'Your Local Shop Deserves Its Own Mobile App — Stop Renting Customers, Own Them',
    tagline: 'Turn walk-in buyers into lifetime fans. Your logo, your offers, your app on their home screen.',
    intro: [
      'Running a bakery, kirana store, pharmacy or boutique — and still depending only on walk-ins or aggregator commissions? A branded app puts YOUR shop on every customer home screen, sends festival offers in one tap, and brings repeat orders without paying 20-30% commission forever.',
      'I build affordable, super-simple shop apps for iOS & Android from one codebase (React Native + Expo). Catalogue with photos, WhatsApp ordering, UPI payments, delivery slots and push notifications — everything a busy owner needs, nothing confusing.',
    ],
    forWho: ['Kirana / grocery / supermarkets', 'Bakeries, sweets & restaurants', 'Pharmacy & clinics', 'Clothing, jewellery & boutiques', 'Mobile & hardware shops'],
    benefits: [
      { title: 'More repeat sales', text: 'Push offers to phones in seconds. Customers come back instead of forgetting you.' },
      { title: 'Zero commission', text: 'Take orders direct with UPI + WhatsApp. Keep 100% profit.' },
      { title: 'Brand visibility 24x7', text: 'Your logo on their home screen = free billboard every day.' },
      { title: 'Easy for staff', text: 'Add products and offers yourself in 2 minutes. Tamil training included.' },
      { title: 'Launch in weeks', text: 'Fixed quote, weekly demo on your phone, store publishing handled.' },
      { title: 'Grows with you', text: 'Start with catalogue + orders. Add loyalty & website later.' },
    ],
    features: ['Catalogue with photos & search', 'Offers, coupons & push notifications', 'WhatsApp order + UPI payments', 'Delivery slots & order tracking', 'Order history & billing', 'Tamil + English option'],
    faqs: [
      { q: 'I am not technical. Can I manage the app?', a: 'Yes. Simple admin panel + training video. Manage everything from your phone.' },
      { q: 'How much does a shop app cost?', a: 'Fixed quote, far cheaper than agencies. Email contact@gopim.dev for a free 24-hour quote.' },
      { q: 'Will you publish on Play Store?', a: 'Yes. Listing, screenshots and ASO keywords are all included.' },
      { q: 'I have Instagram. Do I need an app?', a: 'Apps stay on the phone. Push notifications bring 3-4x more repeat orders than posts.' },
    ],
  },
  {
    slug: 'startup-mvp-app-development',
    icon: 'fas fa-rocket',
    label: 'Startup MVP Apps',
    metaTitle: 'Startup MVP App Development India | Launch Your Idea in Weeks — Gopi M',
    metaDescription:
      'Startup MVP developer in India. Launch your idea fast on iOS & Android with React Native & Expo. Fixed quote, investor-ready demo, scalable backend, Play Store launch.',
    keywords: 'startup mvp development india, mvp app developer, startup app developer chennai, contract app developer, hire startup developer',
    h1: 'Have a Startup Idea? Launch a Killer MVP in Weeks',
    tagline: 'From napkin sketch to Play Store. One senior dev, fixed price, zero drama.',
    intro: [
      'Startups need a razor-sharp MVP: login, killer core feature, payments and analytics — launched fast so you can test, pitch and raise. That is exactly what I ship.',
      '13+ years, 52+ apps, 1M+ users. I work like your tech co-founder on contract: fixed quote, milestones, weekly demos you can forward to investors.',
    ],
    forWho: ['Pre-seed founders', 'D2C & marketplace startups', 'SaaS founders needing mobile MVP', 'College startups', 'Anyone searching contract app jobs'],
    benefits: [
      { title: 'Launch in 4-8 weeks', text: 'Weekly builds on TestFlight + APK. Demo while competitors are still in Figma.' },
      { title: 'Fixed quote', text: 'Locked price + milestones. No hourly meter running.' },
      { title: 'Investor-ready', text: 'Clean UI, onboarding, screenshots and demo video included.' },
      { title: 'Scalable day one', text: 'Node.js + MongoDB backend scales to 100,000 users without rewrite.' },
      { title: 'Store + analytics', text: 'ASO, Firebase analytics, crash reporting and OTA updates.' },
      { title: 'You own code', text: 'Full source on GitHub, docs and handover. No lock-in.' },
    ],
    features: ['OTP login & profiles', 'Core MVP feature + admin panel', 'Razorpay / Stripe payments', 'Push + referral sharing', 'Analytics + crashlytics', 'OTA updates without store review'],
    faqs: [
      { q: 'I only have an idea. Can you start?', a: 'Yes. Send a 1-page note. I do wireframes + UI + build.' },
      { q: 'Do you sign NDA?', a: 'Absolutely. Your idea stays confidential, you own all IP.' },
      { q: 'What about after launch?', a: '30-day free support + affordable care plans for growth.' },
      { q: 'Why freelancer vs agency?', a: 'Direct talk to builder, 40-60% less cost, 2x faster.' },
    ],
  },
  {
    slug: 'employee-attendance-tracking-app-development',
    icon: 'fas fa-user-check',
    label: 'Employee Attendance & Tracking Apps',
    metaTitle: 'Employee Attendance & Field Staff Tracking App Development India — Gopi M',
    metaDescription:
      'Custom employee attendance app, field staff GPS tracking, leave & payroll internal apps for Chennai & India. Punch in/out with selfie + GPS, offline sync, Tamil support. Cut fake attendance.',
    keywords: 'employee attendance app development, staff tracking app, field staff gps tracking, hr internal app developer, punch in punch out app india',
    h1: 'Stop Fake Attendance & Paper Registers — Smart Staff App With GPS + Selfie',
    tagline: 'For owners with 5 to 500 staff: drivers, technicians, shop staff, field sales.',
    intro: [
      'Registers lie. If you run shops, service teams, schools or delivery fleets, you need proof: WHO punched in, WHERE and WHEN — with photo + GPS you can trust.',
      'I build private internal apps: selfie + GPS fence punch, live map, attendance to salary sheet. Works offline and syncs later — proven in MService FSM with 99.5% availability.',
    ],
    forWho: ['Retail chains & showrooms', 'Service / AMC technician teams', 'Schools, hospitals & clinics', 'Logistics & delivery fleets', 'Factories & contractors'],
    benefits: [
      { title: 'Kill buddy punching', text: 'Selfie + GPS + timestamp on every punch. Fake attendance drops to zero.' },
      { title: 'Live staff map', text: 'See staff on map. Assign jobs to nearest person, track route history.' },
      { title: 'Salary in one click', text: 'Late / overtime / leave auto-calculated. Export to Excel.' },
      { title: 'Works offline', text: 'Punch stored on phone, uploaded when network returns. No data loss.' },
      { title: 'Private & secure', text: 'Your data on your server. Owner sees all, supervisor sees his team.' },
      { title: 'Simple Tamil UI', text: 'Big Punch-In button, works on Rs.7000 phones. 10-min training.' },
    ],
    features: ['GPS + selfie punch with geo-fence', 'Leave & overtime approvals', 'Live tracking & job dispatch', 'Salary & shift master + Excel export', 'Late / SOS push alerts', 'Admin web dashboard'],
    faqs: [
      { q: 'Can it track staff all day?', a: 'Yes — battery-optimized background GPS shows route, stops and distance.' },
      { q: 'No network at site. Will it work?', a: 'Yes. Offline-first punch auto-syncs later. Tamper-proof.' },
      { q: 'Payroll export?', a: 'Yes. Attendance to salary rules to Excel/Tally export + payslip PDF.' },
      { q: 'Is staff data private?', a: '100%. Your server, encrypted device, private Play track or APK.' },
    ],
  },
  {
    slug: 'ticket-booking-travel-app-development',
    icon: 'fas fa-ticket-alt',
    label: 'Ticket Booking & Travel Apps',
    metaTitle: 'Ticket Booking & Travel App Development India | Bus, Events, Tours — Gopi M',
    metaDescription:
      'Ticket booking app developer India: bus, travel, events, movies & tours. Seat selection, UPI payments, QR tickets, agent panel. Launch your own travel booking app.',
    keywords: 'ticket booking app development, travel app developer india, bus booking app, event ticket app, tour package app chennai',
    h1: 'Launch Your Own Ticket Booking or Travel App — Keep Every Commission',
    tagline: 'Buses, events, movies, temple tours — seats, payments & QR entry in one app.',
    intro: [
      'Travel agents and event organizers lose 15-25% per ticket to big platforms. Your own app flips that: customers book direct, pay by UPI, get QR tickets, and you keep full margin + customer data.',
      'I ship booking apps with live seat maps, Razorpay/UPI, agent panels and offline QR scanning at gates — battle-tested with lakhs of users.',
    ],
    forWho: ['Bus / van operators', 'Travel agents & tour organizers', 'Event & expo organizers', 'Movie halls', 'Temple tour operators'],
    benefits: [
      { title: 'Full profit', text: 'Customer books on YOUR app, money settles to YOUR account.' },
      { title: 'Fill seats faster', text: 'WhatsApp share link. Live seats + UPI = booking in 60 seconds.' },
      { title: 'No gate chaos', text: 'QR + offline scanner blocks duplicate tickets instantly.' },
      { title: 'Agent network', text: 'Sub-agent logins, auto commission split and wallet settlement.' },
      { title: 'Repeat travellers', text: 'Push festive offers — fill last seats without ads.' },
      { title: 'Multi-language', text: 'Tamil, Hindi, English UI + in-app support chat.' },
    ],
    features: ['Seat map & pricing slabs', 'UPI, cards + wallet & coupons', 'QR e-tickets + offline scanner', 'Agent panel with commissions', 'Refunds & support chat', 'Ratings & push campaigns'],
    faqs: [
      { q: 'Live seat availability?', a: 'Yes — sleeper/seater maps, hold-timer, live inventory, multi-boarding points.' },
      { q: 'Refunds?', a: 'One-tap cancel with auto-refund rules to source/wallet + admin override.' },
      { q: 'Website too?', a: 'Yes — app + SEO booking website from same backend.' },
      { q: 'Offline scanning?', a: 'Yes. Lightweight scanner works without internet, syncs later.' },
    ],
  },
  {
    slug: 'education-learning-app-development',
    icon: 'fas fa-graduation-cap',
    label: 'Education & Coaching Apps',
    metaTitle: 'Education & Coaching App Development India | Online Classes, Tests, Video Courses — Gopi M',
    metaDescription:
      'Coaching & education app developer India: online classes, video courses, tests, fees & live classes. Launch your own tuition app with Tamil/English videos, quizzes and certificates.',
    keywords: 'education app development india, coaching app developer, tuition app development, online class app chennai, lms mobile app',
    h1: 'Launch Your Own Coaching or Tuition App — Teach Once, Earn Forever',
    tagline: 'Video courses, live classes, tests & fees — your academy in every student pocket.',
    intro: [
      'Tuition centres and coaches depend on YouTube + WhatsApp chaos. Your own academy app organises everything: video lessons, live Zoom-style classes, tests with auto-marks, fee reminders and certificates — students stay, referrals grow.',
      'Proven: I built Pillai Center Academy (React Native + BuddyBoss) with audio/video courses, in-app purchases and offline downloads, plus live video apps with ZegoCloud.',
    ],
    forWho: ['Tuition & NEET/JEE coaching', 'Spoken English & skill trainers', 'Schools & colleges', 'Corporate training teams', 'YouTubers & influencers'],
    benefits: [
      { title: 'Sell courses 24x7', text: 'Students buy at midnight. UPI + subscriptions + coupons, money in your account.' },
      { title: 'No more paper tests', text: 'MCQ auto-check, ranks, parent SMS. Save 10 hours weekly.' },
      { title: 'Live + recorded', text: 'Live classes with chat + recordings auto-saved for revision.' },
      { title: 'Stop piracy worry', text: 'DRM-friendly video, login-locked access, watermarked PDFs.' },
      { title: 'Parents pay faster', text: 'Fee reminders + receipts + attendance SMS = fewer follow-ups.' },
      { title: 'Your brand', text: 'Your logo, your Play Store listing, your reviews — not UrbanPro.' },
    ],
    features: ['Video/audio courses + offline download', 'Live classes with chat & polls', 'Tests, quizzes & leaderboards', 'Fees, subscriptions & coupons', 'Attendance + parent alerts', 'Certificates & admin dashboard'],
    faqs: [
      { q: 'Can I upload my YouTube videos?', a: 'Yes — we migrate them into paid courses with access control and offline mode.' },
      { q: 'Live class limit?', a: '100 to 10,000 viewers with Zego/Agora. Chat, hand-raise, recording included.' },
      { q: 'Tamil medium support?', a: 'Yes. Tamil + English UI, Tamil video titles, WhatsApp parent updates.' },
      { q: 'Fees online?', a: 'UPI, cards, EMI links + auto receipts and defaulter list.' },
    ],
  },
  {
    slug: 'video-call-live-streaming-app-development',
    icon: 'fas fa-video',
    label: 'Video Call & Live Streaming Apps',
    metaTitle: 'Video Call & Live Streaming App Development India | Zego, WebRTC — Gopi M',
    metaDescription:
      'Video call & live streaming app developer India: 1-1 video consults, live classes, astrology, telehealth & shopping. Low-latency Zego/WebRTC, chat, payments & recording.',
    keywords: 'video call app development india, live streaming app developer, webrtc developer india, zego app development, teleconsultation app chennai',
    h1: 'Your Own Video Call or Live Streaming App — Consult, Teach & Sell Live',
    tagline: 'Astrology, doctors, tutors, sellers — HD video + payments, your brand.',
    intro: [
      'Zoom links look unprofessional and take commission. Your own video app keeps clients inside YOUR brand: book slot, pay, join HD call, rate — all in one place, on iOS + Android.',
      'Shipped proof: AstroVed live chat/voice/video with per-minute wallet billing, Instant Pooja live priests, QuantumGPT consults — Node.js + Zego/WebRTC + Razorpay, handling high traffic daily.',
    ],
    forWho: ['Astrologers & spiritual advisors', 'Doctors & telehealth clinics', 'Tutors & fitness coaches', 'Live sellers & influencers', 'Consultants & counsellors'],
    benefits: [
      { title: 'Earn per minute', text: 'Wallet deducts live. No-shows and unpaid overtime disappear.' },
      { title: 'HD that works on 4G', text: 'Tuned Zego/WebRTC with reconnect + low-data mode for villages.' },
      { title: 'Bookings + payments', text: 'Slots, reminders, UPI, refunds — zero receptionist needed.' },
      { title: 'Chat + files + recording', text: 'Pre-chat, in-call chat, reports share, consented recordings.' },
      { title: 'Your marketplace', text: 'Multi-advisor listing, ratings, commission split — your own Practo/AstroTalk.' },
      { title: 'Private & compliant', text: 'OTP login, consented recording, role access, audit logs.' },
    ],
    features: ['1-1 & group HD video + voice', 'Live streaming with gifts/chat', 'Slot booking + wallet billing', 'Chat, file share & call recording', 'Ratings, referrals & coupons', 'Advisor + admin dashboards'],
    faqs: [
      { q: 'Per-minute billing possible?', a: 'Yes — wallet holds amount, deducts live per second, auto-cut on balance low.' },
      { q: 'Which video SDK?', a: 'ZegoCloud or Agora for scale, WebRTC for self-hosted. I pick by budget + users.' },
      { q: 'Recordings?', a: 'Yes — cloud recording with consent screen + playback in app.' },
      { q: 'How many users live?', a: 'Tested 1-1 to 10k-viewer lives with chat + moderation tools.' },
    ],
  },
  {
    slug: 'simple-easy-senior-friendly-app-development',
    icon: 'fas fa-thumbs-up',
    label: 'Simple Apps for Everyone',
    metaTitle: 'Simple User-Friendly App Development for Seniors & Small Business India — Gopi M',
    metaDescription:
      'Simple easy-to-use app developer India: big buttons, Tamil voice, senior-friendly apps, PDF bills, doctor reminders. If your customers fear smartphones, this is for them.',
    keywords: 'simple app development india, senior friendly app, easy to use app developer, small business simple app, tamil voice app chennai',
    h1: 'Scared of Complicated Apps? Get a Super-Simple App Anyone Can Use',
    tagline: 'Big buttons. Tamil voice. 3 taps to order. Even 65-year-old customers love it.',
    intro: [
      'Most apps fail because customers find them confusing. If your buyers are seniors, drivers, farmers or busy shop staff, you need SIMPLE: one home screen, big text, Tamil voice guide, cash + UPI — done.',
      'I design “grandma-tested” apps: 3-tap order, missed-call ordering, PDF bills on WhatsApp, medicine reminders — plus offline mode for low network areas.',
    ],
    forWho: ['Senior citizen services', 'Clinics & home care', 'Milk, water & newspaper delivery', 'Farm pickups & mandis', 'Any shop with non-tech buyers'],
    benefits: [
      { title: 'Anyone can use', text: 'Big fonts, voice prompts, Tamil + English. Zero training needed.' },
      { title: 'Order in 3 taps', text: 'Reorder button, favourites, missed-call order for feature phones.' },
      { title: 'PDF bills auto', text: 'Neat bill PDF on WhatsApp + print. Tally-friendly daily report.' },
      { title: 'Reminders that work', text: 'Medicine, EMI, service due — loud Tamil voice + push alerts.' },
      { title: 'Offline friendly', text: 'Works on 2G/4G drops. Syncs when back online.' },
      { title: 'Family accounts', text: 'Son orders for parents. One wallet, multi-member profiles.' },
    ],
    features: ['Big-button home + voice guide', '3-tap reorder & favourites', 'PDF bills + WhatsApp share', 'Reminders + voice calls', 'Offline mode + low-data', 'Family profiles + wallet'],
    faqs: [
      { q: 'My customers are 60+. Will they use it?', a: 'Yes — that is the whole design goal. Big text, voice, minimal screens. Tested with seniors.' },
      { q: 'Voice in Tamil?', a: 'Yes. Tamil + English voice prompts, plus tap-to-hear on every button.' },
      { q: 'PDF bills?', a: 'Auto-generated neat PDFs, WhatsApp share + Bluetooth print support.' },
      { q: 'Feature phone orders?', a: 'Yes — missed-call + SMS ordering bridges to the same backend.' },
    ],
  },
  {
    slug: 'business-brand-visibility-app-development',
    icon: 'fas fa-bullhorn',
    label: 'Brand Visibility & Business Apps',
    metaTitle: 'Business Brand Visibility App Development | Turn Website Visitors Into Loyal App Users — Gopi M',
    metaDescription:
      'Have a website but no repeat visitors? Get a branded mobile app with push, loyalty & referrals. Convert website traffic into lifetime customers. Chennai, India brand app developer.',
    keywords: 'brand visibility app development, business mobile app india, convert website to app, branded app developer chennai, customer loyalty app',
    h1: 'Have a Website But Nobody Returns? Your Own Brand App Fixes That',
    tagline: 'Website brings visitors. App keeps them. Push + loyalty = repeat business on autopilot.',
    intro: [
      'Your website gets 1000 visitors but only 10 enquiries — the rest vanish forever. A brand app converts one-time visitors into subscribers: “Install our app, get 10% off” + festival pushes + referral rewards. Next sale needs zero ad spend.',
      'I convert websites to branded apps (same backend, shared login) with icon on home screen, push offers, loyalty points and Google review booster — from one codebase for iOS + Android.',
    ],
    forWho: ['Websites with traffic but low sales', 'Salons, clinics & gyms', 'Real estate & builders', 'Restaurants & cloud kitchens', 'Any brand tired of ad costs'],
    benefits: [
      { title: 'Own your audience', text: 'Push reaches 90% phones. Email reaches 15%. Stop renting reach from Google/Meta.' },
      { title: 'Loyalty that works', text: 'Points, birthdays, VIP tiers — customers chase rewards, not discounts.' },
      { title: 'Referrals on autopilot', text: '“Invite friend, both get Rs.100” — your users become salesmen.' },
      { title: 'Reviews rocket', text: 'Happy-tap prompts 5-star Play Store + Google reviews after every order.' },
      { title: 'Website + app sync', text: 'Same products, same login, same offers. Manage once, sell everywhere.' },
      { title: 'Festival jackpots', text: 'Diwali/Pongal campaigns in one tap — last-year buyers return first.' },
    ],
    features: ['Website-to-app login sync', 'Push + WhatsApp campaigns', 'Loyalty, wallet & referrals', 'Review & rating booster', 'Offers, coupons & gift cards', 'Analytics: who opened, bought, left'],
    faqs: [
      { q: 'I have WordPress/WooCommerce. Can you connect?', a: 'Yes — app syncs products, orders and users via API. Manage in WordPress itself.' },
      { q: 'Loyalty points?', a: 'Yes — earn/burn rules, birthday bonus, VIP slabs, wallet + referral credits.' },
      { q: 'Cost vs running ads?', a: 'One-time build, lifetime free reach. Most brands recover cost in 2-3 festival campaigns.' },
      { q: 'Play Store name?', a: 'Your brand name, your logo, your screenshots — full ASO with your keywords.' },
    ],
  },
  {
    slug: 'astrology-consultation-app-development',
    icon: 'fas fa-star-and-crescent',
    label: 'Astrology & Consultation Apps',
    metaTitle: 'Astrology App Development India | Chat, Voice & Video Consultation Platform — Gopi M',
    metaDescription:
      'Astrology app developer India: own AstroTalk-style consultation platform with chat, voice & video calls, per-minute wallet billing, Kundli, Panchang & payments. For astrologers, tarot, vastu & advisors. Chennai, India.',
    keywords: 'astrology app development india, astrotalk like app, astrologer consultation app, kundli app developer, tarot app development, chat voice video consultation app chennai',
    h1: 'Astrologers: Stop Giving 40% to Platforms — Launch Your Own Chat, Voice & Video Consultation App',
    tagline: 'Your own AstroTalk: clients chat, call & video — wallet deducts per minute, money settles to you.',
    intro: [
      'You give readings on AstroTalk, AstroYogi or phone — but they take 30-40% commission and OWN your clients. Your own branded consultation app flips that: clients recharge wallet, chat/voice/video with you, and you keep full earnings + client list for festival offers.',
      'Shipped proof, not promises: AstroVed consumer app (live chat/voice/video + payments, high traffic daily), AstroVedSpeaks advisor marketplace (per-minute wallet billing, TeleCMI/Exotel), QuantumGPT AI guidance platform, Instant Pooja live priests on ZegoCloud video. I build YOUR platform the same way — iOS + Android from one codebase.',
    ],
    forWho: ['Vedic astrologers & jyotishis', 'Tarot, numerology & palmistry readers', 'Vastu & horoscope consultants', 'Pooja priests & spiritual advisors', 'Counsellors, coaches & telehealth advisors'],
    benefits: [
      { title: 'Keep 100% earnings', text: 'No platform cut. Wallet recharge comes to YOUR account. One festival season recovers build cost.' },
      { title: 'Chat + voice + video', text: 'Client picks: text chat, voice call or HD video — same wallet, same history, one app.' },
      { title: 'Per-minute billing', text: 'Balance holds, deducts live per second, auto-cut on low balance. No unpaid overtime ever.' },
      { title: 'Free Kundli hook', text: 'Free birth-chart + Panchang + daily Rashifal pulls thousands of installs — then converts to paid consults.' },
      { title: 'Festival jackpots', text: 'Push “Shani Peyarchi special — 20% off today” to last-year clients. Fill slots without ads.' },
      { title: 'Your brand on store', text: 'Your name, your logo, your reviews — clients search YOU, not the aggregator.' },
    ],
    features: ['Chat, voice & HD video consults', 'Wallet + per-minute billing + UPI', 'Free Kundli, Panchang & Rashifal', 'Advisor listing, ratings & availability', 'Slot booking + reminders + call history', 'Offers, referrals & admin commission panel'],
    faqs: [
      { q: 'I am a single astrologer, not a company. Is this for me?', a: 'Yes — start with single-advisor app (you only), add more astrologers later with commission split when you grow into a marketplace.' },
      { q: 'How does per-minute payment work?', a: 'Client recharges wallet via UPI, amount is held at call start, deducted live per second, balance auto-refunds. Razorpay + full reports.' },
      { q: 'Free Kundli possible?', a: 'Yes — birth-chart, Panchang, Sade Sati/Dasha + daily predictions. Proven in Planets360 & QuantumGPT builds.' },
      { q: 'I already take calls on phone/Zoom. Why an app?', a: 'Phone gives no billing, no client list, no festival re-targeting. App = paid-per-minute + lifetime customer data + brand.' },
    ],
  },
  {
    slug: 'expo-exhibition-showcase-webinar-app-development',
    icon: 'fas fa-users',
    label: 'Exhibition, Showcase & Webinar Apps',
    metaTitle: 'Exhibition, Expo & Webinar App Development India | Product Showcase, Stalls, Live Events — Gopi M',
    metaDescription:
      'Exhibition & webinar app developer India: Excon-style product showcase, stall directory, visitor passes, live webinars, B2B lead scanner & chat. For expos, trade fairs, colleges & brands.',
    keywords: 'exhibition app development india, expo app developer, excon app, trade fair app, product showcase app, webinar app development chennai, event app',
    h1: 'Running an Exhibition, Expo or Webinar? Give Every Visitor Your Event in Their Pocket',
    tagline: 'Stalls, products, passes, live stage & leads — one app for organizers, exhibitors & visitors.',
    intro: [
      'Paper brochures get thrown away. Crowds miss stalls. Webinars lose half the audience to link chaos. A branded expo/event app fixes all three: visitors see stall map + products, scan QR at gates, join live stage, and exhibitors collect leads that actually convert after the event.',
      'I build it from the same backend: visitor app (iOS + Android) + exhibitor lead app + organizer dashboard + live streaming (Zego/WebRTC) + QR entry — proven with live video, QR ticket scanning and offline sync from ticketing & consultation apps.',
    ],
    forWho: ['Trade expos & Excon-style fairs: machinery, construction, textile', 'Colleges: symposiums, job fairs, culturals', 'Brands: product launches & dealer meets', 'Coaches: paid webinars & workshops', 'Malls & associations: shopping festivals'],
    benefits: [
      { title: 'Visitors find stalls', text: 'Searchable exhibitor directory, hall map, product catalogue with photos — no one misses you.' },
      { title: 'Zero gate queues', text: 'QR passes + offline scanner. Fake passes blocked, entry counted live.' },
      { title: 'Exhibitors get leads', text: 'Badge-scan app saves visitor contact + interest tag. Excel export same evening.' },
      { title: 'Hybrid stage built-in', text: 'Live keynotes + stall demo streams with chat, polls, replay — village 4G friendly.' },
      { title: 'Sponsors love it', text: 'Banner slots, push blasts, product spotlight, footfall report = higher stall price next year.' },
      { title: 'Next-year list free', text: 'Every visitor stays in YOUR database for next edition invites. No ad spend.' },
    ],
    features: ['Exhibitor + product showcase directory', 'QR passes + offline gate scanner', 'Hall map, agenda & speaker profiles', 'Live streaming stage + chat/polls', 'Lead scanner + B2B chat + meetings', 'Sponsor banners + analytics dashboard'],
    faqs: [
      { q: 'We already have a website/flex. Why an app?', a: 'Flex is seen once. App sends “Hall B demo starts in 10 min” pushes, collects leads and works as next-year invite list.' },
      { q: 'Can exhibitors collect visitor contacts?', a: 'Yes — badge QR scan saves name, phone, interest + notes, exports to Excel/CRM the same day.' },
      { q: 'Live + physical hybrid?', a: 'Yes. Stage streams live with chat + recording; online visitors browse stalls and chat with exhibitors.' },
      { q: 'How fast for our event date?', a: 'Standard expo app in 3-5 weeks including QR, directory + streaming. Share your event date for exact plan.' },
    ],
  },
  {
    slug: 'app-update-republish-migration-modernization',
    icon: 'fas fa-wrench',
    label: 'App Update, Republish & Migration',
    metaTitle: 'Existing App Update, Republish & Migration Service India | Add Features, Fix Store Issues — Gopi M',
    metaDescription:
      'Already have an app? Update store listing, refresh content, republish after rejection, migrate old code to React Native/Expo, add or remove features. Rescue buggy, outdated or suspended apps. Chennai, India.',
    keywords: 'app update service india, app republish service, play store rejection fix, app migration react native, add features to existing app, app modernization chennai, ios app update',
    h1: 'Already Have an App? I Update, Republish, Migrate & Add Features — Without Breaking It',
    tagline: 'Rejected by Play Store? Old code? Need new features? Hand it over, get back a fresh release.',
    intro: [
      'Most app owners are stuck: developer disappeared, Play Store rejected the update, content/prices are outdated, or the old code (Eclipse, Cordova, old React Native) cannot build anymore. You do NOT need to rebuild from zero — 70% of apps can be rescued.',
      'I take over messy handovers weekly: audit the code, fix store policy violations (target API, permissions, privacy), update content/screenshots, add or remove features, and migrate legacy code to modern React Native + Expo + TypeScript — then republish to Play Store + App Store with ASO.',
    ],
    forWho: ['Apps rejected/suspended by Play Store or App Store', 'Old apps that no longer build or open', 'Businesses needing price/content/feature changes fast', 'Anyone whose developer left mid-project', 'Teams migrating Cordova/Ionic/old RN to Expo'],
    benefits: [
      { title: 'Republish after rejection', text: 'Fix target-SDK, permissions, privacy policy, billing violations — resubmit correctly the first time.' },
      { title: 'Content refresh in days', text: 'New products, prices, banners, festival screens, push setup — no full rebuild needed.' },
      { title: 'Add / remove features', text: 'Add UPI, wallet, video, tracking — or strip heavy features slowing the app. Clean, tested releases.' },
      { title: 'Legacy migration', text: 'Cordova, Ionic, old React Native, Eclipse → modern Expo + TypeScript. Faster, crash-free, OTA-ready.' },
      { title: 'Crash & ANR cleanup', text: 'Play Console vitals fixed: crashes, frozen frames, battery drain — with root-cause report.' },
      { title: 'ASO + screenshots redo', text: 'New keywords, Tamil/English screenshots, preview video — rank higher after republish.' },
    ],
    features: ['Full audit: code, store policy & crash report', 'Target API + permission + privacy fixes', 'Content, price & banner updates', 'Feature add/remove + payment integration', 'Migration to Expo + TypeScript + OTA', 'Republish + ASO + 30-day support'],
    faqs: [
      { q: 'My developer vanished. Can you take over?', a: 'Yes — share Play Console access + source (or even just the APK/AAB). I reverse-map, rebuild cleanly and hand you full control.' },
      { q: 'Play Store rejected my update. Can you fix?', a: 'Most common: target API level, foreground permissions, billing policy, privacy disclosure. I fix + resubmit with appeal notes if needed.' },
      { q: 'Only small changes — new prices and banners?', a: 'Perfect — minor-update pack: content + screenshots + push, released in days at fixed mini-price.' },
      { q: 'Migrate without losing users/data?', a: 'Yes. Same package ID + keystore, backend preserved, staged rollout — users auto-update, data intact.' },
    ],
  },
];
