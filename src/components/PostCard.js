import Link from 'next/link';

export default function PostCard({ post }) {
  const { title, excerpt, publishedAt, tags } = post;
  return (
    <div className="border-black border my-5 p-6 rounded-md">
      <Link href={`/posts/${post.slug?.current}`}>
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{excerpt}</p>

        <p className="font-thin italic">
          {new Date(publishedAt).toDateString()}
        </p>
        <div>
          {tags?.map((tag) => (
            <span
              key={tag?._id}
              className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900"
            >
              #{tag?.name}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}
