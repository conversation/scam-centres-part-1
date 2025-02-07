import PhoneGraphic from './PhoneGraphic'
import { TextMessage } from './TextMessage'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function IntroPhoneScam() {
  function getFormattedTime() {
    const now = new Date()
    let hours = now.getHours()
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12 || 12 // Convert 0 to 12 for AM/PM format
    return `${hours}:${minutes} ${ampm}`
  }

  // Intro animation
  useGSAP(() => {
    const steps = document.querySelectorAll('.intro_section .pinned_foreground .step')

    // Animate message delete
    gsap
      .timeline({
        scrollTrigger: {
          // markers: true,
          trigger: steps[0],
          start: 'top 90%',
          end: 'center 60%',
          scrub: true
        }
      })
      .to('#introDeleteIcon', { autoAlpha: 1, duration: 0.3, ease: 'power1.inOut' })
      .to(
        '.introTextMessage',
        {
          color: '#ecc3C0',
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
          end: 'center 60%',
          scrub: true
        }
      })
      .to(['#introDeleteIcon', '.introTextMessage'], {
        xPercent: -150,
        opacity: 0,
        roundProps: 'xPercent',
        ease: 'power1.inOut'
      })
      .fromTo(
        '.introTextMessageReply',
        { yPercent: 150, opacity: 0 },
        { yPercent: 0, opacity: 1, roundProps: 'yPercent', ease: 'power1.inOut' },
        0.15
      )
      .to('#introBlockBtn', { backgroundColor: '#d8352a', color: 'white', ease: 'power1.inOut' }, 0)

    // Animate scammer reply
    gsap
      .timeline({
        scrollTrigger: {
          // markers: true,
          trigger: steps[2],
          start: 'top 90%',
          end: 'center 60%',
          scrub: true
        }
      })
      .fromTo(
        '.scammerReply',
        { y: 200, autoAlpha: 0 },
        {
          y: document.querySelector('.introTextMessageReply')!.clientHeight + 16,
          autoAlpha: 1,
          ease: 'power1.inOut',
          roundProps: 'y'
        },
        0
      )
  })

  return (
    <div className='phone_card_background full_screen_media make_visible place-content-center'>
      <PhoneGraphic className=''>
        <div className='flex-grow space-y-4 overflow-clip bg-neutral-700 pb-1 pt-2'>
          <div className='bg-neutral-400 p-1 text-center text-xs font-light opacity-55'>1 UNREAD MESSAGE</div>

          <div className='mx-auto w-min rounded bg-neutral-300 px-2 py-1 text-center text-xs'>Today</div>

          <div className='relative w-full'>
            <TextMessage
              className='introTextMessage relative ml-4 mr-4 w-full max-w-[80%] animate-pulse rounded-md rounded-tl-none shadow-md'
              sender={false}
              time={getFormattedTime()}
            >
              <p className='text-pretty text-base sm:text-lg'>
                Do you want to make some money? Message "Yes" to earn $4,000 a week!
              </p>
              <div
                className='absolute bottom-[-2rem] right-0 max-w-[80%] rounded-md bg-red-300 p-1 opacity-0 shadow-md'
                id='introDeleteIcon'
              >
                <p className='text-xs'>Delete</p>
              </div>
            </TextMessage>

            <TextMessage
              className='introTextMessageReply absolute right-0 top-0 ml-auto mr-4 w-fit max-w-[65%] rounded-md opacity-0 shadow-md'
              sender={true}
              time={getFormattedTime()}
            >
              <p className='text-pretty text-base sm:text-lg'>Who are you?</p>
            </TextMessage>

            <TextMessage
              className='scammerReply absolute left-0 top-0 ml-4 max-w-[60%] rounded-md bg-green-100 opacity-0 shadow-md'
              sender={false}
              time={getFormattedTime()}
            >
              <p className='text-pretty text-base sm:text-lg'>I'm not who you think I am...</p>
              <div
                className='absolute bottom-[-2rem] right-0 max-w-[80%] rounded-md bg-red-300 p-1 opacity-0 shadow-md'
                id='introDeleteIcon'
              >
                <p className='text-xs'>Delete</p>
              </div>
            </TextMessage>
          </div>
        </div>

        {/* Block and report */}
        <div className='z-10 space-y-2 bg-neutral-300 py-2'>
          <div className='grid gap-2 px-2 font-bold'>
            <div className='flex items-center justify-evenly gap-2'>
              <div
                className='flex-grow rounded bg-neutral-200 px-2 py-1 text-center text-xs text-blue-600'
                id='introBlockBtn'
              >
                Block
              </div>
              <div
                className='flex-grow rounded bg-neutral-200 px-2 py-1 text-center text-xs text-blue-600'
                id='introReportBtn'
              >
                Report
              </div>
            </div>
          </div>
        </div>

        {/* Send message */}
        <div className='flex items-center space-x-2 bg-neutral-900 px-4 py-3'>
          <div className='flex-grow'>
            <div className='flex min-h-7 items-center rounded-full bg-neutral-800 px-4 py-2 text-neutral-200'>
              <span className='flex-grow text-xs leading-none text-neutral-600 max-sm:hidden'>Type a message</span>
            </div>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='flex aspect-square h-7 items-center justify-center rounded-full bg-green-700'>
              <svg
                height='15'
                width='15'
                xmlns='http:www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                xmlSpace='preserve'
                className='fill-neutral-50'
              >
                <path d='M508.645 18.449a10.44 10.44 0 0 0-10.826-2.085L6.715 204.446a10.44 10.44 0 0 0-6.607 8.264 10.45 10.45 0 0 0 3.995 9.796L156.23 339.253c-.004.116-.575.224-.575.342v83.592c0 3.851 2.663 7.393 6.061 9.213 1.541.827 3.51 1.236 5.199 1.236 2.026 0 4.181-.593 5.931-1.756l56.12-37.367 130.369 99.669a10.49 10.49 0 0 0 9.613 1.633 10.45 10.45 0 0 0 6.786-6.974L511.571 29.082a10.45 10.45 0 0 0-2.926-10.633M170.506 321.508c-.385.36-.7.763-1.019 1.163L31.659 217.272 456.525 54.557zm6.046 82.153v-48.454l33.852 25.887zm183.444 64.693-121.63-93.012a10.4 10.4 0 0 0-4.883-3.733l-47.29-36.163L480.392 60.86z' />
              </svg>
            </div>
          </div>
        </div>
      </PhoneGraphic>
    </div>
  )
}
