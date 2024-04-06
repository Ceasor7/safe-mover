const OurTeamCard = ({ image, name, title }) => {
  return (
    <div>
      <img src={image} alt="Safe Movers Team" />
      <p className="text-center bg-[#00008B] text-white">{name}</p>
      <p className="text-center bg-[#00008B] text-white">{title}</p>
    </div>
  );
};

export default OurTeamCard;
