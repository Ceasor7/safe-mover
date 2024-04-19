import MakeSpecialCard from './MakeSpecialCard';

const MakeSpecial = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="justify-center text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What makes us special
          </h2>

          <p className="mt-4 sm:px-24">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <MakeSpecialCard
            title="Tailored Solutions"
            image="/auto-image-carousel.jpg"
            description=" Our Safe Movers Company understands that every move is unique. Whether it’s a residential shift to a new home, corporate relocation, international move, or auto transport, we craft personalized solutions to suit your specific needs. From packing delicate items to coordinating complex logistics, we ensure a seamless transition tailored just for you."
          />
          <MakeSpecialCard
            title="Local Expertise, Global Reach"
            image="/auto-image-carousel.jpg"
            description="With deep roots in Kenya and a vast network spanning the globe, we offer more than just a moving service – we provide a gateway to new horizons. Our local knowledge combined with international partnerships enables us to navigate the complexities of cross-border moves effortlessly. No matter where life takes you, we’re there to make your journey smoother."
          />
          <MakeSpecialCard
            title="Care Beyond Transport"
            image="/auto-image-carousel.jpg"
            description=" Moving isn’t just about transporting possessions; it’s about moving lives. That’s why our company goes above and beyond to ensure your belongings are handled with the utmost care. From safeguarding fragile heirlooms to securely storing cherished memories, we treat your belongings as if they were our own, ensuring they arrive at your new destination safe and sound."
          />
          <MakeSpecialCard
            title="Seamless Transitions"
            image="/auto-image-carousel.jpg"
            description=" Relocating can be stressful, but it doesn’t have to be. Our team of dedicated professionals is committed to making your move as smooth and stress-free as possible. From meticulous planning to efficient execution, we take care of the details so you can focus on settling into your new home or office with ease."
          />
          <MakeSpecialCard
            title="Innovative Storage Solutions"
            image="/auto-image-carousel.jpg"
            description="Need a temporary home for your belongings during a transition? Our state-of-the-art storage facilities offer secure and climate-controlled spaces to safeguard your possessions until you’re ready for them. Whether you require short-term storage during a move or long-term solutions, we have the flexibility and reliability to accommodate your needs."
          />
          <MakeSpecialCard
            title="Commitment to Excellence"
            image="/auto-image-carousel.jpg"
            description=" At our Safe Movers, excellence isn’t just a goal – it’s our standard. From our friendly customer service to our commitment to quality and reliability, we strive to exceed expectations at every turn. With transparent pricing, clear communication, and a dedication to customer satisfaction, we’re here to make your moving experience exceptional, every step of the way."
          />
        </div>
      </div>
    </section>
  );
};

export default MakeSpecial;
