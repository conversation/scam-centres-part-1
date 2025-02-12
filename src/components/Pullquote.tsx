import { cn } from '../util/helpers'

export default function Pullquote({
  className,
  quote,
  startQuoteIcon = true,
  endQuoteIcon = false,
  quoteClassname
}: {
  className?: string
  quoteClassname?: string
  quote: string
  startQuoteIcon?: boolean
  endQuoteIcon?: boolean
}) {
  return (
    <div className={cn('pullquote text-xl text-red-200 sm:text-2xl', className)}>
      <div className='mx-auto w-11/12 text-balance text-center sm:w-4/5'>
        <span className='relative'>
          {startQuoteIcon && (
            <span
              aria-hidden
              className={cn(
                'absolute -top-5 right-full translate-x-1/2 select-none text-[7rem] leading-none text-white opacity-5 sm:-top-8 sm:text-[9rem]',
                quoteClassname
              )}
            >
              “
            </span>
          )}

          {quote}

          {endQuoteIcon && (
            <span
              aria-hidden
              className={cn(
                'absolute right-0 top-full -translate-y-[1rem] translate-x-1/2 select-none text-[7rem] leading-none text-white opacity-5 sm:text-[9rem]',
                quoteClassname
              )}
            >
              ”
            </span>
          )}
        </span>
      </div>
    </div>
  )
}
