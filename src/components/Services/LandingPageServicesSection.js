const LandingPageServicesSection = ({ image, title, linkUrl, description }) => {
  return (
    <div>
      <a
        href={linkUrl}
        className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
      >
        <span className="inline-block rounded-lg bg-gray-50 p-3">
          <img src={image} alt={title} className="h-6 w-6" />
        </span>
        <h2 className="mt-2 font-bold">{title}</h2>
        <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          {description}
        </p>
      </a>
    </div>
  );
};

export default LandingPageServicesSection;
