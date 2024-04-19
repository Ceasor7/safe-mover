import MakeSpecial from '@/components/About/MakeSpecial';
import OpeningTags from '@/components/About/OpeningTags';
import OurMission from '@/components/About/OurMission';
import OurStory from '@/components/About/OurStory';
import Estimate from '@/components/Quote/Estimate';

const AboutUs = () => {
  return (
    <div>
      <section>
        <OpeningTags />
      </section>
      <section>
        <OurMission />
      </section>
      <section>
        <OurStory />
      </section>
      <section>
        <MakeSpecial />
      </section>
      <section className="pb-24 px-6 md:px-12 w-full">
        <Estimate />
      </section>
    </div>
  );
};

export default AboutUs;
