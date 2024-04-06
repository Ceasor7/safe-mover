const WhyChoose = () => {
  return (
    <section className="bg-gray-100 text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Us</h2>

          <p className="mt-4">
            Experience the delight of having breakfast at your old house, and by
            evening, enjoying dinner with feet up at your new house, all without
            breaking a sweat!
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border bg-white border-gray-800 p-8 shadow-xl transition hover:border-[#00008b]/10 hover:shadow-[#00008b]/10"
            href="#"
          >
            <img
              src="/global-search.svg"
              alt="worldwide-world."
              className=" h-16 w-16"
            />

            <h2 className="mt-4 text-xl font-bold">Global Know-how</h2>

            <p className="mt-1 text-sm">
              We invest in training our staff so you can expect the world's best
              at your doorstep on moving day.
            </p>
          </a>

          <a
            className="block rounded-xl border bg-white border-gray-800 p-8 shadow-xl transition hover:border-[#00008b]/10 hover:shadow-[#00008b]/10"
            href="#"
          >
            <img
              src="/team-group.svg"
              alt="Group team"
              className=" h-16 w-16"
            />

            <h2 className="mt-4 text-xl font-bold">Dedicated Teams</h2>

            <p className="mt-1 text-sm">
              We invest in training our staff so you can expect the world's best
              at your doorstep on moving day.
            </p>
          </a>

          <a
            className="block rounded-xl border bg-white border-gray-800 p-8 shadow-xl transition hover:border-[#00008b]/10 hover:shadow-[#00008b]/10"
            href="#"
          >
            <img
              src="/experience.svg"
              alt="User Experience"
              className=" h-16 w-16"
            />

            <h2 className="mt-4 text-xl font-bold">Experience</h2>

            <p className="mt-1 text-sm">
              We invest in training our staff so you can expect the world's best
              at your doorstep on moving day.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
