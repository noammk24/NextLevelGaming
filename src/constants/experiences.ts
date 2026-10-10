export type GamingExperience = {
  id: string;
  title: string;
  price: string;
  priceAmount: number;
  description: string;
  imageUrl: string;
  imageLabel: string;
};

const image = (photo: string) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1000&q=80`;

export const GAMING_PACKAGES: GamingExperience[] = [
  {
    id: 'ultimate',
    title: 'Ultimate Gamer Pass',
    price: 'R1,500',
    priceAmount: 1500,
    description: 'A full gaming package for players ready to explore the arena.',
    imageUrl: image('photo-1593305841991-05c297ba4575'),
    imageLabel: 'Gaming PC setup with colourful lights',
  },
  {
    id: 'vip',
    title: 'VIP Gaming Experience',
    price: 'R1,500',
    priceAmount: 1500,
    description: 'Make your next gaming session feel like a special occasion.',
    imageUrl: image('photo-1542751371-adc38448a05e'),
    imageLabel: 'Esports player competing at a gaming event',
  },
  {
    id: 'esports',
    title: 'Esports Training Package',
    price: 'R1,500',
    priceAmount: 1500,
    description: 'Focus on competitive play and build your esports skills.',
    imageUrl: image('photo-1547394765-185e1e68f34e'),
    imageLabel: 'Competitive gaming arena with player stations',
  },
  {
    id: 'birthday',
    title: 'Birthday Party Package',
    price: 'R1,500',
    priceAmount: 1500,
    description: 'Celebrate a birthday with a group gaming experience.',
    imageUrl: image('photo-1511512578047-dfb367046420'),
    imageLabel: 'Colourful gaming controllers ready for a group session',
  },
];

export const INDIVIDUAL_EXPERIENCES: GamingExperience[] = [
  {
    id: 'vr',
    title: 'Virtual Reality Experience',
    price: 'R750',
    priceAmount: 750,
    description: 'Step into an immersive virtual reality gaming experience.',
    imageUrl: image('photo-1593508512255-86ab42a8e620'),
    imageLabel: 'Virtual reality headset for an immersive experience',
  },
  {
    id: 'racing',
    title: 'Racing Simulator Challenge',
    price: 'R750',
    priceAmount: 750,
    description: 'Take on a racing challenge in a driving simulator.',
    imageUrl: image('photo-1511882150382-421056c89033'),
    imageLabel: 'Racing game setup with steering wheel and screen',
  },
  {
    id: 'escape',
    title: 'Escape Room Challenge',
    price: 'R750',
    priceAmount: 750,
    description: 'Put your problem-solving skills to the test in an escape challenge.',
    imageUrl: image('photo-1516321318423-f06f85e504b3'),
    imageLabel: 'Players working together at a challenge',
  },
];
