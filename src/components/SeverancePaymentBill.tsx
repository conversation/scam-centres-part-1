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
            start: 'top center',
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
        imgClassName='aspect-[103/121] max-h-[600px] object-contain  bill_wrapperImg'
        loading='eager'
        alt='A list of charges for scam centre employees, including fees for using the toilet and viewing the sea air.'
        source='Source: Tencent QQ/Author provided'
        sourceLink='https://news.qq.com/rain/a/20221031A05BT400'
        caption='An itemised bill for a scam worker in Cambodia.'
      />

      <div className='not-prose absolute left-1/2 top-0 aspect-[103/121] h-auto max-h-[600px] w-full -translate-x-1/2 sm:h-screen sm:w-auto'>
        <div className='absolute right-[5%] top-[41.6%] rotate-[6.1deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>Floor Damage Fee - US$1,100</span>
        </div>
        {/* <div className='absolute left-[76.5%] top-[42.7%] rotate-[6.1deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>US$1,100</span>
        </div> */}
        <div className='absolute right-[5.5%] top-[45.3%] rotate-[6.1deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>Chair Damage Fee - US$550</span>
        </div>
        {/* <div className='absolute left-[76.5%] top-[46.8%] rotate-[6.1deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>US$550</span>
        </div> */}
        <div className='absolute right-[7.3%] top-[56.1%] rotate-[6.8deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>Drinking Water - US$410</span>
        </div>
        {/* <div className='absolute left-[74.5%] top-[57.7%] rotate-[6.8deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>US$410</span>
        </div> */}
        <div className='absolute right-[9.5%] top-[66.6%] rotate-[7.3deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>Toilet Usage Fee - US$300</span>
        </div>
        {/* <div className='absolute left-[73.5%] top-[67.9%] rotate-[7.3deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>US$300</span>
        </div> */}
        <div className='absolute right-[10%] top-[69.5%] rotate-[7.6deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>
            Seaside Air Breathing Fee - US$1,000
          </span>
        </div>
        {/* <div className='absolute left-[73.5%] top-[71.5%] rotate-[7.6deg]'>
          <span className='severenceTranslation bg-neutral-900 p-1 opacity-0'>US$1,000</span>
        </div> */}
      </div>
    </section>
  )
}
