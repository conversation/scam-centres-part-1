import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import Image from './Image'

export default function JobAdTranslation() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const tl = gsap
        .timeline({
          scrollTrigger: {
            // markers: true,
            trigger: '.jobAdImg',
            start: 'top center',
            // end: 'center center',
            onEnterBack: () => {
              if (tl.paused()) {
                tl.play()
              }
            }
          }
        })
        .fromTo(
          '.jobAd img',
          { opacity: 1 },
          {
            duration: 0.4,
            opacity: 0.7
          }
        )
        .to(
          '.translation',
          {
            opacity: 1,
            stagger: 0.1
          },
          0
        )

      ScrollTrigger.create({
        // markers: true,
        trigger: '.jobAdImg',
        start: 'top bottom',
        end: 'bottom top',
        onLeave: () => tl.restart().pause(),
        onLeaveBack: () => tl.restart().pause()
      })
    },
    { scope: sectionRef }
  )

  return (
    <section className='jobAd relative mt-6 w-full text-sm' ref={sectionRef}>
      <Image
        src='https://images.theconversation.com/files/643962/original/file-20250122-15-qmfqy7.png'
        align='right'
        className=''
        imgClassName='aspect-[95/166] object-contain jobAdImg max-h-[600px]'
        loading='lazy'
        alt='A Telegram ad for what sounds like a legitimate job.'
        source='Source: Telegram/Author provided'
        sourceLink=''
        caption='A Telegram ad for what sounds like a legitimate job.'
      />

      <div className='sm:imgfloat-right not-prose absolute right-1/2 top-0 aspect-[95/166] h-screen max-h-[600px] w-auto translate-x-1/2 sm:right-0 sm:h-auto sm:w-full sm:translate-x-0'>
        <div className='absolute left-[9%] top-[10%]'>
          <span className='translation bg-neutral-900 p-1 opacity-0'>Position: General worker; Finance; Business</span>
        </div>
        <div className='absolute left-[9%] top-[16%]'>
          <span className='translation bg-neutral-900 p-1 opacity-0'>Functions:</span>
        </div>
        <div className='absolute left-[9%] top-[20%]'>
          <span className='translation bg-neutral-900 p-1 opacity-0'>
            1: Work within park and follow up on project construction
            <br />
            2: Information management, file sorting, collection, registration
          </span>
        </div>
        {/* <div className='absolute left-[9%] top-[23%]'>
          <span className='translation bg-neutral-900 p-1 opacity-0'>
            2: Information management, file sorting, collection, registration
          </span>
        </div> */}
        <div className='absolute left-[9%] top-[43%]'>
          <span className='translation bg-neutral-900 p-1 opacity-0'>Benefits</span>
        </div>
        <div className='absolute left-[9%] top-[47%]'>
          <span className='translation bg-neutral-900 p-1 opacity-0'>Salary: workshop position ¥19,000/month</span>
        </div>
        <div className='absolute left-[9%] top-[52.7%]'>
          <span className='translation bg-neutral-900 p-1 opacity-0'>
            1: Food and accommodation included
            <br />
            2: Standard working system, 8 working hours per day, 5 days of work and 2 days of rest
          </span>
        </div>
        {/* <div className='absolute left-[9%] top-[56%]'>
          <span className='translation bg-neutral-900 p-1 opacity-0'>
            2: Standard working system, 8 working hours per day, 5 days of work and 2 days of rest
          </span>
        </div> */}
        <div className='absolute left-[9%] top-[73%]'>
          <span className='translation bg-neutral-900 p-1 opacity-0'>
            4: Equipped with staff dormitory building
            <br />
            5: Stable work income, focus on employee benefits and needs
          </span>
        </div>
        {/* <div className='absolute left-[9%] top-[77%]'>
          <span className='translation bg-neutral-900 p-1 opacity-0'>
            5: Stable work income, focus on employee benefits and needs
          </span>
        </div> */}
      </div>
    </section>
  )
}
