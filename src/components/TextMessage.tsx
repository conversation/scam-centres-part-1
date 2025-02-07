import Imgix from 'react-imgix'
import { cn } from '../util/helpers'
import { forwardRef, ReactNode } from 'react'

type TextMessageProps = {
  children: ReactNode
  className?: string
  sender: boolean
  time: string
} & React.HTMLProps<HTMLDivElement>

export const TextMessage = forwardRef<HTMLDivElement, TextMessageProps>(
  ({ children, className, sender, time, ...rest }, ref) => {
    return (
      <>
        {sender ? (
          <div
            ref={ref}
            className={cn(
              'message_bubble not-prose message_bubble_right rounded-md rounded-tr-none p-2 pr-3 text-[#e2ffc7]',
              className
            )}
            {...rest}
          >
            <div className='text-black'>{children}</div>
            <div className='flex items-end justify-end gap-1 text-xs text-neutral-400'>
              <p>{time}</p>
              <Imgix
                className='inline aspect-square max-h-5 w-5 max-w-5'
                imgixParams={{
                  fit: 'crop',
                  auto: 'format',
                  q: 30
                }}
                htmlAttributes={{
                  loading: 'lazy',
                  width: '100%',
                  height: 'auto'
                }}
                src='https://images.theconversation.com/files/617201/original/file-20240904-16-xvj31z.png'
                sizes='(max-width: 599px) 100px, (min-width: 600px) 100px, 100px'
              />
            </div>
          </div>
        ) : (
          <div
            ref={ref}
            className={cn(
              'message_bubble not-prose message_bubble_left rounded-md rounded-tl-none p-2 pl-3 text-neutral-50',
              className
            )}
            {...rest}
          >
            <div className='text-black'>{children}</div>
            <div className='flex items-end justify-end gap-1 text-xs text-neutral-400'>
              <p>{time}</p>
            </div>
          </div>
        )}
      </>
    )
  }
)
