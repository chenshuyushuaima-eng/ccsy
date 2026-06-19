export const siteConfig = {
  name: "陳csy",
  title: "ccsy的个人博客",
  description: "一个热爱技术、热爱生活的开发者",
  avatar: "/images/avatar.svg",
  social: {
    github: "https://github.com/chenshuyushuaima-eng",
    email: "chenshuyushuai@126.com",
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
