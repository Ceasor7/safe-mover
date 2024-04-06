import Image from 'next/image';
import Link from 'next/link';

export default function ArticleCard(props) {
  const { post } = props;

  return (
    <Link href={`/mover/${post.slug}`}>
      <div className="shadow-2xl flex flex-col text-center items-center justify-center rounded-xl py-14 px-10">
        <Image
          height={450}
          width={220}
          src={post.socialImage}
          alt={post.title}
        />
        <h3 className="text-2xl font-bold my-3">{post.title}</h3>
        <p>{post.date}</p>
      </div>
    </Link>
  );
}
