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

  // General scroll section
  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section || section.classList.contains('intro_section') || section.classList.contains('yeo_messages')) return

      const steps = section.querySelectorAll('.pinned_foreground .step')
      const backgroundElements = section.querySelectorAll('.pinned_background_wrapper > *')

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
    },
    { scope: sectionRef }
  )

  // Intro animation
  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section || !section.classList.contains('intro_section')) return

      setHeaderHeight(section.clientHeight)
      const windowWidth = 640

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
          .to(card, { rotationY: window.innerWidth < windowWidth ? 0 : 2, duration: 1, ease: 'power1.inOut' }, 0)
          .to(
            background,
            { xPercent: window.innerWidth < windowWidth ? 0 : -100, duration: 1, ease: 'power1.inOut' },
            0
          )
          .to(card, { rotationY: window.innerWidth < windowWidth ? 0 : -2, duration: 1, ease: 'power1.inOut' })
          .to(background, { xPercent: window.innerWidth < windowWidth ? 0 : 0, duration: 1, ease: 'power1.inOut' }, '<')
          .to(card, { rotationY: 0, duration: 1, ease: 'power1.inOut' })

        // Animate message delete
        gsap
          .timeline({
            scrollTrigger: {
              // markers: true,
              trigger: steps[0],
              start: 'top 90%',
              end: `center ${window.innerWidth < 640 ? 83.33333333 : 60}%`,
              scrub: true
            }
          })
          .to('#introDeleteIcon', { display: 'block', autoAlpha: 1, duration: 0.3, ease: 'power1.inOut' })
          .to(
            '.introTextMessage',
            {
              display: 'block',
              backgroundColor: '#ecc3C0',
              duration: 0.3,
              ease: 'power1.inOut'
            },
            0
          )

        // Animate angry reply
        gsap
          .timeline({
            scrollTrigger: {
              // markers: true,
              trigger: steps[1],
              start: 'top 90%',
              end: `center ${window.innerWidth < 640 ? 83.33333333 : 60}%`,
              scrub: true
            }
          })
          .to('#introDeleteIcon', { xPercent: -150, autoAlpha: 0, ease: 'power1.inOut' })
          .to('.introTextMessage', { xPercent: -150, autoAlpha: 0, ease: 'power1.inOut' }, 0)
          .fromTo('.introTextMessageReply', { yPercent: 150 }, { yPercent: 0, autoAlpha: 1, ease: 'power1.inOut' }, 0.2)
          .to('#introBlockBtn', { backgroundColor: '#d8352a', color: 'white', ease: 'power1.inOut' }, 0)

        // Animate scammer reply
        gsap
          .timeline({
            scrollTrigger: {
              // markers: true,
              trigger: steps[2],
              start: 'top 90%',
              end: `center ${window.innerWidth < 640 ? 83.33333333 : 60}%`,
              scrub: true
            }
          })
          .to(['#introDeleteIcon', '.introTextMessage'], { display: 'none' })
          .fromTo(
            '.scammerReply',
            { y: 200, autoAlpha: 0 },
            {
              y: document.querySelector('.introTextMessageReply')!.clientHeight + 16,
              autoAlpha: 1,
              ease: 'power1.inOut'
            },
            0
          )
      }
    },
    { scope: sectionRef }
  )

  // Yeo messages animation
  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section || !section.classList.contains('yeo_messages')) return

      const steps = section.querySelectorAll('.pinned_foreground .step')
      const backgroundElements = section.querySelectorAll('.pinned_background_wrapper > *')

      const cantWaitheight = document.querySelector('.cant_wait')?.clientHeight
      const dontKnowheight = document.querySelector('.dont_know')?.clientHeight

      if (!steps.length || !backgroundElements.length || !cantWaitheight || !dontKnowheight) return

      gsap.set('.mum_message_section', { y: cantWaitheight + dontKnowheight })

      // First message animates on
      gsap
        .timeline({
          scrollTrigger: {
            // markers: true,
            trigger: steps[0],
            start: 'top 90%',
            end: `center ${window.innerWidth < 640 ? 83.33333333 : 60}%`,
            scrub: true
          }
        })
        .to('.aunt_phone', { scale: 0.6, xPercent: -30, yPercent: 10, ease: 'power1.inOut' })
        .fromTo(
          '.mum_phone',
          { xPercent: -60, yPercent: -60, autoAlpha: 0, ease: 'power1.inOut' },
          { xPercent: -50, yPercent: -50, autoAlpha: 1, ease: 'power1.inOut' },
          0
        )

      steps.forEach((step, index) => {
        if (index !== 0 && index < 3) {
          ScrollTrigger.create({
            // markers: true,
            trigger: step,
            start: 'top 90%',
            onEnter: () => {
              backgroundElements[index].classList.add('make_visible')
              if (window.innerWidth > 640) {
                backgroundElements[index - 1].classList.remove('make_visible')
              }
            },
            onLeaveBack: () => {
              backgroundElements[index].classList.remove('make_visible')
              if (window.innerWidth > 640) {
                backgroundElements[index - 1].classList.add('make_visible')
              }
            }
          })
        }
      })

      gsap
        .timeline({
          scrollTrigger: {
            // markers: true,
            trigger: steps[3],
            start: 'top bottom',
            end: `center ${window.innerWidth < 640 ? 90 : 60}%`,
            scrub: true
          }
        })
        .to('.cant_wait', { alpha: 1 })
        .to('.mum_message_section', { y: cantWaitheight - 28 }, 0)

      gsap
        .timeline({
          scrollTrigger: {
            // markers: true,
            trigger: steps[4],
            start: 'top bottom',
            end: `center ${window.innerWidth < 640 ? 90 : 60}%`,
            scrub: true
          }
        })
        .to('.dont_know', { alpha: 1 })
        .to('.mum_message_section', { y: cantWaitheight - dontKnowheight - 28 - 8 }, 0)
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
