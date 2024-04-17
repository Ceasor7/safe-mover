const LandingPageServicesDescription = ({ title, description, link }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      <p className="mt-4">{description}</p>
      <a
        href="/services"
        className="mt-8 inline-block rounded bg-[#00008b] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#CC5500] focus:outline-none focus:ring focus:ring-yellow-800"
      >
        {link}
      </a>
    </div>
  );
};

export default LandingPageServicesDescription;
