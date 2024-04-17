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
      <section className='py-24'>
        <CompaniesServed />
      </section>
      <section>
        <WhyChoose />
      </section>
      <section>
        {/* <GetMoving /> */}
      </section>
      <section>
        <Membership />
      </section>
      <section className='bg-black/5 py-12'>
        <div className="container mx-auto max-w-5xl py-6 lg:py-10">
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
              posts?.map((post) => (
                <div key={post?._id} className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                    <p className="text-sm text-gray-600 mt-2">{post.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <a href="#" className="text-blue-600 hover:underline">Read More</a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
