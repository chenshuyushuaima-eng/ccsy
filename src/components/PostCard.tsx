import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block group p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200"
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-2.5 py-0.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
        {post.title}
      </h3>
      <p className="text-sm text-gray-500 mb-3 line-clamp-2">{post.excerpt}</p>
      <time className="text-xs text-gray-400">{post.date}</time>
    </Link>
  );
}
