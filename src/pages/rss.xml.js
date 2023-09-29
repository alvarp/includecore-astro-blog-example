import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import { getBlogPosts } from "../content/getBlogPosts";

export async function GET(context) {
  const posts = await getBlogPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post,
      pubDate: new Date(post.date),
      link: `/blog/${post.id}/`,
    })),
  });
}
