export default function LandingSection() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/moving-hero-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Seamless Moves, Near or Far:
            <strong className="block font-extrabold text-[#CC5500]">
              {' '}
              Kenya's Trusted Choice!{' '}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            create a positive atmosphere, defining a mover as a multi-skilled
            professional adept at packing, handling, transportation, and setup.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="/contact"
              className="block w-full rounded bg-[#CC5500] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#00008b] focus:outline-none focus:ring active:bg-[#cc9c00] sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="/about-us"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#CC5500] shadow hover:text-[#CC5500] focus:outline-none focus:ring active:text-[#cc9c00] sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
