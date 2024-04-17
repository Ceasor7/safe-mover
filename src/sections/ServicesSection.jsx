import LandingPageServicesDescription from '@/components/Services/LandingPageServicesDescription';
import LandingPageServicesSection from '@/components/Services/LandingPageServicesSection';

const LandingPageServicesCards = [
  {
    image: '/house-window.svg',
    title: 'Residential House Movers',
    description:
      'Our mission is to alleviate the stress and hassle of relocating by providing comprehensive and reliable residential house moving services across Kenya.',
  },
  {
    image: '/international-departures.svg',
    title: 'International Movers',
    description:
      'With expertise in facilitating moves from Kenya to various corners of the world, we offer a comprehensive suite of services tailored to meet your specific needs.',
  },
  {
    image: '/office.svg',
    title: 'Corporate/Office Movers',
    description:
      'Our specialized expertise in corporate moves ensures a hassle-free experience, allowing you to focus on your operations while we take care of the logistics.',
  },
  {
    image: '/warehouse.svg',
    title: 'Storage Services',
    description:
      'Our commitment lies in providing top-tier storage services that cater to your needs, ensuring the security and preservation of your belongings in a dynamic urban setting.',
  },
];

const LandingPageServicesDescriptionCards = [
  {
    title: 'Our Services',
    description:
      'Discover the SafeMovers Academy, where movers are trained using a comprehensive curriculum. Our movers are certified with over 70 skills, delivering true value to clients while upholding the moving industry’s name. The academy serves as our knowledge hub, providing continuous training for all employees. At SafeMovers, everyone is a mover, and going through the academy is a way of life, creating empowered individuals even beyond the moving industry.',
    link: 'View More Services',
  },
];

const ServicesSection = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            {LandingPageServicesDescriptionCards.map(
              (LandingPageServicesDescriptionCard, index) => (
                <LandingPageServicesDescription
                  key={index}
                  {...LandingPageServicesDescriptionCard}
                />
              )
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            {LandingPageServicesCards.map((LandingPageServicesCard, index) => (
              <LandingPageServicesSection
                key={index}
                {...LandingPageServicesCard}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
