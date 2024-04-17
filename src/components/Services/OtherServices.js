import Link from 'next/link';

const OtherServices = () => {
  return (
    <div className="flex-col hidden sm:inline-flex justify-center ">
      <p className="text-center font-bold text-2xl">Other Services</p>
      <div className="p-4 text-center shadow-xl bg-gray-100 mt-6">
        <div className="py-3">
          <Link href="/residential" className="hover:text-[#00008B]">
            Residential House Movers
          </Link>
        </div>
        <hr className="mx-8" />
        <div className="py-3">
          <Link href="/international-movers" className="hover:text-[#00008B]">
            International Movers
          </Link>
        </div>
        <hr className="mx-8" />
        <div className="py-3">
          <Link href="/coorporate-movers" className="hover:text-[#00008B]">
            Corporate and Office Moving Services
          </Link>
        </div>
        <hr className="mx-8" />
        <div className="py-3">
          <Link href="/cross-border-moving" className="hover:text-[#00008B]">
            Top Cross-Border Movers
          </Link>
        </div>
        <hr className="mx-8" />
        <div className="py-3">
          <Link href="/storage" className="hover:text-[#00008B]">
            Storage Facilities
          </Link>
        </div>
        <hr className="mx-8" />
        <div className="py-3">
          <Link href="/machinery-moving" className="hover:text-[#00008B]">
            Machinery Movers
          </Link>
        </div>
        <hr className="mx-8" />
        <div className="py-3">
          <Link href="/residential" className="hover:text-[#00008B]">
            Furniture Installation & Assembly Services
          </Link>
        </div>
        <hr className=" mx-8" />
        <div className="py-3">
          <Link href="safe-movers-shop" className="hover:text-[#00008B]">
            Packing & Moving Carton Boxes for Sale
          </Link>
        </div>
        <hr className=" mx-8" />
        <div className="py-3">
          <Link href="auto-relocation-service" className="hover:text-[#00008B]">
            Vehicle Relocation
          </Link>
        </div>
        <hr className=" mx-8" />
        <div className="py-3">
          <Link
            href="destination-services-in-kenya"
            className="hover:text-[#00008B]"
          >
            Destination Services
          </Link>
        </div>
        <hr className=" mx-8" />
        <div className="py-3">
          <Link href="/fine-art-moving" className="hover:text-[#00008B]">
            Fine Art Movers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
