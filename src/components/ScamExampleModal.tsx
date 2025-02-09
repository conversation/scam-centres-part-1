import { useEffect, useRef } from 'react'
import PhoneGraphic from './PhoneGraphic'
import { TextMessage } from './TextMessage'
import Imgix from 'react-imgix'
import gsap from 'gsap'

export default function ScamExampleModal() {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  const showModal = () => {
    dialogRef.current?.showModal()
    document.body.style.overflow = 'hidden'
    const firstMessage = document.querySelector('.firstModalMessage')
    const modalMessageWrapper = document.querySelector('.modalMessageWrapper')

    if (!firstMessage || !modalMessageWrapper) return

    gsap.set('.firstModalMessage', {
      marginTop: modalMessageWrapper.clientHeight - firstMessage.clientHeight + 'px'
    })
  }

  const hideModal = () => {
    document.body.style.overflow = 'scroll'
    dialogRef.current?.close()
  }

  useEffect(() => {
    function dialogClickHandler(e: MouseEvent) {
      const target = e.target as HTMLElement

      if (target.tagName !== 'DIALOG') return // Prevents issues with forms

      const dialog = target as HTMLDialogElement
      const rect = dialog.getBoundingClientRect()

      const clickedInDialog =
        rect.top <= e.clientY && e.clientY <= rect.bottom && rect.left <= e.clientX && e.clientX <= rect.right

      if (!clickedInDialog) hideModal()
    }

    const dialog = dialogRef.current
    if (dialog) {
      dialog.addEventListener('click', dialogClickHandler)
      return () => dialog.removeEventListener('click', dialogClickHandler)
    }
  }, [])

  return (
    <div className='flex justify-center'>
      <button
        onClick={showModal}
        className='mx-auto w-fit text-balance border bg-red-500/20 px-3 py-2 transition-colors duration-150 ease-in-out hover:bg-red-500/30'
      >
        Click here to see how a real scam unfolded
      </button>
      <dialog
        id='phoneModal'
        ref={dialogRef}
        className='not-prose top-1/2 m-0 mx-auto aspect-[1/2] h-auto max-h-[85vh] w-auto -translate-y-1/2 rounded-xl bg-transparent shadow-2xl shadow-white/20 backdrop:backdrop-blur-sm backdrop:backdrop-brightness-50 max-sm:max-w-[75%] sm:max-w-[90%]'
      >
        <PhoneGraphic className='modalPhone !m-0 !h-full !max-h-none !w-full !max-w-none'>
          <button
            autoFocus
            onClick={hideModal}
            className='absolute left-1 top-1 flex aspect-square h-5 w-5 select-none items-center justify-center rounded-sm bg-red-400 font-base text-3xl text-white'
          >
            &#215;
          </button>

          <div className='modalMessageWrapper flex h-[calc(100%-32px)] flex-col bg-neutral-700'>
            <div className='bg-neutral-400 p-1 text-center text-xs font-light opacity-55'>UNKNOWN CONTACT</div>

            {/* <div className='mx-auto w-min rounded bg-neutral-300 px-2 py-1 text-center text-xs'>Today</div> */}

            <div className='flex-grow snap-y snap-mandatory space-y-4 overflow-y-scroll py-4'>
              <TextMessage
                className='firstModalMessage relative ml-4 w-full max-w-[75%] snap-end scroll-my-4'
                sender={false}
                time='9:56 am'
              >
                <p className='text-pretty text-base sm:text-lg'>
                  Hello, are you the person Anna recommended to do the translation service for me?
                </p>
              </TextMessage>

              <TextMessage
                className='relative ml-auto mr-4 w-full max-w-[60%] snap-end scroll-my-4'
                sender={true}
                time='9:56 am'
              >
                <p className='text-pretty text-base sm:text-lg'>
                  No, sorry, I do not know Anna and cannot do translation.
                </p>
              </TextMessage>

              <TextMessage
                className='relative ml-4 w-full max-w-[75%] snap-end scroll-my-4'
                sender={false}
                time='9:56 am'
              >
                <p className='text-pretty text-base sm:text-lg'>
                  No way, it is so important, how did Anna mess this up. I told her that I need a Cantonese speaker for
                  today’s conference. Do you have time?
                </p>
              </TextMessage>

              <TextMessage
                className='relative ml-auto mr-4 w-full max-w-[75%] snap-end scroll-my-4'
                sender={true}
                time='9:56 am'
              >
                <p className='text-pretty text-base sm:text-lg'>
                  Sorry again, but I really do not know this Anna, and I've never done a translation job, you are
                  talking to the wrong person.
                </p>
              </TextMessage>

              <TextMessage
                className='relative ml-4 w-full max-w-[50%] snap-end scroll-my-4'
                sender={false}
                time='9:57 am'
              >
                <p className='text-pretty text-base sm:text-lg'>Oh, so sorry, you are not Jia Li?</p>
              </TextMessage>

              <TextMessage
                className='relative ml-auto mr-4 w-full max-w-[50%] snap-end scroll-my-4'
                sender={true}
                time='9:57 am'
              >
                <p className='text-pretty text-base sm:text-lg'>No, I am not Jia Li, you've got wrong number.</p>
              </TextMessage>

              <TextMessage
                className='relative ml-4 w-full max-w-[55%] snap-end scroll-my-4'
                sender={false}
                time='9:57 am'
              >
                <p className='text-pretty text-base sm:text-lg'>
                  I am so sorry, please accept my apologisies for this.
                </p>
              </TextMessage>

              <TextMessage
                className='relative ml-auto mr-4 w-full max-w-[45%] snap-end scroll-my-4'
                sender={true}
                time='10:01 am'
              >
                <p className='text-pretty text-base sm:text-lg'>Have a nice day!</p>
              </TextMessage>

              <TextMessage
                className='relative ml-4 w-full max-w-[75%] snap-end scroll-my-4'
                sender={false}
                time='10:01 am'
              >
                <p className='text-pretty text-base sm:text-lg'>
                  Thank you, you too! I am so lucky you are such a nice person and didn't mind my rudeness.
                </p>
              </TextMessage>

              <div className='my-8 grid w-full place-items-center'>
                <div className='loader'></div>
              </div>

              <TextMessage
                className='relative ml-4 w-full max-w-[75%] snap-end scroll-my-4'
                sender={false}
                time='12:04 pm'
              >
                <p className='text-pretty text-base sm:text-lg'>
                  I did my conference successfully despite the small translation problem. Again, apologisies for talking
                  so rudely to you and the inconvenience. How was your day? It is my first time in Hong Kong, I'm just
                  so excited to e-meet you because of that "accident".
                </p>
              </TextMessage>

              <TextMessage
                className='relative ml-4 w-full max-w-[75%] snap-end scroll-my-4'
                sender={false}
                time='2:43 pm'
              >
                <div className='mb-4'>
                  <Imgix
                    className='aspect-[229/497] max-h-[500px] w-full rounded-md object-cover object-[50%_35%]'
                    imgixParams={{
                      fit: 'crop',
                      auto: 'format',
                      q: 15
                    }}
                    htmlAttributes={{
                      loading: 'lazy',
                      width: '100%',
                      height: 'auto'
                    }}
                    src='https://images.theconversation.com/files/617505/original/file-20240905-18-tggyau.jpg'
                    sizes='(max-width: 599px) 100vw, (min-width: 600px) 750px, 800px'
                  />
                </div>
              </TextMessage>

              <div className='my-8 grid w-full place-items-center'>
                <div className='loader'></div>
              </div>

              <TextMessage
                className='relative ml-4 w-full max-w-[75%] snap-end scroll-my-4'
                sender={false}
                time='12:04 pm'
              >
                <p className='text-pretty text-base sm:text-lg'>
                  The recent market of digital currency is relatively good. I am operating digital currency.
                </p>
              </TextMessage>

              <TextMessage
                className='relative ml-4 w-full max-w-[75%] snap-end scroll-my-4'
                sender={false}
                time='12:05 pm'
              >
                <p className='text-pretty text-base sm:text-lg'>Are you ready to operate digital currency?</p>
              </TextMessage>

              <div className='my-8 grid w-full place-items-center'>
                <div className='loader'></div>
              </div>

              <TextMessage
                className='relative ml-auto mr-4 w-full max-w-[60%] snap-end scroll-my-4'
                sender={true}
                time='10:22 pm'
              >
                <p className='text-pretty text-base sm:text-lg'>Let me think about it for a few days.</p>
              </TextMessage>

              <TextMessage
                className='relative ml-4 w-full max-w-[60%] snap-end scroll-my-4'
                sender={false}
                time='10:22 pm'
              >
                <p className='text-pretty text-base sm:text-lg'>
                  I don't understand, what's the point of considering this?
                </p>
              </TextMessage>

              <TextMessage
                className='relative ml-4 w-full max-w-[50%] snap-end scroll-my-4'
                sender={false}
                time='10:22 pm'
              >
                <p className='text-pretty text-base sm:text-lg'>It's not a bad thing after all.</p>
              </TextMessage>

              <TextMessage
                className='relative ml-auto mr-4 w-full max-w-[45%] snap-end scroll-my-4'
                sender={true}
                time='10:23 pm'
              >
                <p className='text-pretty text-base sm:text-lg'>It's ok, I'm not in a hurry.</p>
              </TextMessage>

              <TextMessage
                className='relative ml-4 w-full max-w-[50%] snap-end scroll-my-4'
                sender={false}
                time='10:23 pm'
              >
                <p className='text-pretty text-base sm:text-lg'>I'm not saying whether it's urgent or not.</p>
              </TextMessage>

              <TextMessage
                className='relative ml-4 w-full max-w-[49%] snap-end scroll-my-4'
                sender={false}
                time='10:24 pm'
              >
                <p className='text-pretty text-base sm:text-lg'>But I think you are suspicious of me.</p>
              </TextMessage>

              <TextMessage
                className='relative ml-4 w-full max-w-[40%] snap-end scroll-my-4'
                sender={false}
                time='10:24 pm'
              >
                <p className='text-pretty text-base sm:text-lg'>I'm a bit blunt.</p>
              </TextMessage>

              <TextMessage
                className='relative ml-4 w-full max-w-[50%] snap-end scroll-my-4'
                sender={false}
                time='10:24 pm'
              >
                <p className='text-pretty text-base sm:text-lg'>Don't like beating around the bush.</p>
              </TextMessage>

              <TextMessage
                className='relative ml-auto mr-4 w-full max-w-[30%] snap-end scroll-my-4'
                sender={true}
                time='10:25 pm'
              >
                <p className='text-pretty text-base sm:text-lg'>Yes.</p>
              </TextMessage>

              <div className='my-8 grid w-full place-items-center'>
                <div className='loader'></div>
              </div>

              <TextMessage
                className='relative ml-4 w-full max-w-[75%] snap-end scroll-my-4'
                sender={false}
                time='1:19 pm'
              >
                <p className='text-pretty text-base sm:text-lg'>
                  I don't know why you're causing issues over something so small. It's affecting our relationship, and I
                  feel something's wrong between us.
                </p>
              </TextMessage>

              <TextMessage
                className='relative ml-4 w-full max-w-[75%] snap-end scroll-my-4'
                sender={false}
                time='1:20 pm'
              >
                <p className='text-pretty text-base sm:text-lg'>
                  I've already told you, if you deposit three to five thousand, I'll help you make a profit, and I’ll
                  prove what I said before. The misunderstanding between us will disappear.
                </p>
              </TextMessage>

              <TextMessage
                className='relative ml-auto mr-4 w-full max-w-[60%] snap-end scroll-my-4'
                sender={true}
                time='1:25 pm'
              >
                <p className='text-pretty text-base sm:text-lg'>Ok, you can introduce me to your clients.</p>
              </TextMessage>
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
          </div>
        </PhoneGraphic>
      </dialog>
    </div>
  )
}
