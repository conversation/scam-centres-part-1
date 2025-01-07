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
    <div className={cn('text-balance py-5 text-center text-xl text-red-50 sm:text-2xl', className)}>
      <div className='px-0 sm:px-8'>
        <div
          className={cn(
            'relative inline-block',
            startQuoteIcon
              ? 'before:absolute before:-top-2 before:left-0 before:text-[10rem] before:leading-none before:text-white before:opacity-10 before:content-["“"]'
              : '',
            endQuoteIcon
              ? 'after:absolute after:right-0 after:top-[80%] after:text-[10rem] after:leading-none after:text-white after:opacity-10 after:content-["”"]'
              : ''
          )}
        >
          <p>{quote}</p>
        </div>
      </div>
    </div>
  )
}
