import { ReactNode, useRef } from 'react'
import TitleTextBorder from './TitleTextBorder'
import { cn } from '../util/helpers'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useDarkMode } from '../context/useDarkMode'

export default function TitleSection({
  children,
  title,
  standFirst,
  publishDate,
  author,
  authorLink,
  authorAffiliation,
  authorAffiliationLink,
  className,
  clipped,
  textBackground
}: {
  children?: ReactNode
  title?: string
  standFirst?: string
  publishDate: string
  author: string
  authorLink?: string
  authorAffiliation?: string
  authorAffiliationLink?: string
  className?: string
  clipped?: boolean
  textBackground?: boolean
}) {
  const { isDarkMode } = useDarkMode()
  const sectionRef = useRef<HTMLDivElement>(null)

  const crateAuthor = () => {
    return (
      <>
        {authorLink ? (
          <a className='underline' href={authorLink} target='_blank' rel='noopener noreferrer'>
            {author}
          </a>
        ) : (
          <span>{author}</span>
        )}
        {authorAffiliation && authorAffiliationLink ? (
          <>
            ,{' '}
            <a className='underline' href={authorAffiliationLink} target='_blank' rel='noopener noreferrer'>
              {authorAffiliation}
            </a>
          </>
        ) : authorAffiliation ? (
          <>
            , <span>{authorAffiliation}</span>
          </>
        ) : null}
      </>
    )
  }

  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return

      const header = document.querySelector('header')
      if (!header) return

      const titleImage = section.querySelector('.title_section')

      if (titleImage) {
        gsap
          .timeline({
            scrollTrigger: {
              // markers: true,
              scrub: true,
              trigger: clipped ? section : titleImage,
              start: 'top top',
              end: 'bottom top'
            }
          })
          .fromTo(
            titleImage,
            { y: clipped ? header.clientHeight : 0 },
            { y: clipped ? header.clientHeight * -1 : 100, ease: 'linear' }
          )
      }
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className={cn('relative !m-0 h-screen w-full max-w-none', className, clipped ? '[clip-path:inset(0px_0px)]' : '')}
    >
      <div
        className={cn(
          'grid h-full w-full grid-cols-1 grid-rows-[60%_1fr] lg:grid-cols-[40%_1fr] lg:grid-rows-1',
          clipped ? 'fixed top-0' : ''
        )}
      >
        <div
          className={cn(
            'order-1 place-content-center bg-gradient-to-b px-8 lg:order-first lg:pt-12 lg:text-left',
            isDarkMode ? 'from-neutral-900/50' : 'from-neutral-400/50'
          )}
        >
          <div className='mx-auto max-w-[45ch] text-center'>
            {textBackground && title ? (
              <>
                <TitleTextBorder
                  as={'h1'}
                  className='text-balance text-center font-base text-4xl font-bold md:text-5xl lg:text-6xl'
                >
                  {title}
                </TitleTextBorder>
                <br />
              </>
            ) : (
              <h1 className='not-prose text-balance text-center font-base text-4xl font-bold md:text-5xl lg:text-6xl'>
                {title}
              </h1>
            )}

            {textBackground && standFirst ? (
              <TitleTextBorder as={'h2'} className='text-balance font-base text-2xl font-bold md:text-3xl lg:text-4xl'>
                {standFirst}
              </TitleTextBorder>
            ) : (
              <h2 className='not-prose text-balance font-base text-2xl font-bold md:text-3xl lg:text-4xl'>
                {standFirst}
              </h2>
            )}

            <p className='!mb-1 !mt-4 text-xs md:text-sm'>{crateAuthor()}</p>

            <time dateTime={publishDate} className='not-prose m-0 font-base text-xs'>
              Published:{' '}
              {new Date(publishDate)
                .toLocaleString('en-AU', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                  timeZone: 'Australia/Sydney'
                })
                .replace('AM', 'am')
                .replace('PM', 'pm')}{' '}
              AEDT
            </time>
          </div>
        </div>
        <div id='titleImg' className='not-prose h-full w-full overflow-clip'>
          {children}
        </div>
      </div>
    </section>
  )
}
