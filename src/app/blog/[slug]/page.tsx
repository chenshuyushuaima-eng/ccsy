import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link
          href="/blog"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          ← 返回博客列表
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2.5 py-0.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <time className="text-sm text-gray-400">{post.date}</time>
      </header>

      {/* Content */}
      <article className="border-t border-gray-100 pt-10">
        <MarkdownRenderer content={post.content} />
      </article>

      {/* Footer nav */}
      <div className="mt-16 pt-8 border-t border-gray-100">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          ← 返回博客列表
        </Link>
      </div>
    </div>
  );
}
