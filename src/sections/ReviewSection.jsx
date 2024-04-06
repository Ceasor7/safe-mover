'use client';
import ReviewCard from '@/components/Reviews/ActualReviews';
import { motion } from 'framer-motion';

const reviewcards = [
  {
    avatar: '/avatar.svg',
    name: 'Baraka Mwadime',
    stars: 5,
    review:
      'I am happy with the service I have received from SafeMovers. I wanted to safely store my furniture and the site recommended one that ticked all the boxes. The reason I gave 5 stars is because of the exceptional service I received from the team on the ground especially Johnstone and Pauline.',
  },
  {
    avatar: '/avatar.svg',
    name: 'Elizerbeth Wanjala',
    stars: 5,
    review:
      'The SafeMovers did great in Moving my family to South Africa from Kenya! The packing was well coordinated and unpacking. I had no breakages. I have 5 country moves experience so I know  what Im talking about! I was well informs on status of shipment which eased my worries. I would happily recommended them to others. Thanks Cosmas, Cecilia and team!',
  },
  {
    avatar: '/avatar.svg',
    name: 'Umutesi Angelique',
    stars: 5,
    review:
      'The best moving company, very responsive, very understanding , and with quality service. They went an extra mile to assist me with other logistics that were delaying my relocation. The team came to pack my stuff was very respectful, careful in handling items , and super clean!',
  },
  {
    avatar: '/avatar.svg',
    name: 'annik Henriks',
    stars: 5,
    review:
      'We moved from Switzerland to Nairobi and the team was very good at keeping us  updated and solve challenges along the way. The unpacking tram(team Johnstone) was reliable and took good care of our things',
  },
];

const ReviewSection = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex overflow-hidden mx-5 flex-col text-left my-7 max-w-full justify-evenly items-center"
    >
      <h3 className="my-4 font-bold text-4xl tracking-widest text-center">
        Reviews
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#00008B]/80">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3 mb-5">
            <p className="text-4xl mr-7 tracking-widest">
              Over 15,000 people have moved <br /> with us and enjoyed our
              services
            </p>
          </div>
          <div className="sm:w-2/3 flex flex-row gap-x-10">
            {reviewcards.map((reviewcard, index) => (
              <ReviewCard key={index} {...reviewcard} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewSection;
