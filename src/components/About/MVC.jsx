import MVCCard from './MVCCard';

const cards = [
  {
    title: 'Our Mission',
    description:
      'At Safe Movers, our mission is to provide seamless moving solutions tailored to diverse needs, ensuring stress-free relocations with precision and care. We aim to be trusted partners, delivering unparalleled customer service built on integrity and respect.',
  },
  {
    title: 'Our Vision',
    description:
      'Our vision at Safe Movers is to be the premier choice in the moving industry, setting new standards of excellence through innovation and reliability. We strive to expand our reach while maintaining unwavering commitment to customer satisfaction and community engagement.',
  },
  {
    title: 'Our Core Values',
    description:
      'Safe Movers is guided by integrity, excellence, and customer satisfaction. We believe in teamwork, respect, and accountability, ensuring transparency and reliability in all our endeavors.',
  },
];

const MVC = () => {
  return (
    <div>
      <MVCCard cards={cards} />
    </div>
  );
};

export default MVC;
