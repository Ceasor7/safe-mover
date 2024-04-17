import Estimate from "../Quote/Estimate";

export default function LandingSection() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/moving-hero-image.jpg')" }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-r bg-black/45 sm:bg-transparent md:from-black/65 md:to-black/15"></div> */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-black/15 bg-black/10 sm:bg-transparent"></div>


      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 flex flex-wrap  ">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl text-white font-extrabold sm:text-6xl md:text-left">
            Seamless Moving, Near or Far: Kenya's Trusted Choice.
          </h1>

          <p className="mt-4 text-white max-w-lg text-xl/relaxed md:text-left">
            Guaranteed safety in packing, handling, transportation and setup.
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
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#CC5500] shadow hover:bg-[#CC5500] hover:text-white focus:outline-none focus:ring active:text-[#cc9c00] sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
        
      </div>      
    </div>
  );
}
