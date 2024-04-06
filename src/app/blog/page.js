import PostCard from '@/components/PostCard';

const blogCards = [
  {
    image: '/images/auto-image-carousel.jpg',
    date: '20/3/2024',
    title: 'pet-relocation-kenya-preparation-requirement-pet-moving-companies',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    link: 'Learn More',
  },
  {
    image: '/images/auto-image-carousel.jpg',
    date: '20/3/2024',
    title: 'pet-relocation-kenya-preparation-requirement-pet-moving-companies',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    link: 'Learn More',
  },
  {
    image: '/images/auto-image-carousel.jpg',
    date: '20/3/2024',
    title: 'pet-relocation-kenya-preparation-requirement-pet-moving-companies',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    link: 'Learn More',
  },
  {
    image: '/images/auto-image-carousel.jpg',
    date: '20/3/2024',
    title: 'pet-relocation-kenya-preparation-requirement-pet-moving-companies',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    link: 'Learn More',
  },
  {
    image: '/images/auto-image-carousel.jpg',
    date: '20/3/2024',
    title: 'pet-relocation-kenya-preparation-requirement-pet-moving-companies',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    link: 'Learn More',
  },
];
export default function SafeMoversBlog() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl">All the Latest News in the Moving Industry</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {blogCards.map((blogCard, index) => (
          <PostCard key={index} {...blogCard} />
        ))}
      </div>
    </div>
  );
}
