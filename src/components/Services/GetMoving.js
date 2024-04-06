import Link from 'next/link';

const GetMoving = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between mt-5 mx-5 sm:mx-24 mb-10">
      <p className="text-[#00008B]  my-5">
        Get Moving Services in Kenya and Beyond
      </p>
      <Link
        href="/services"
        className="bg-[#00008B] px-6 text-center justify-center flex items-center py-2 w-52 rounded-xl text-white"
      >
        View More Services
      </Link>
    </div>
  );
};

export default GetMoving;
