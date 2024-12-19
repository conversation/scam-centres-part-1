// import { cn } from '../util/helpers'

import { cn } from '../util/helpers'

export default function Pullquote({
  className,
  quote,
  startQuoteIcon = true,
  endQuoteIcon = false
}: {
  className: string
  quote: string
  startQuoteIcon: boolean
  endQuoteIcon: boolean
}) {
  return (
    <div className={className}>
      <div className='px-4 sm:px-8'>
        <div className='relative inline-block'>
          <p
            className={cn(
              'relative inline',
              startQuoteIcon
                ? 'before:absolute before:-left-12 before:-top-8 before:text-[10rem] before:leading-none before:text-white before:opacity-10 before:content-["“"]'
                : '',
              endQuoteIcon
                ? 'after:absolute after:left-[96%] after:top-[75%] after:text-[10rem] after:leading-none after:text-white after:opacity-10 after:content-["”"]'
                : ''
            )}
          >
            {quote}
          </p>
        </div>
      </div>
    </div>
  )
}
