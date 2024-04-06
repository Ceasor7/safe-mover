import Link from 'next/link';

const OtherServices = () => {
  return (
    <div className="flex-col hidden sm:inline-flex justify-center ">
      <p className="text-center font-bold text-lg">Other Services</p>
      <div className="text-[#00008B] text-center shadow-xl bg-gray-50">
        <div className="py-3">
          <Link href="/residential">Residential House Movers in Kenya</Link>
        </div>
        <hr className=" border-gray-600 mx-8" />
        <div className="py-3">
          <Link href="/international-movers">
            International Movers in Kenya
          </Link>
        </div>
        <hr className=" border-gray-600 mx-8" />
        <div className="py-3">
          <Link href="/coorporate-movers">
            Corporate and Office Moving Services in Kenya
          </Link>
        </div>
        <hr className=" border-gray-600 mx-8" />
        <div className="py-3">
          <Link href="/cross-border-moving">
            Top Cross-Border Movers in East Africa
          </Link>
        </div>
        <hr className=" border-gray-600 mx-8" />
        <div className="py-3">
          <Link href="/storage">Storage Facilities in Kenya</Link>
        </div>
        <hr className=" border-gray-600 mx-8" />
        <div className="py-3">
          <Link href="/machinery-moving">Machinery Movers in Kenya</Link>
        </div>
        <hr className=" border-gray-600 mx-8" />
        <div className="py-3">
          <Link href="/residential">
            Furniture Installation & Assembly Services in Kenya
          </Link>
        </div>
        <hr className=" border-gray-600 mx-8" />
        <div className="py-3">
          <Link href="safe-movers-shop">
            Packing & Moving Carton Boxes for Sale in Kenya
          </Link>
        </div>
        <hr className=" border-gray-600 mx-8" />
        <div className="py-3">
          <Link href="auto-relocation-service">
            Vehicle Relocation in Kenya
          </Link>
        </div>
        <hr className=" border-gray-600 mx-8" />
        <div className="py-3">
          <Link href="destination-services-in-kenya">
            Destination Services in Kenya
          </Link>
        </div>
        <hr className=" border-gray-600 mx-8" />
        <div className="py-3">
          <Link href="/fine-art-moving">Fine Art Movers in Kenya</Link>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
