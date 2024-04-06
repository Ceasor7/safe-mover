import LandingSection from '@/components/Hero/LandingSection';
import ServicesCard from '@/components/Services/ServicesCard';

const servicesCards = [
  {
    image: '/residential-house.webp',
    title: 'Residential House Movers',
    description:
      'At Safe Movers, we understand that moving to a new residence can be a complex and daunting task. Our mission is to alleviate the stress and hassle of relocating by providing comprehensive and reliable residential house moving services across Kenya.',
    linkUrl: '/residential',
    link: 'Learn More',
  },
  {
    image: '/international-movers.jpg',
    title: 'International Mover in Kenya',
    description:
      'Are you planning a relocation from Kenya to destinations around the globe? Safe Movers is your trusted partner for seamless and secure international moves. With expertise in facilitating moves from Kenya to various corners of the world, we offer a comprehensive suite of services tailored to meet your specific needs.',
    linkUrl: '/international-movers',
    link: 'Learn More',
  },
  {
    image: '/modern-office-design.webp',
    title: ' Corporate and Office Movers in Kenya',
    description:
      'Welcome to Safe Movers, your trusted partner for seamless and efficient corporate and office relocations in Kenya. As a premier moving services provider in Nairobi, we understand the critical importance of a smooth transition when relocating a business.',
    linkUrl: '/coorporate-movers',
    link: 'Learn More',
  },
  {
    image: '/shipping.jpg',
    title: 'Top Cross-Border Movers in East Africa',
    description:
      'Welcome to Safe Movers, your trusted partner for seamless cross-border relocations across East and Southern Africa. Our commitment lies in ensuring stress-free and efficient moves for households, businesses, and valuable assets to and from Uganda, Tanzania, Rwanda, Zambia, Zimbabwe, and Malawi.',
    linkUrl: '/cross-border-moving',
    link: 'Learn More',
  },
  {
    image: '/storage.jpg',
    title: 'Storage Services in Kenya',
    description:
      'At Safe Movers, we understand the value of safe, reliable, and accessible storage solutions in Nairobi. Our commitment lies in providing top-tier storage services that cater to your needs, ensuring the security and preservation of your belongings in a dynamic urban setting.',
    linkUrl: '/storage',
    link: 'Learn More',
  },
  {
    image: '/machinery-movers.jpg',
    title: 'Machinery Movers in Kenya',
    description:
      'Safe Movers is the premier choice for Machinery Relocation Services in Kenya. With our headquarters in Nairobi, we specialize in seamlessly relocating various types of machinery across the country. Our expertise extends to handling delicate, heavy, and complex machinery, ensuring a secure and efficient relocation process.',
    linkUrl: '/machinery-moving',
    link: 'Learn More',
  },
  {
    image: '/furniture-banner.webp',
    title: 'Furniture Installation & Assembly Services in Kenya',
    description:
      'At Safe Movers, we understand that moving to a new residence can be a complex and daunting task. Our mission is to alleviate the stress and hassle of relocating by providing comprehensive and reliable residential house moving services across Kenya.',
    linkUrl: '/residential',
    link: 'Learn More',
  },
  {
    image: '/large-box-1.png',
    title: ' Packing & Moving Carton Boxes for Sale in Kenya',
    description:
      'At Safe Movers, we provide high-quality, durable packing and moving carton boxes tailored to meet your relocation and storage needs in Kenya. Whether you’re moving homes, offices, or require secure storage solutions, our range of carton boxes ensures the safety and convenience of your belongings.',
    linkUrl: '/safe-movers-shop',
    link: 'Learn More',
  },
  {
    image: '/vehicle-shipping-oversea.jpg',
    title: 'Vehicle Relocation in Kenya',
    description:
      'Safe Movers stands as a cornerstone in Nairobi’s moving services sector, offering an array of relocation solutions tailored to meet diverse client needs. Among our specialized services, our Car Moving division takes center stage, ensuring secure, efficient, and reliable transportation for vehicles to different parts.',
    linkUrl: '/auto-relocation-service',
    link: 'Learn More',
  },
  {
    image: '/destination-services.jpeg',
    title: ' Destination Services in Kenya',
    description:
      'At Safe Movers, our commitment goes beyond merely transporting your belongings. We pride ourselves on offering comprehensive Destination Services in Kenya, understanding the intricacies of the country and its unique challenges',
    linkUrl: '/destination-services-in-kenya',
    link: 'Learn More',
  },
  {
    image: '/fine-art-moving.jpg',
    title: ' Fine Art Movers in Kenya',
    description:
      'Welcome to Safe Movers, your trusted partner in the safe relocation of fine art pieces across Nairobi and Kenya. At Safe Movers, we understand the significance of preserving the integrity and value of fine art during the moving process.',
    linkUrl: '/fine-art-moving',
    link: 'Learn More',
  },
];

const ServicesDashboard = () => {
  return (
    <div>
      <section>
        <LandingSection />
      </section>
      <p className="my-5 mx-5 sm:mx-24 font-bold text-xl">
        Our Pocket Friendly Prices
      </p>
      <h1 className="mt-5 mx-5 sm:mx-24 font-bold text-4xl text-[#00008B]">
        Get Moving Today
      </h1>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10 mx-5 my-3 sm:mx-24">
          {servicesCards.map((servicesCard, index) => (
            <ServicesCard key={index} {...servicesCard} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesDashboard;
