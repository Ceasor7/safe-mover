import Link from 'next/link';

const GetQuote = () => {
  return (
    <div className="flex flex-row justify-between mx-5 sm:mx-24 py-10">
      <div>
        <h1>Get the best professional moving services in Kenya.</h1>
        <p>
          Highly trained staff, latest technology and 100% satisfaction
          guarantee
        </p>
      </div>
      <Link
        href="/contact"
        className=" px-5 py-3 text-white ml-36 rounded-xl bg-[#00008B] hover:bg-[#00008B] hover:-translate-x-1.5 duration-400 "
      >
        {' '}
        Get a Free Quote{' '}
      </Link>
    </div>
  );
};

export default GetQuote;
