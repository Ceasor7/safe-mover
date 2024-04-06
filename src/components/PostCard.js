import Link from 'next/link';

export default function PostCard({ image, date, title, description, link }) {
  return (
    <Link href="#" className="group relative block overflow-hidden">
      <div className="shadow-2xl rounded-xl py-14 px-10">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap text-white bg-[#CC5500] px-3 py-1.5 text-xs font-medium">
            {date}
          </span>
          <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-1.5 text-sm text-gray-700">{description}</p>
          <form className="mt-4">
            <button className="block w-full text-white rounded bg-[#CC5500] p-4 text-sm font-medium transition hover:scale-105">
              {link}
            </button>
          </form>
        </div>
      </div>
    </Link>
  );
}
