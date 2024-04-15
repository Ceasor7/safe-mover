import Link from 'next/link';
import { client } from '../../../../sanity/lib/client';

async function getAllTags() {
  const query = `
    *[_type == "tag"] {
      name,
      slug,
      _id,
      "postCount": count(*[_type == "post" && references("tags", ^._id)])
    }
    `;
  const tags = client.fetch(query);
  return tags;
}

export const revalidate = 30;

const page = async () => {
  const tags = await getAllTags();
  return (
    <div className=" container max-w-4xl py-7">
      {tags?.length > 0 &&
        tags?.map((tag) => (
          <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
            <div className="mb-2 p-2 text-sm lowercase 0 border dark:border-gray-900 hover:text-[#00008b]">
              #{tag.name} ({tag?.postCount})
            </div>
          </Link>
        ))}
    </div>
  );
};

export default page;
