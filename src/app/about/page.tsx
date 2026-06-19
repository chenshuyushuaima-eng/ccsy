import { siteConfig } from "@/lib/config";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
        关于我
      </h1>

      {/* 简介 */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">简介</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 leading-relaxed">
            你好！我是{siteConfig.name}，一个热爱技术的开发者。
            在这里我会分享我的技术学习笔记、项目经验和生活感悟。
          </p>
          <p className="text-gray-600 leading-relaxed">
            我喜欢探索新技术，追求简洁优雅的代码，相信技术应该服务于人。
          </p>
        </div>
      </section>

      {/* 经历 */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">经历</h2>
        <div className="space-y-6">
          <div className="relative pl-6 border-l-2 border-blue-200">
            <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] bg-blue-500 rounded-full" />
            <time className="text-xs text-gray-400">2024 - 至今</time>
            <h3 className="text-base font-medium text-gray-900 mt-1">
              在这里填写你的当前工作
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              描述你的工作内容和职责
            </p>
          </div>
          <div className="relative pl-6 border-l-2 border-gray-200">
            <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] bg-gray-300 rounded-full" />
            <time className="text-xs text-gray-400">2022 - 2024</time>
            <h3 className="text-base font-medium text-gray-900 mt-1">
              在这里填写你的上一段经历
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              描述这段经历的内容
            </p>
          </div>
          <div className="relative pl-6 border-l-2 border-gray-200">
            <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] bg-gray-300 rounded-full" />
            <time className="text-xs text-gray-400">2018 - 2022</time>
            <h3 className="text-base font-medium text-gray-900 mt-1">
              在这里填写你的教育/早期经历
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              描述这段经历
            </p>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">联系方式</h2>
        <div className="space-y-3">
          {siteConfig.social.email && (
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {siteConfig.social.email}
            </a>
          )}
          {siteConfig.social.github && (
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              {siteConfig.social.github}
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
