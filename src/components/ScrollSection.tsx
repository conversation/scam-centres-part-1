import { ReactNode, useEffect, useRef } from 'react'
import { addClassToChildren, cn } from '../util/helpers'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ARTICLEWIDTH } from '../util/constants'
// import { useSetAtom } from 'jotai'
// import { headerHeight } from '../context/atom'

gsap.registerPlugin(ScrollTrigger)

export function ScrollSection({
  className,
  children,
  pinType,
  id
}: {
  children: ReactNode
  pinType: string
  className?: string
  id?: string
}) {
  const sectionRef = useRef<HTMLDivElement>(null)
  // const setHeaderHeight = useSetAtom(headerHeight)

  useEffect(() => {
    const refreshScrolls = () => ScrollTrigger.refresh()

    window.addEventListener('resize', refreshScrolls)

    return () => {
      window.removeEventListener('resize', refreshScrolls)
    }
  }, [])

  // General scroll section
  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section || className!.includes('intro_section') || className!.includes('yeo_messages')) return
      // if (!section || section.classList.contains('intro_section') || section.classList.contains('yeo_messages')) return

      const steps = section.querySelectorAll('.pinned_foreground .step')
      const backgroundElements = section.querySelectorAll('.pinned_background_wrapper > *')
      const backgroundImageElements = section.querySelectorAll('.pinned_background_wrapper img')
      const foregroundElement = section.querySelectorAll('.foregroundElement')

      steps.forEach((step, index) => {
        const element = backgroundElements[index + 1]

        if (element) {
          ScrollTrigger.create({
            // markers: true,
            trigger: step,
            start: 'top 90%',
            onEnter: () => {
              element.classList.add('make_visible')
            },
            onLeaveBack: () => {
              element.classList.remove('make_visible')
            }
          })
        }
      })

      if (backgroundImageElements.length) {
        gsap
          .timeline({
            scrollTrigger: {
              // markers: true,
              trigger: foregroundElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          })
          .to(backgroundImageElements, { scale: 1.5, ease: 'power1.inOut' })
      }
    },
    { scope: sectionRef }
  )

  // Yeo messages animation
  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section || !className!.includes('yeo_messages')) return

      const steps = section.querySelectorAll('.pinned_foreground .step')
      const backgroundElements = section.querySelectorAll('.pinned_background_wrapper > *')

      const cantWaitheight = document.querySelector('.cant_wait')?.getBoundingClientRect().height
      const dontKnowheight = document.querySelector('.dont_know')?.getBoundingClientRect().height

      if (!steps.length || !backgroundElements.length || !cantWaitheight || !dontKnowheight) return

      gsap.set('.mum_message_section', { y: cantWaitheight + dontKnowheight + 8 })

      // First message animates on
      gsap
        .timeline({
          scrollTrigger: {
            // markers: true,
            trigger: steps[0],
            start: 'top 70%',
            end: 'top 40%',
            scrub: true
          }
        })
        .to('.ben_phone', { scale: 0.6, xPercent: -30, yPercent: 10, ease: 'power1.inOut' })
        .to('.mum_phone', { xPercent: 0, yPercent: 0, autoAlpha: 1, ease: 'power1.inOut' }, 0)

      ScrollTrigger.create({
        // markers: true,
        trigger: steps[1],
        start: 'top 90%',
        onEnter: () => {
          backgroundElements[2].classList.add('make_visible')
          backgroundElements[0].classList.remove('make_visible')
        },
        onLeaveBack: () => {
          backgroundElements[2].classList.remove('make_visible')
          backgroundElements[0].classList.add('make_visible')
        }
      })

      ScrollTrigger.create({
        // markers: true,
        trigger: steps[2],
        start: 'top 90%',
        onEnter: () => {
          backgroundElements[3].classList.add('make_visible')
        },
        onLeaveBack: () => {
          backgroundElements[3].classList.remove('make_visible')
        }
      })

      gsap
        .timeline({
          scrollTrigger: {
            // markers: true,
            trigger: steps[3],
            start: 'top bottom',
            end: 'center 60%',
            scrub: true
          }
        })
        .to('.mum_message_section', { y: dontKnowheight, roundProps: 'y' }, 0)

      gsap
        .timeline({
          scrollTrigger: {
            // markers: true,
            trigger: steps[4],
            start: 'top bottom',
            end: 'center 60%',
            scrub: true
          }
        })
        .to('.mum_message_section', { y: -8, roundProps: 'y' }, 0)
    },
    { scope: sectionRef }
  )

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn('not-prose relative grid min-h-screen w-full text-lg md:text-xl', pinType, className)}
    >
      {children}
    </section>
  )
}

export function ScrollBackground({
  className,
  bgClassName,
  children
}: {
  className?: string
  bgClassName?: string
  children: ReactNode
}) {
  return (
    <div className={cn('pinned_background', className)}>
      <div className={cn('pinned_background_wrapper', bgClassName)}>{children}</div>
    </div>
  )
}

export function ScrollForeground({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn('pinned_foreground mx-auto', className)}
      style={{
        width: `min(100% - 40px, ${ARTICLEWIDTH.maxWidth}px)`
      }}
    >
      {children}
    </div>
  )
}

export function ScrollTextChapter({
  children,
  className,
  position,
  step,
  id
}: {
  children: ReactNode
  className: string
  id?: string
  position?: string
  step?: boolean
}) {
  return (
    <div className={cn('chapter_wrapper', className, position)} id={id}>
      {addClassToChildren(children, step ? 'step' : '')}
    </div>
  )
}
