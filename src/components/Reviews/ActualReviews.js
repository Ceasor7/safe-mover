import ActualReviewCard from './ActualReviewCards';

const ActualReviews = () => {
  return (
    <section className="bg-[#00008b] text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center md:text-left text-4xl font-bold tracking-tight sm:text-5xl py-12">
          Read trusted reviews from our customers
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <ActualReviewCard
            name=" Baraka Mwadime"
            content="I am happy with the service I have received from SafeMovers. I wanted to safely store my furniture and the site recommended one that ticked all the boxes. The reason I gave 5 stars is because of the exceptional service I received from the team on the ground especially Johnstone and Pauline."
          />
          <ActualReviewCard
            name=" Elizabeth Wanjala"
            content="The SafeMovers did great in Moving my family to South Africa from Kenya! The packing was well coordinated and unpacking. I had no breakages. I have 5 country moves experience so I know what I'm talking about! I was well informs on status of shipment which eased my worries. I would happily recommended them to others. Thanks Cosmas, Cecilia and team!."
          />
          <ActualReviewCard
            name="  Umutesi Angelique"
            content="The best moving company, very responsive, very understanding , and with quality service. They went an extra mile to assist me with other logistics that were delaying my relocation. The team came to pack my stuff was very respectful, careful in handling items , and super clean!"
          />
        </div>
      </div>
    </section>
  );
};

export default ActualReviews;
