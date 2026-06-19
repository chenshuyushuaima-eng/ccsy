export const siteConfig = {
  name: "你的名字",
  title: "个人博客",
  description: "一个热爱技术、热爱生活的开发者",
  avatar: "/images/avatar.jpg",
  social: {
    github: "https://github.com/yourusername",
    email: "your-email@example.com",
    twitter: "",
  },
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Docker",
    "PostgreSQL",
    "Tailwind CSS",
  ],
  navLinks: [
    { label: "首页", href: "/" },
    { label: "博客", href: "/blog" },
    { label: "关于我", href: "/about" },
  ],
} as const;
