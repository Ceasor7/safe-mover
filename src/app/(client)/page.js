import LandingSection from '@/components/Hero/LandingSection';
import WhyChoose from '@/components/Moving/WhyChoose';
import PostCard from '@/components/PostCard';
import ActualReviews from '@/components/Reviews/ActualReviews';
import CompaniesServed from '@/components/Served/CompaniesServed';
import GetMoving from '@/components/Services/GetMoving';
import Membership from '@/sections/Membership';
import ServicesSection from '@/sections/ServicesSection';
import { client } from '../../../sanity/lib/client';
import Estimate from '@/components/Quote/Estimate';

export async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 30;

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="overflow-x-hidden">
      <section>
        <LandingSection />
      </section>
      <section className='pb-24 px-6 md:px-12 w-full'>
        <Estimate />
      </section>
      <section className='bg-black/5'>
        <ServicesSection />
      </section>
      <section>
        <ActualReviews />
      </section>
      <hr className="border-black mx-5 sm:mx-24" />
      <section className='py-24'>
        <CompaniesServed />
      </section>
      <hr className="border-black mx-5 sm:mx-24" />
      <section>
        <WhyChoose />
      </section>
      <hr className="border-black mx-5 sm:mx-24" />
      <section>
        {/* <GetMoving /> */}
      </section>
      <section>
        <Membership />
      </section>
      <section>
        <div className="container  mx-auto max-w-5xl py-6 lg:py-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="inline-block font-black text-4xl lg:text-5xl">
                Blog
              </h1>
              <p className="text-xl">
                All the Latest News in the Moving Industry
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 py-6 sm:gap-x-10 gap-y-7 sm:grid-cols-2">
            {posts?.length > 0 &&
              posts?.map((post) => <PostCard key={post?._id} post={post} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
