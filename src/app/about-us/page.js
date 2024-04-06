import AutoImageCarousel from '@/sections/AutoImageCarousel';
import ImageCarousel from '@/sections/ImageCarousel';
import OurCulture from '@/sections/OurCulture';
import OurTeam from '@/sections/OurTeam';

const AboutUs = () => {
  return (
    <div className="my-5">
      <h1 className="text-4xl mt-5 mx-5 sm:mx-24 text-gray-400 font-bold mb-3">
        Best Car Movers in Nairobi, Kenya
      </h1>
      <div className="flex flex-col sm:flex-row my-14 gap-x-28 mx-5 sm:mx-24">
        <div className="sm:w-1/2 ">
          <h1 className="text-4xl sm:mt-14 text-[#00008B] font-bold">
            The SafeMover Brand
          </h1>
        </div>
        <div className="sm:w-1/2">
          <p className="sm:text-center">
            Moving is a complex task requiring physical strength and a sound
            mind. At SafeMovers, we recognize the importance of people. We
            create a positive atmosphere, defining a mover as a multi-skilled
            professional adept at packing, handling, transportation, and setup.
          </p>
        </div>
      </div>
      <div className="my-14">
        <ImageCarousel />
      </div>
      <div className="my-14">
        <h1 className="font-bold text-5xl text-gray-700 mx-5 sm:mx-24 my-3">
          Our History
        </h1>
        <p className="font-bold text-gray-700 mx-5 sm:mx-24 my-3">
          Read the progress we have made throughtout the years
        </p>
        <AutoImageCarousel />
      </div>
      <div className="my-14">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                  <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    Our Vision and Mission
                  </h2>
                  <p className="hidden md:mt-4 md:block">
                    Discover the SafeMovers Academy, where movers are trained
                    using a comprehensive curriculum. Our movers are certified
                    with over 70 skills, delivering true value to clients while
                    upholding the moving industry’s name. The academy serves as
                    our knowledge hub, providing continuous training for all
                    employees.
                  </p>
                  <div className="my-3">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                      Our Core Values
                    </h2>
                    <ul className="rounded flex flex-row  px-12 py-3 text-sm font-medium ">
                      <li className="border-2 border-black sm:mr-3 rounded-full p-2 ">
                        Courtesy
                      </li>
                      <li className="border-2 border-black sm:mr-3 rounded-full p-2 ">
                        Creativity
                      </li>
                      <li className="border-2 border-black sm:mr-3 rounded-full p-2 ">
                        Teamwork
                      </li>
                      <li className="border-2 border-black sm:mr-3 rounded-full p-2 ">
                        Enthusiasm
                      </li>
                      <li className="border-2 border-black rounded-full p-2 ">
                        Care
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr className="border-black mx-5 sm:mx-24" />
      <div className="my-14">
        <OurCulture />
      </div>
      <hr className="border-black mx-5 sm:mx-24" />
      <div className="my-14">
        <h1 className="text-2xl sm:text-4xl text-[#00008B] font-bold mx-5 sm:mx-24">
          Our Team
        </h1>
        <hr className="border-black my-3 mx-5 sm:mx-24" />
        <OurTeam />
      </div>
    </div>
  );
};

export default AboutUs;
