import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import Image from './Image'
import TextPlugin from 'gsap/TextPlugin'

export default function PhrasebookScramble() {
  const sectionRef = useRef<HTMLElement | null>(null)
  gsap.registerPlugin(TextPlugin)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const tl = gsap
        .timeline({
          scrollTrigger: {
            // markers: true,
            trigger: '.phrasebookImg',
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
          '.scramble_wrapper img',
          { opacity: 1 },
          {
            duration: 0.4,
            opacity: 0.2
          }
        )
        .to(
          '#scramble1',
          {
            duration: 2,
            text: {
              value:
                'Do not use a simple emoji to open your conversation because it shows no sense of need from your side.',
              delimiter: ' '
            }
          },
          0
        )
        .to(
          '#scramble2',
          {
            duration: 2,
            text: {
              value:
                'If a girl shares many selfies with a peace gesture, you could open the conversation saying: ‘You look so cute when you are doing the peace sign in your photos.’ How can a girl say no to a guy who pays attention to details such as her poses?',
              delimiter: ' '
            }
          },
          '<20%'
        )
        .to(
          '#scramble3',
          {
            duration: 2,
            text: {
              value: `
                Man: I found that there is something in your eyes (to raise the girl’s curiosity)<br>
                Woman: What is that?<br>
                Man: There is a goodlooking guy looking at you (link the answer to yourself)<br>
                Woman: Haha, you are full of yourself (let the girl make fun of you)<br>
                Man: I have to look good to be able to talk to someone as cute as you.`,
              delimiter: ' '
            }
          },
          '<40%'
        )

      ScrollTrigger.create({
        // markers: true,
        trigger: '.phrasebookImg',
        start: 'top bottom',
        end: 'bottom top',
        onLeave: () => tl.restart().pause(),
        onLeaveBack: () => tl.restart().pause()
      })
    },
    { scope: sectionRef }
  )

  return (
    <section className='scramble_wrapper relative w-full text-xs sm:text-sm' ref={sectionRef}>
      <Image
        src='https://images.theconversation.com/files/620411/original/file-20240919-16-tzhkq1.png'
        align=''
        className=''
        imgClassName='object-contain bill_wrapperImg aspect-[927/634] object-contain phrasebookImg'
        loading='eager'
        caption='Handwritten copy of some passages of a scam phrase book'
        alt='Handwritten copy of some passages of a scam phrase book'
        source='Source: Author provided.'
        sourceLink='https://mp.weixin.qq.com/s/zWe0PWrW3TUQlGnX67ZFKA'
      />

      <div className='not-prose absolute left-1/2 top-0 aspect-[927/634] w-image-width -translate-x-1/2 md:w-image-width-md'>
        <div className='absolute left-[3%] top-[5%]'>
          <span id='scramble1' className='bg-neutral-900 py-1'></span>
        </div>
        <div className='absolute left-[3%] top-[41%]'>
          <span id='scramble2' className='bg-neutral-900 py-1'></span>
        </div>
        <div className='absolute left-[3%] top-[69%] max-md:hidden'>
          <span id='scramble3' className='bg-neutral-900 py-1'></span>
        </div>
      </div>
    </section>
  )
}
