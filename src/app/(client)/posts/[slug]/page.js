import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '../../../../../sanity/lib/client';
import { urlForImage } from '../../../../../sanity/lib/image';

async function getPost(slug) {
  const query = `
      *[_type == "post" && slug.current == "${slug}"][0] {
        title,
        slug,
        publishedAt,
        excerpt,
        _id,
        "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
        body,
        tags[]-> {
          _id,
          slug,
          name
        }
      }
    `;
  const post = await client.fetch(query);
  return post;
}

const page = async ({ params }) => {
  const post = await getPost(params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className=" container max-w-4xl py-6">
      <p>{post?.title}</p>
      <div>
        <span className="font-thin italic">
          {new Date(post?.publishedAt).toDateString()}
        </span>
      </div>
      <div className="mt-5">
        {post?.tags?.map((tag) => (
          <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
            <span className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900">
              #{tag.name}
            </span>
          </Link>
        ))}
      </div>
      <div className=" mt-14 text-justify m-auto prose-headings:h-5 prose-headings:text-2xl prose-p:mb-5 prose-p:leading-7 prose-li:list-disc prose-li:leading-7 prose-li:ml-4">
        <PortableText
          value={post?.body}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlForImage(value).url()}
        alt="Post"
        width={700}
        height={700}
      />
    ),
  },
  block: {
    h2: ({ value }) => (
      <h2
        id={slugify(value.children[0].text)}
        className="text-3xl font-bold mb-3"
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }) => (
      <h3
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }) => (
      <h4
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h4>
    ),
    h5: ({ value }) => (
      <h5
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }) => (
      <h6
        id={slugify(value.children[0].text)}
        className="text-xl font-bold mb-3"
      >
        {value.children[0].text}
      </h6>
    ),
  },
};
