const ServicesCard = ({ image, title, description, link, linkUrl }) => {
  return (
    <div className="border border-[#00008B] rounded-md shadow-md flex flex-col justify-center bg-white text-center items-center">
      <img
        src={image}
        alt="Services image"
        className="w-32 h-32 rounded-full mt-6"
      />
      <h1 className="text-center py-4 font-bold text-xl">{title}</h1>
      <p className=" px-4 my-2">{description}</p>
      <a
        href={linkUrl}
        className="px-4 mt-2 mb-5 text-[#00008B] cursor-pointer font-semibold"
      >
        {link}
      </a>
    </div>
  );
};

export default ServicesCard;
