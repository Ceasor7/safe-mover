'use userver';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const OurCulture = () => {
  return (
    <div className="sm:mx-24 mx-14">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <img src="/carousel3.jpg" alt="Safe Movers Staff" />
          </CarouselItem>
          <CarouselItem>
            <img src="/carousel1.jpg" alt="Safe Movers Staff" />
          </CarouselItem>
          <CarouselItem>
            <img src="/carousel2.jpg" alt="Safe Movers Staff" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default OurCulture;
