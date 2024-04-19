const OurStory = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div>
        <div className=" flex flex-row sm:gap-x-10 gap-y-9">
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/c-6Dm22bvA8?si=Er26gEZzIEaAieRH"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Story</h2>

            <p className="mt-4">
              Moving is a complex task requiring physical strength and a sound
              mind. At SafeMovers, we recognize the importance of people. We
              create a positive atmosphere, defining a mover as a multi-skilled
              professional adept at packing, handling, transportation, and
              setup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
