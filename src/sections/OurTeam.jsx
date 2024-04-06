import OurTeamCard from '@/components/Team/OurTeamCard';

const teamCards = [
  {
    image: '/avatar.svg',
    name: 'Cosmus Letich',
    title: 'Chief Executive officer',
  },
  {
    image: '/avatar.svg',
    name: 'Cosmus Letich',
    title: 'Chief Executive officer',
  },
  {
    image: '/avatar.svg',
    name: 'Cosmus Letich',
    title: 'Chief Executive officer',
  },
];

const OurTeam = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mx-5 sm:mx-24 gap-x-10 gap-y-7">
      {teamCards.map((teamCard, index) => (
        <OurTeamCard key={index} {...teamCard} />
      ))}
    </div>
  );
};

export default OurTeam;
