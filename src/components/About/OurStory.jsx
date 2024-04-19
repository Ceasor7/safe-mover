const OurStory = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div>
        <h2>Our Story</h2>
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
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Our Mission, Vision and Core Values
            </h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
