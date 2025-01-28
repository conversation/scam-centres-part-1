import { useEffect, useRef, useState } from 'react'
import { cn } from '../util/helpers'

export default function Pullquote({
  className,
  quote,
  startQuoteIcon = true,
  endQuoteIcon = false
}: {
  className?: string
  quote: string
  startQuoteIcon?: boolean
  endQuoteIcon?: boolean
}) {
  const textRef = useRef<HTMLParagraphElement>(null)
  const [lineWidths, setLineWidths] = useState<{ firstLine: number; lastLine: number } | null>(null)

  useEffect(() => {
    if (textRef.current) {
      const range = document.createRange()
      const textNode = textRef.current.childNodes[0]

      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        range.setStart(textNode, 0)
        range.setEnd(textNode, quote.length)

        // Get the bounding boxes of all lines
        const rects = range.getClientRects()

        if (rects.length > 0) {
          setLineWidths({ firstLine: rects[0].width, lastLine: rects[rects.length - 1].width })
        }
      }
    }
  }, [quote])

  return (
    <div className={cn('text-balance py-5 text-center text-xl text-red-200 sm:text-2xl', className)}>
      <div className='px-0 sm:px-8'>
        <div>
          <p ref={textRef} className='relative inline-block'>
            {startQuoteIcon && lineWidths && (
              <span
                aria-hidden
                className='absolute select-none text-[10rem] leading-none text-white opacity-20'
                style={{
                  left: `${(textRef.current!.clientWidth - lineWidths.firstLine) / 2}px`,
                  top: `0`,
                  transform: 'translate(-50%, -2rem)' // Adjust position relative to text
                }}
              >
                “
              </span>
            )}
            {quote}
            {endQuoteIcon && lineWidths && (
              <span
                aria-hidden
                className='absolute select-none text-[10rem] leading-none text-white opacity-20'
                style={{
                  left: `${(textRef.current!.clientWidth + lineWidths.lastLine) / 2}px`,
                  top: `100%`,
                  transform: 'translate(-50%, -1rem)' // Adjust position relative to text
                }}
              >
                ”
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
