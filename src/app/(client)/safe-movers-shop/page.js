import ShopSection from '@/sections/ShopSection';
import Link from 'next/link';

const SafeMoversShop = () => {
  return (
    <div className=" my-5  mx-auto max-w-5xl items-center">
      <h1 className="text-4xl text-gray-400 font-bold mb-3">
        The SafeMovers Shop
      </h1>
      <p className="mb-4">
        At Safe Movers, we provide high-quality, durable packing and moving
        carton boxes tailored to meet your relocation and storage needs in
        Kenya. Whether you’re moving homes, offices, or require secure storage
        solutions, our range of carton boxes ensures the safety and convenience
        of your belongings.
      </p>
      <div>
        <ShopSection />
      </div>
      <div className="my-7">
        <h2 className="text-2xl my-3 font-bold text-[#00008B]">
          Our Packing and Moving Boxes
        </h2>
        <p>
          <span className="font-bold italic">Variety and Durability: </span> Our
          selection includes a range of sizes and strengths to accommodate
          various items. From small, fragile items to large, bulky possessions,
          our boxes are designed to withstand the rigors of transportation and
          storage.
        </p>
        <p>
          <span className="font-bold italic">Quality Assurance: </span>We
          prioritize quality, offering sturdy and eco-friendly carton boxes
          manufactured to the highest standards. Our boxes guarantee the safety
          of your belongings during transit or storage.
        </p>
      </div>
      <div className="my-7">
        <h2 className="text-2xl my-3 font-bold text-[#00008B]">
          Why Choose Safe Movers’ Packing and Moving Boxes?
        </h2>
        <p>
          <span className="font-bold italic">Sturdiness and Reliability: </span>{' '}
          Our carton boxes are built to endure handling, stacking, and
          transportation, ensuring your items remain intact and secure
          throughout the moving process.
        </p>
        <p>
          <span className="font-bold italic">Customized Solutions:</span>With
          different sizes available, we cater to diverse needs, allowing you to
          select boxes that perfectly fit your items, minimizing any excess
          space and optimizing packing efficiency.
        </p>
        <p>
          <span className="font-bold italic">Affordability: </span>We offer
          competitive prices without compromising on quality, providing
          cost-effective solutions for your packing and moving requirements.
        </p>
      </div>
      <div className="my-7">
        <h2 className="text-2xl my-3 font-bold text-[#00008B]">
          Ideal for Various Uses
        </h2>
        <p>
          <span className="font-bold italic">Residential Moves: </span> Safely
          pack your household items for a smooth transition to your new home.
        </p>
        <p>
          <span className="font-bold italic">Office Relocations: </span>{' '}
          Securely transport office equipment, files, and furniture with our
          reliable carton boxes.
        </p>
        <p>
          <span className="font-bold italic">Storage Solutions: </span> Organize
          and store items securely in our durable boxes, ensuring they remain in
          pristine condition during storage.{' '}
        </p>
      </div>
      <div className="my-7">
        <h2 className="text-2xl my-3 font-bold text-[#00008B]">
          How to Purchase
        </h2>
        <p>
          Visit our store or
          <Link href="/contact" className="text-[#00008B]">
            {' '}
            contact us
          </Link>
          directly to purchase our premium packing and moving carton boxes. Our
          team will assist you in selecting the right boxes based on your
          specific needs and quantities required.
        </p>
      </div>
      <div className="my-7">
        <h2 className="text-2xl my-3 font-bold text-[#00008B]">
          Let’s Get Packing!
        </h2>
        <p>
          Make your move stress-free and efficient with Safe Movers’ premium
          carton boxes. Get in touch with us today to acquire top-quality boxes
          designed to safeguard your belongings during relocation and storage.{' '}
        </p>
      </div>
    </div>
  );
};

export default SafeMoversShop;
