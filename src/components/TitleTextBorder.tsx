import { ReactNode, ElementType } from 'react'
import { cn } from '../util/helpers'
import { useDarkMode } from '../context/useDarkMode'

export default function TitleTextBorder({
  children,
  className,
  as: Component = 'div'
}: {
  children: ReactNode
  className?: string
  background?: string
  as?: ElementType
}) {
  const { isDarkMode } = useDarkMode()

  if (isDarkMode) {
    return (
      <div className='not-prose relative grid grid-cols-1 grid-rows-1 text-neutral-800'>
        <div className='col-span-1 col-start-1 row-span-1 row-start-1' aria-hidden='true'>
          <Component
            className={cn(
              'not-sr-only pointer-events-none inline select-none bg-neutral-50 decoration-clone px-[0.5ch] py-1 !leading-[1]',
              className
            )}
            dangerouslySetInnerHTML={{ __html: children }}
          ></Component>
        </div>
        <div className='col-span-1 col-start-1 row-span-1 row-start-1'>
          <Component
            className={cn('inline decoration-clone px-[0.5ch] !leading-[1] mix-blend-darken', className)}
            dangerouslySetInnerHTML={{ __html: children }}
          ></Component>
        </div>
      </div>
    )
  }

  return (
    <div className='not-prose relative grid grid-cols-1 grid-rows-1 text-neutral-50'>
      <div className='col-span-1 col-start-1 row-span-1 row-start-1' aria-hidden='true'>
        <Component
          className={cn(
            'not-sr-only pointer-events-none inline select-none bg-neutral-700 decoration-clone px-[0.5ch] py-1 !leading-[1]',
            className
          )}
          dangerouslySetInnerHTML={{ __html: children }}
        ></Component>
      </div>
      <div className='col-span-1 col-start-1 row-span-1 row-start-1'>
        <Component
          className={cn('inline decoration-clone px-[0.5ch] !leading-[1]', className)}
          dangerouslySetInnerHTML={{ __html: children }}
        ></Component>
      </div>
    </div>
  )
}
