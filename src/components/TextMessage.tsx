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
              <img
                loading='lazy'
                src='https://images.theconversation.com/files/617201/original/file-20240904-16-xvj31z.png?ixlib=rb-4.1.0&q=10&auto=format&w=20&h=20&fit=crop&dpr=1'
                alt='message recieved ticks'
                className='inline aspect-square max-h-5 w-5 max-w-5'
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
