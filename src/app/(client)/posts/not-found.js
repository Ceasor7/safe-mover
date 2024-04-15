import Link from 'next/link';

const notFound = () => {
  return (
    <div className=" container max-w-xl flex flex-col mt-52 items-center justify-center">
      <h1 className=" font-bold text-4xl mb-6">Page Not Found</h1>
      <div>
        <Link
          className="bg-[#00008b] text-white font-semibold py-4 px-9"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default notFound;
