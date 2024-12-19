import { MDXProvider } from '@mdx-js/react'
import { ReactNode } from 'react'

export default function MarkdownProvider({ children }: { children?: ReactNode }) {
  return <MDXProvider>{children}</MDXProvider>
}
