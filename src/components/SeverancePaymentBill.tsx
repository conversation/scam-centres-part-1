import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef } from 'react'
import Image from './Image'

export default function SeverancePaymentBill() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      console.log('resize')
      ScrollTrigger.refresh()
    })

    document.querySelectorAll('.tweet1').forEach((el) => observer.observe(el))

    window.addEventListener('load', () => {
      ScrollTrigger.refresh()
    })
  }, [])

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'center center',
            end: 'center center',
            onEnterBack: () => {
              if (tl.paused()) {
                tl.play()
              }
            }
          }
        })
        .fromTo(
          '.bill_wrapper img',
          { opacity: 1 },
          {
            duration: 0.4,
            opacity: 0.7
          }
        )
        .to(
          ['.scramble1', '.scramble2', '.scramble3', '.scramble4'],
          {
            opacity: 1,
            stagger: 0.1
          },
          0
        )

      ScrollTrigger.create({
        // markers: true,
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onLeave: () => tl.restart().pause(),
        onLeaveBack: () => tl.restart().pause()
      })
    },
    { scope: sectionRef }
  )

  return (
    <section className='bill_wrapper relative w-full text-[10px] sm:text-sm lg:text-lg' ref={sectionRef}>
      <Image
        src='https://images.theconversation.com/files/639930/original/file-20241220-17-2ecnyg.jpeg'
        align=''
        className=''
        imgClassName='sm:aspect-[103/121] aspect-[1075/1263] w-full'
        loading='eager'
        alt='A list of charges for scam centre employees, including fees for using the toilet and viewing the sea air.'
        source='Source: Tencent QQ'
        sourceLink='https://news.qq.com/rain/a/20221031A05BT400'
        caption='Internet fraud companies charge their employees all sorts of fees, including using the toilet and breathing fresh air.'
      />

      <div className='not-prose max-md:w-image-width w-image-width-md absolute left-1/2 top-[-0.6%] aspect-[1075/1263] -translate-x-1/2 max-sm:left-[55%] sm:aspect-[103/121]'>
        <div className='absolute right-[12%] top-[42.7%] rotate-[6.1deg]'>
          <span className='scramble1 bg-neutral-900 p-1 opacity-0'>Floor Damage Fee</span>
          <span className='scramble1 ml-6 bg-neutral-900 p-1 opacity-0 md:ml-10'>~A$1,750</span>
        </div>
        <div className='absolute right-[13%] top-[46.3%] rotate-[6.1deg]'>
          <span className='scramble2 bg-neutral-900 p-1 opacity-0'>Chair Damage Fee</span>
          <span className='scramble2 ml-6 bg-neutral-900 p-1 opacity-0 md:ml-10'>~A$875</span>
        </div>
        <div className='absolute right-[14%] top-[57.1%] rotate-[6.8deg]'>
          <span className='scramble2 bg-neutral-900 p-1 opacity-0'>Drinking Water</span>
          <span className='scramble2 ml-6 bg-neutral-900 p-1 opacity-0 md:ml-10'>~A$650</span>
        </div>
        <div className='absolute right-[15.6%] top-[67.7%] rotate-[7.3deg]'>
          <span className='scramble3 bg-neutral-900 p-1 opacity-0'>Toilet Usage Fee</span>
          <span className='scramble3 ml-6 bg-neutral-900 p-1 opacity-0 md:ml-10'>~A$480</span>
        </div>
        <div className='absolute right-[16%] top-[70.5%] rotate-[7.6deg]'>
          <span className='scramble4 bg-neutral-900 p-1 opacity-0'>Seaside Air Breathing Fee</span>
          <span className='scramble4 ml-6 bg-neutral-900 p-1 opacity-0 md:ml-10'>~A$1,600</span>
        </div>
      </div>
    </section>
  )
}
