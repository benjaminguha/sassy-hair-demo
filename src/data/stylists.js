// src/data/stylistsData.js
import female7 from "../images/keune/female7.jpg"

const stylists = [
  {
    name: 'Caroline',
    role: 'Independent Stylist',
    location: 'The Sassy Collective Weston',
    img: female7,
    blurb: 'Known for her eye for detail and ability to translate vision into reality, Caroline specialises in creating new looks and tailored refreshes. Every appointment is a personalised experience, built on connection, expertise, and a love for modern, wearable hair.',
    type: 'contractor'
  },
  {
    name: 'Cindy',
    role: 'Senior Stylist',
    location: 'Sassy Hair Pearce',
    img: female7,
    blurb: 'Cindy is in her 30th year of hairdressing. Her favourite part of hairdressing is when a client wants a total restyle, but she also enjoys colouring, foiling and learning new techniques. Nothing makes her feel more accomplished than when her client leaves with confidence and a smile on their face.',
    type: 'employed'
  },
  {
    name: 'Daniel',
    role: 'Senior Stylist',
    location: 'Sassy Hair Pearce',
    img: female7,
    blurb: 'A precise and technical stylist who loves to create architecturally designed haircuts aimed at enhancing the beauty of each client. Daniel aspires to take his clients to the next level.',
    type: 'employed'
  },
  {
    name: 'Sadie',
    role: 'Academy Stylist',
    location: 'Sassy Hair Pearce',
    img: female7,
    blurb: 'With over 5 years of hands-on experience, Sadie began her hairdressing journey in high school and quickly turned the passion into a thriving career. Known for her friendly approach, attention to detail, and ability to bring each client’s vision to life, she offers a personalised experience that keeps clients coming back.',
    type: 'employed'
  },
  {
    name: 'Shanae',
    role: 'Junior Academy Stylist',
    location: 'Sassy Hair Pearce',
    img: female7,
    blurb: 'Shanae is an aspiring hairdresser motivated by her creative spirit and passion for art. She is eager to channel her love for hair into making people look and feel their best.',
    type: 'employed'
  },
  {
    name: 'Shari',
    role: 'Independent Stylist',
    location: 'The Sassy Collective Weston',
    img: female7,
    blurb: 'Shari specialises in precision cuts and personalised colour for men and women, with a passion for grey blending, soft blondes, and custom curly techniques.',
    type: 'contractor'
  },
  {
    name: 'Zoe',
    role: 'Senior Stylist',
    location: 'Sassy Hair Pearce',
    img: female7,
    blurb: 'At Sassy, every detail counts. Led by Zoe, whose eye for detail and passion for hair shine through in every cut, colour and style. From flawless finishes to personalised service, you’re in expert hands.',
    type: 'employed'
  },
];

// Sort by type, then alphabetically by name
const typeOrder = { employed: 0, contractor: 1 };
const sortedStylists = [...stylists].sort((a, b) => {
  const typeComparison = (typeOrder[a.type] ?? 99) - (typeOrder[b.type] ?? 99);
  if (typeComparison !== 0) return typeComparison;
  return a.name.localeCompare(b.name);
});

export default sortedStylists;
