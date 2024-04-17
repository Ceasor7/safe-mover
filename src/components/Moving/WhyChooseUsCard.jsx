const WhyChooseUsCard = ({ icon, title, description }) => {
  return (
    <div
      className="block rounded-xl border-2 p-8 shadow-xl transition hover:border-[#00008b]/10 hover:shadow-[#00008b]/10"
      href="#"
    >
      <img src={icon} alt={title} className="h-16 w-16" />

      <h2 className="mt-4 text-xl font-bold">{title}</h2>

      <p className="mt-1 text-sm">{description}</p>
    </div>
  );
};

export default WhyChooseUsCard;
