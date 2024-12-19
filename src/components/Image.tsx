import Imgix from 'react-imgix'
import { cn } from '../util/helpers'
import { ARTICLEWIDTH, FIGUREWIDTH } from '../util/constants'

export default function Image({
  src,
  loading,
  caption,
  source,
  sourceLink,
  className,
  imgClassName,
  align,
  alt
}: {
  src: string
  loading: string
  caption: string
  source: string
  sourceLink: string
  className?: string
  imgClassName?: string
  align?: string
  alt: string
}) {
  const commonProps: {
    imgixParams: {
      fit: string
      auto: string
      q: number
    }
    alt: string
  } = {
    imgixParams: {
      fit: 'crop',
      auto: 'format',
      q: 30
    },
    alt: alt
  }

  const renderSource = () => {
    if (!source) return null

    return sourceLink ? (
      <>
        {' '}
        <span>
          <a href={sourceLink} target='_blank' rel='noopener noreferrer'>
            {source}
          </a>
        </span>
      </>
    ) : (
      <>
        {' '}
        <span>{source}</span>
      </>
    )
  }

  const alignmentSize = align?.length ? `${ARTICLEWIDTH.maxWidth / 2}px` : `${FIGUREWIDTH.maxWidth}px`

  const sizes = `(max-width: 599px) 100vw, (min-width: 600px) ${alignmentSize}, (min-width: 1536px) ${alignmentSize}, ${alignmentSize}`

  const figureAlignmentClass = align === 'left' ? 'imgfloat-left' : align === 'right' ? 'imgfloat-right' : ''

  return (
    <figure className={cn('', figureAlignmentClass, className)}>
      <Imgix
        className={cn('', imgClassName)}
        {...commonProps}
        htmlAttributes={{
          loading: loading,
          width: '100%',
          height: 'auto'
        }}
        src={src}
        sizes={sizes}
      />
      <figcaption className={`${align ? 'max-w-none' : ''}`}>
        {caption}
        {renderSource()}
      </figcaption>
    </figure>
  )
}
