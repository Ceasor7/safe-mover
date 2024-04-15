const OurTeamCard = ({ image, name, title }) => {
  return (
    <div>
      <div className="flex justify-center">
        <img className=" h-64 w-64" src={image} alt="Safe Movers Team" />
      </div>
      <p className="text-center bg-[#00008B] text-white">{name}</p>
      <p className="text-center bg-[#00008B] text-white">{title}</p>
    </div>
  );
};

export default OurTeamCard;
