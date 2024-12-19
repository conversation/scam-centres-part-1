import { Background } from 'react-imgix'
import { cn } from '../util/helpers'

export default function BackgroundImage({ src, className }: { src: string; className: string }) {
  return <Background src={src} className={cn('h-full w-full', className)}></Background>
}
