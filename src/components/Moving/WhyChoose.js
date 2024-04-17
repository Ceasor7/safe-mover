import WhyChooseUsCard from './WhyChooseUsCard'; // assuming WhyChooseUsCard.js is in the same directory

const WhyChoose = () => {
  return (
    <section className="bg-[#DD6001] py-12">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 text-white">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-5xl font-bold text-white pb-6">Why Choose Us</h2>

          <p className="mt-4 text-white">
            Experience the delight of having breakfast at your old house, and by
            evening, enjoying dinner with feet up at your new house, all without
            breaking a sweat!
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <WhyChooseUsCard
            icon="/global-search.svg"
            title="Global Know-how"
            description="We invest in training our staff so you can expect the world's best at your doorstep on moving day."
          />
          <WhyChooseUsCard
            icon="/team-group.svg"
            title="Dedicated Teams"
            description="We invest in training our staff so you can expect the world's best at your doorstep on moving day."
          />
          <WhyChooseUsCard
            icon="/experience.svg"
            title="Experience"
            description="We invest in training our staff so you can expect the world's best at your doorstep on moving day."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
