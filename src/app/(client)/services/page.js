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
    title: 'International Mover',
    description:
      'Are you planning a relocation from Kenya to destinations around the globe? Safe Movers is your trusted partner for seamless and secure international moves. With expertise in facilitating moves from Kenya to various corners of the world, we offer a comprehensive suite of services tailored to meet your specific needs.',
    linkUrl: '/international-movers',
    link: 'Learn More',
  },
  {
    image: '/modern-office-design.webp',
    title: ' Corporate and Office Movers',
    description:
      'Welcome to Safe Movers, your trusted partner for seamless and efficient corporate and office relocations in Kenya. As a premier moving services provider in Nairobi, we understand the critical importance of a smooth transition when relocating a business.',
    linkUrl: '/coorporate-movers',
    link: 'Learn More',
  },
  {
    image: '/shipping.jpg',
    title: 'Top Cross-Border Movers',
    description:
      'Welcome to Safe Movers, your trusted partner for seamless cross-border relocations across East and Southern Africa. Our commitment lies in ensuring stress-free and efficient moves for households, businesses, and valuable assets to and from Uganda, Tanzania, Rwanda, Zambia, Zimbabwe, and Malawi.',
    linkUrl: '/cross-border-moving',
    link: 'Learn More',
  },
  {
    image: '/storage.jpg',
    title: 'Storage Services',
    description:
      'At Safe Movers, we understand the value of safe, reliable, and accessible storage solutions in Nairobi. Our commitment lies in providing top-tier storage services that cater to your needs, ensuring the security and preservation of your belongings in a dynamic urban setting.',
    linkUrl: '/storage',
    link: 'Learn More',
  },
  {
    image: '/machinery-movers.jpg',
    title: 'Machinery Movers',
    description:
      'Safe Movers is the premier choice for Machinery Relocation Services in Kenya. With our headquarters in Nairobi, we specialize in seamlessly relocating various types of machinery across the country. Our expertise extends to handling delicate, heavy, and complex machinery, ensuring a secure and efficient relocation process.',
    linkUrl: '/machinery-moving',
    link: 'Learn More',
  },
  {
    image: '/furniture-banner.webp',
    title: 'Furniture Installation & Assembly Services',
    description:
      'At Safe Movers, we understand that moving to a new residence can be a complex and daunting task. Our mission is to alleviate the stress and hassle of relocating by providing comprehensive and reliable residential house moving services across Kenya.',
    linkUrl: '/residential',
    link: 'Learn More',
  },
  {
    image: '/large-box-1.png',
    title: ' Packing & Moving Carton Boxes for Sale',
    description:
      'At Safe Movers, we provide high-quality, durable packing and moving carton boxes tailored to meet your relocation and storage needs in Kenya. Whether you’re moving homes, offices, or require secure storage solutions, our range of carton boxes ensures the safety and convenience of your belongings.',
    linkUrl: '/safe-movers-shop',
    link: 'Learn More',
  },
  {
    image: '/vehicle-shipping-oversea.jpg',
    title: 'Vehicle Relocation',
    description:
      'Safe Movers stands as a cornerstone in Nairobi’s moving services sector, offering an array of relocation solutions tailored to meet diverse client needs. Among our specialized services, our Car Moving division takes center stage, ensuring secure, efficient, and reliable transportation for vehicles to different parts.',
    linkUrl: '/auto-relocation-service',
    link: 'Learn More',
  },
  {
    image: '/destination-services.jpeg',
    title: ' Destination Services',
    description:
      'At Safe Movers, our commitment goes beyond merely transporting your belongings. We pride ourselves on offering comprehensive Destination Services in Kenya, understanding the intricacies of the country and its unique challenges',
    linkUrl: '/destination-services-in-kenya',
    link: 'Learn More',
  },
  {
    image: '/fine-art-moving.jpg',
    title: ' Fine Art Movers',
    description:
      'Welcome to Safe Movers, your trusted partner in the safe relocation of fine art pieces across Nairobi and Kenya. At Safe Movers, we understand the significance of preserving the integrity and value of fine art during the moving process.',
    linkUrl: '/fine-art-moving',
    link: 'Learn More',
  },
];

const ServicesDashboard = () => {
  return (
    <div>
      <div className="relative bg-fixed bg-parallax bg-cover py-36">
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="absolute sm:ml-44 mt-7 inset-0 flex flex-col">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Seamless Moves, Near or Far:
            <strong className="block font-extrabold text-[#CC5500]">
              {' '}
              Kenya's Trusted Choice!{' '}
            </strong>
          </h1>
        </div>
      </div>
      <p className="my-5  mx-auto max-w-5xl font-bold text-xl">
        Our Pocket Friendly Prices
      </p>
      <h1 className="mt-5  mx-auto max-w-5xl font-bold text-4xl text-[#00008B]">
        Get Moving Today
      </h1>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10  mx-auto max-w-5xl my-3">
          {servicesCards.map((servicesCard, index) => (
            <ServicesCard key={index} {...servicesCard} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesDashboard;
