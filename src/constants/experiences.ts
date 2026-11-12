export type GamingExperience = {
  id: string;
  type: 'package' | 'experience';
  categoryLabel: string;
  title: string;
  price: string;
  priceAmount: number;
  description: string;
  imageUrl: string;
  imageLabel: string;
  suitableFor: string;
};

const image = (photo: string) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1000&q=80`;

export const GAMING_PACKAGES: GamingExperience[] = [
  {
    id: 'ultimate',
    type: 'package',
    categoryLabel: 'Gaming package',
    title: 'Ultimate Gamer Pass',
    price: 'R1,500',
    priceAmount: 1500,
    description: 'A full gaming package for players ready to explore the arena.',
    imageUrl: image('photo-1593305841991-05c297ba4575'),
    imageLabel: 'Gaming PC setup with colourful lights',
    suitableFor: 'Players ready to explore the arena.',
  },
  {
    id: 'vip',
    type: 'package',
    categoryLabel: 'Gaming package',
    title: 'VIP Gaming Experience',
    price: 'R1,500',
    priceAmount: 1500,
    description: 'Make your next gaming session feel like a special occasion.',
    imageUrl: image('photo-1542751371-adc38448a05e'),
    imageLabel: 'Esports player competing at a gaming event',
    suitableFor: 'Players planning a special gaming session.',
  },
  {
    id: 'esports',
    type: 'package',
    categoryLabel: 'Gaming package',
    title: 'Esports Training Package',
    price: 'R1,500',
    priceAmount: 1500,
    description: 'Focus on competitive play and build your esports skills.',
    imageUrl: image('photo-1547394765-185e1e68f34e'),
    imageLabel: 'Competitive gaming arena with player stations',
    suitableFor: 'Players interested in competitive gaming.',
  },
  {
    id: 'birthday',
    type: 'package',
    categoryLabel: 'Gaming package',
    title: 'Birthday Party Package',
    price: 'R1,500',
    priceAmount: 1500,
    description: 'Celebrate a birthday with a group gaming experience.',
    imageUrl: image('photo-1511512578047-dfb367046420'),
    imageLabel: 'Colourful gaming controllers ready for a group session',
    suitableFor: 'Birthday celebrations and group gaming.',
  },
];

export const INDIVIDUAL_EXPERIENCES: GamingExperience[] = [
  {
    id: 'vr',
    type: 'experience',
    categoryLabel: 'Individual experience',
    title: 'Virtual Reality Experience',
    price: 'R750',
    priceAmount: 750,
    description: 'Step into an immersive virtual reality gaming experience.',
    imageUrl: image('photo-1593508512255-86ab42a8e620'),
    imageLabel: 'Virtual reality headset for an immersive experience',
    suitableFor: 'Players interested in virtual reality gaming.',
  },
  {
    id: 'racing',
    type: 'experience',
    categoryLabel: 'Individual experience',
    title: 'Racing Simulator Challenge',
    price: 'R750',
    priceAmount: 750,
    description: 'Take on a racing challenge in a driving simulator.',
    imageUrl: image('photo-1511882150382-421056c89033'),
    imageLabel: 'Racing game setup with steering wheel and screen',
    suitableFor: 'Players interested in racing simulations.',
  },
  {
    id: 'escape',
    type: 'experience',
    categoryLabel: 'Individual experience',
    title: 'Escape Room Challenge',
    price: 'R750',
    priceAmount: 750,
    description: 'Put your problem-solving skills to the test in an escape challenge.',
    imageUrl: image('photo-1516321318423-f06f85e504b3'),
    imageLabel: 'Players working together at a challenge',
    suitableFor: 'Players who enjoy problem-solving challenges.',
  },
];

export const SOLO_MEMBERSHIPS = [
  {
    id: 'casual-pass',
    type: 'membership',
    title: 'Casual Pass',
    price: 'R150 / 3 hours',
    priceAmount: 150,
    billingPeriod: '3 hours',
  },
  {
    id: 'elite-member',
    type: 'membership',
    title: 'Elite Member',
    price: 'R1,200 / month',
    priceAmount: 1200,
    billingPeriod: 'month',
  },
  {
    id: 'pro-academy',
    type: 'membership',
    title: 'Pro Academy',
    price: 'R3,500 / month',
    priceAmount: 3500,
    billingPeriod: 'month',
  },
] as const;

export type SoloMembership = (typeof SOLO_MEMBERSHIPS)[number];

export const BOOKABLE_ITEMS = [...GAMING_PACKAGES, ...INDIVIDUAL_EXPERIENCES];
