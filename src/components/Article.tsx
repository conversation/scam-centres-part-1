import { cn } from '../util/helpers'
import ArticleContent from '../article.mdx'
import { useDarkMode } from '../context/useDarkMode'

export default function Article({ className }: { className?: string }) {
  const { isDarkMode } = useDarkMode()

  return (
    <article
      className={cn(
        'prose prose-lg pb-8 prose-figcaption:text-xs md:prose-figcaption:text-sm',
        className,
        isDarkMode ? 'prose-dark' : 'prose-light'
      )}
    >
      <ArticleContent />
    </article>
  )
}
