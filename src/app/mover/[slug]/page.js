import getPostMetadata from '@/utils/getPostMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

function getPostContent(slug) {
  const folder = 'src/movers/';
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata('src/movers');
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? ' ⋅ ' + params?.slug : '';
  return {
    title: `Safe Movers ${id.replaceAll('_', ' ')}`,
  };
}

export default function MoverPage(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  console.log(post);
  return (
    <main>
      <article className="mx-5 sm:mx-24">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
