import getPostMetadata from '@/utils/getPostMetadata';
import ArticleCard from './ArticleCard';

const RecentArticle = () => {
  const postMetadata = getPostMetadata('src/movers');

  const sortedPosts = postMetadata.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const recentPosts = sortedPosts.slice(0, 3);

  return (
    <div>
      <h2 className="font-bold text-xl text-gray-700 my-4">Recent Articles</h2>
      <article className="flex flex-col gap-y-6 ">
        {recentPosts.map((post, postIndex) => {
          return <ArticleCard key={postIndex} post={post} />;
        })}
      </article>
    </div>
  );
};

export default RecentArticle;
