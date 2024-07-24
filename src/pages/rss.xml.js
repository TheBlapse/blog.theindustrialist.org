import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection("posts");
  return rss({
    title: "Institute for Industrialization of Mars",
    description: "A blog by Aman & Sehaj",
    site: "https://www.theindustrialist.org/",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
