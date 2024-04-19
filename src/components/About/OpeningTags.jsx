const OpeningTags = () => {
  return (
    <section className="bg-gray-50 relative">
      <div className="mx-auto max-w-screen-xl px-4 py-12">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Seamless Moving, Near or Far:
            <strong className="font-extrabold text-[#CC5500] sm:block">
              {' '}
              Kenya's Trusted Choice.{' '}
            </strong>
          </h1>
          <p className="mt-4 sm:text-xl/relaxed">
            Moving is a complex task requiring physical strength and a sound
            mind. At SafeMovers, we recognize the importance of people. We
            create a positive atmosphere, defining a mover as a multi-skilled
            professional adept at packing, handling, transportation, and setup.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 animate-bounce text-[#CC5500]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M12 5V19M12 19L6 13M12 19L18 13"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{' '}
          </g>
        </svg>
      </div>
    </section>
  );
};

export default OpeningTags;
