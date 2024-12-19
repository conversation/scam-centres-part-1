import { ReactNode, useRef } from 'react'
import { addClassToChildren, cn } from '../util/helpers'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ARTICLEWIDTH } from '../util/constants'
import { useSetAtom } from 'jotai'
import { headerHeight } from '../context/atom'

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
  const setHeaderHeight = useSetAtom(headerHeight)

  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return

      const steps = section.querySelectorAll('.pinned_foreground .step')
      const backgroundElements = section.querySelectorAll('.pinned_background_wrapper > *')

      steps.forEach((step, index) => {
        const element = backgroundElements[index + 1]

        if (element) {
          ScrollTrigger.create({
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
    },
    { scope: sectionRef }
  )

  // Intro animation
  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section || !section.classList.contains('intro_section')) return

      setHeaderHeight(section.clientHeight)

      const steps = section.querySelectorAll('.pinned_foreground .step')
      const foreground = section.querySelectorAll('.pinned_foreground')
      const background = section.querySelectorAll('.pinned_background')
      const card = section.querySelectorAll('.phone_card')

      if (foreground && background && card) {
        // Card moves side to side and perspective changes
        gsap
          .timeline({
            scrollTrigger: {
              // markers: true,
              trigger: foreground,
              start: 'top top-=10%',
              endTrigger: '#introLastTrigger',
              end: 'bottom top',
              scrub: true
            }
          })
          .to(card, { rotationY: window.innerWidth < 768 ? 0 : 2, duration: 1, ease: 'power1.inOut' }, 0)
          .to(background, { xPercent: window.innerWidth < 768 ? 0 : -90, duration: 1, ease: 'power1.inOut' }, 0)
          .to(card, { rotationY: window.innerWidth < 768 ? 0 : -2, duration: 1, ease: 'power1.inOut' })
          .to(background, { xPercent: window.innerWidth < 768 ? 0 : 0, duration: 1, ease: 'power1.inOut' }, '<')
          .to(card, { rotationY: 0, duration: 1, ease: 'power1.inOut' })

        // First message animates on
        gsap
          .timeline()
          .fromTo(
            '.introTextMessage',
            { alpha: 0, yPercent: 10 },
            { yPercent: 0, alpha: 1, ease: 'power1.inOut', duration: 0.7, delay: 0.5, stagger: 0.5 }
          )

        // Animate message delete
        ScrollTrigger.create({
          // markers: true,
          trigger: steps[0],
          start: 'top 90%',
          onEnter: () => {
            // Make visible
            gsap.to('#introDeleteIcon', { display: 'block', alpha: 1, duration: 0.3, ease: 'power1.inOut' })
            gsap.to('.introTextMessage', {
              display: 'block',
              backgroundColor: '#ecc3C0',
              duration: 0.3,
              ease: 'power1.inOut'
            })

            // After pause make invisible
            gsap.to('#introDeleteIcon', { alpha: 0, duration: 0.3, ease: 'power1.inOut', delay: 1.5 })
            gsap.to('.introTextMessage', { alpha: 0, duration: 0.3, ease: 'power1.inOut', delay: 1.5, stagger: -0.5 })
          },
          onLeaveBack: () => {
            // Make delete invisible
            gsap.to('#introDeleteIcon', { alpha: 0, duration: 0.3, ease: 'power1.inOut' })
            gsap.to('.introTextMessage', { backgroundColor: '#cefdef', duration: 0.3, ease: 'power1.inOut' })

            // Make message visible
            gsap.to('.introTextMessage', { display: 'block', alpha: 1, duration: 0.3, ease: 'power1.inOut' })
          }
        })

        ScrollTrigger.create({
          markers: true,
          trigger: steps[1],
          start: 'top 90%',
          onEnter: () => {
            gsap.to('#introDeleteIcon', { display: 'none', alpha: 0 })
            gsap.to('.introTextMessage', { display: 'none', alpha: 0 })
            // gsap.to('.introTextMessageReply', { alpha: 1, duration: 0.3, ease: 'power1.inOut' })

            gsap.to('#introReportBtn', {
              color: 'white',
              backgroundColor: '#d8352a',
              duration: 0.3,
              ease: 'power1.inOut'
            })
            gsap.to('#introBlockBtn', {
              color: 'white',
              backgroundColor: '#d8352a',
              duration: 0.3,
              ease: 'power1.inOut'
            })
          },
          onLeaveBack: () => {
            gsap.to('#introDeleteIcon', { alpha: 1, duration: 0.3, ease: 'power1.inOut' })
            gsap.to('.introTextMessage', { alpha: 1, duration: 0.3, ease: 'power1.inOut' })

            gsap.to('#introReportBtn', {
              color: '#148cb8',
              backgroundColor: '#d6d6da',
              duration: 0.3,
              ease: 'power1.inOut'
            })
            gsap.to('#introBlockBtn', {
              color: '#148cb8',
              backgroundColor: '#d6d6da',
              duration: 0.3,
              ease: 'power1.inOut'
            })
          }
        })

        // ScrollTrigger.create({
        //   markers: true,
        //   trigger: steps[2],
        //   start: 'top 90%',
        //   onEnter: () => {
        //     gsap.to('#introDeleteIcon', { display: 'none' })
        //     gsap.to('.introTextMessage', { display: 'none' })

        //     gsap.to('.introTextMessageReply', { opacity: 1, duration: 0.3, ease: 'power1.inOut' })
        //   },
        //   onLeaveBack: () => {}
        // })
      }
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
