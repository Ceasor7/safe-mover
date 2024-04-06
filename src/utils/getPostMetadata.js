import fs from 'fs';
import matter from 'gray-matter';

export default function getPostMetadata(basePath) {
  const folder = basePath + '/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      metaTitle: matterResult.data.metaTitle,
      metaDesc: matterResult.data.metaDesc,
      socialImage: matterResult.data.socialImage,
      date: matterResult.data.date,
      slug: filename.replace('.md', ''),
    };
  });
  return posts;
}
