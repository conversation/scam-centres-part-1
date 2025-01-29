import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import Image from './Image'

export default function SeverancePaymentBill() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.bill_wrapperImg',
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
          '.severenceTranslation',
          {
            opacity: 1,
            stagger: 0.1
          },
          0
        )

      ScrollTrigger.create({
        // markers: true,
        trigger: '.bill_wrapperImg',
        start: 'top bottom',
        end: 'bottom top',
        onLeave: () => tl.restart().pause(),
        onLeaveBack: () => tl.restart().pause()
      })
    },
    { scope: sectionRef }
  )

  return (
    <section className='bill_wrapper relative w-full text-xs sm:text-sm' ref={sectionRef}>
      <Image
        src='https://images.theconversation.com/files/639930/original/file-20241220-17-2ecnyg.jpeg'
        align=''
        className=''
        imgClassName='aspect-[103/121] max-h-[80vh] object-contain  bill_wrapperImg'
        loading='eager'
        alt='A list of charges for scam centre employees, including fees for using the toilet and viewing the sea air.'
        source='Source: Tencent QQ'
        sourceLink='https://news.qq.com/rain/a/20221031A05BT400'
        caption='Internet fraud companies charge their employees all sorts of fees, including using the toilet and breathing fresh air.'
      />

      <div className='not-prose absolute left-1/2 top-0 aspect-[103/121] h-auto max-h-[80vh] w-full -translate-x-1/2 sm:h-screen sm:w-auto'>
        <div className='absolute right-[23.8%] top-[41.66%] rotate-[6.1deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>Floor Damage Fee</span>
        </div>
        <div className='absolute left-[76.5%] top-[42.7%] rotate-[6.1deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>~A$1,750</span>
        </div>
        <div className='absolute right-[24.2%] top-[45.3%] rotate-[6.1deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>Chair Damage Fee</span>
        </div>
        <div className='absolute left-[76.5%] top-[46.8%] rotate-[6.1deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>~A$875</span>
        </div>
        <div className='absolute right-[25.4%] top-[56.1%] rotate-[6.8deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>Drinking Water</span>
        </div>
        <div className='absolute left-[74.5%] top-[57.7%] rotate-[6.8deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>~A$650</span>
        </div>
        <div className='absolute right-[26.6%] top-[66.6%] rotate-[7.3deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>Toilet Usage Fee</span>
        </div>
        <div className='absolute left-[73.5%] top-[67.9%] rotate-[7.3deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>~A$480</span>
        </div>
        <div className='absolute right-[27.4%] top-[69.5%] rotate-[7.6deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>Seaside Air Breathing Fee</span>
        </div>
        <div className='absolute left-[73.5%] top-[71.5%] rotate-[7.6deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>~A$1,600</span>
        </div>
      </div>
    </section>
  )
}
