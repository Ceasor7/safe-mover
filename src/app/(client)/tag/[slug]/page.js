import PostCard from '@/components/PostCard';
import { client } from '../../../../../sanity/lib/client';

async function getPostsByTag(tag) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
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

  const posts = await client.fetch(query);
  return posts;
}

export const revalidate = 30;

const page = async ({ params }) => {
  const posts = await getPostsByTag(params.slug);
  return (
    <div className=" container max-w-4xl py-7">
      <div className=" sm:gap-y-8 my-5">
        {posts?.length > 0 &&
          posts?.map((post) => (
            <PostCard className="my-5" key={post?._id} post={post} />
          ))}
      </div>
    </div>
  );
};

export default page;
