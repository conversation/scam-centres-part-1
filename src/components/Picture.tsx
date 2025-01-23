import { cn } from '../util/helpers'
import { breakpoints, widthsQualities } from '../util/constants'

interface PictureProps {
  src: string
  loading: 'lazy' | 'eager'
  caption: string
  source: string
  sourceLink: string
  className?: string
  imgClassName?: string
  alt: string
  focalPoint: {
    mobile: { x: number; y: number }
    tablet: { x: number; y: number }
    tabletLandscape: { x: number; y: number }
    laptop: { x: number; y: number }
    desktop: { x: number; y: number }
  }
}

export default function Picture({
  src,
  loading,
  caption,
  source,
  sourceLink,
  className,
  imgClassName,
  alt,
  focalPoint
}: PictureProps) {
  interface SizingParams {
    ar: string
    'fp-x': number
    'fp-y': number
  }

  const sizingParams: Record<string, SizingParams> = {
    mobile: { ar: '3:4', 'fp-x': focalPoint.mobile.x, 'fp-y': focalPoint.mobile.y },
    tablet: { ar: '1:1', 'fp-x': focalPoint.tablet.x, 'fp-y': focalPoint.tablet.y },
    tabletLandscape: { ar: '4:3', 'fp-x': focalPoint.tabletLandscape.x, 'fp-y': focalPoint.tabletLandscape.y },
    laptop: { ar: '16:9', 'fp-x': focalPoint.laptop.x, 'fp-y': focalPoint.laptop.y },
    desktop: { ar: '16:9', 'fp-x': focalPoint.desktop.x, 'fp-y': focalPoint.desktop.y }
  }

  const imgixParams = {
    fit: 'crop',
    crop: 'focalpoint',
    auto: 'format,compress',
    usm: 12
  }

  const srcSetParams = `fit=${imgixParams.fit}&auto=${imgixParams.auto}&crop=${imgixParams.crop}&usm=${imgixParams.usm}`

  const renderSource = () => {
    if (source && sourceLink && caption) {
      return (
        <figcaption>
          {caption}{' '}
          <span className='opacity-70'>
            <a href={sourceLink} target='_blank' rel='noopener noreferrer'>
              {source}
            </a>
          </span>
        </figcaption>
      )
    } else if (source || caption) {
      return (
        <figcaption>
          {caption} <span className='opacity-70'>{source}</span>
        </figcaption>
      )
    }
    return <></>
  }

  return (
    <figure className={cn('', className)}>
      <picture>
        {breakpoints.map(({ media, sizingName }) => (
          <source
            key={media}
            media={media}
            type='image/jpeg'
            srcSet={widthsQualities
              .map(
                (d) =>
                  `${src}?${srcSetParams}&fp-x=${sizingParams[sizingName]['fp-x']}&fp-y=${sizingParams[sizingName]['fp-y']}&q=${d.q}&dpr=${d.dpr}&w=${d.w}&ar=${sizingParams[sizingName].ar} ${d.w}w`
              )
              .join(', ')}
          />
        ))}
        <img className={cn('', imgClassName)} src={`${src}?${srcSetParams}&w=1000`} loading={loading} alt={alt} />
      </picture>
      {renderSource()}
    </figure>
  )
}
