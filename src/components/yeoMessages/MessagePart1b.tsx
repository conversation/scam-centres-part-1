import { cn } from '../../util/helpers'
import PhoneGraphic from '../PhoneGraphic'

export default function MessagePart1b({ className }: { className: string }) {
  return (
    <div
      className={cn(
        'full_screen_media h-full place-content-center bg-neutral-800 after:absolute after:top-[99.5%] after:h-20 after:w-full after:bg-gradient-to-b after:from-neutral-800 after:content-[""]',
        className
      )}
    >
      <PhoneGraphic className='mum_phone'>
        <p className='absolute left-1/2 mt-1 -translate-x-1/2 font-base text-sm text-white'>10:47am</p>

        {/* Phone content */}
        <div className='flex h-full flex-col justify-between bg-neutral-700 p-4'>
          <div className=''>
            <h1 className='pt-2 text-center text-3xl font-bold text-white sm:pt-4'>Ben's mum</h1>
          </div>
          <div className='place-content-center'>
            <img
              className='not_fullscreen_media mx-auto mix-blend-screen'
              src='https://images.theconversation.com/files/640839/original/file-20250106-15-mqdogb.gif?ixlib=rb-4.1.0&q=10&auto=format&w=150&fit=crop&dpr=1'
              alt='audio waveform'
            />
          </div>

          <div className='mx-auto grid w-[80%] grid-cols-3 gap-2 border text-center text-neutral-700 sm:gap-5'>
            <div className='aspect-square place-content-center rounded-full bg-neutral-200 max-sm:text-[clamp(0.8rem,4vw,1.5rem)] sm:text-[clamp(0.8rem,4vw,1.5rem)]'>
              1
            </div>
            <div className='aspect-square place-content-center rounded-full bg-neutral-200 max-sm:text-[clamp(0.8rem,4vw,1.5rem)] sm:text-[clamp(0.8rem,4vw,1.5rem)]'>
              2
            </div>
            <div className='aspect-square place-content-center rounded-full bg-neutral-200 max-sm:text-[clamp(0.8rem,4vw,1.5rem)] sm:text-[clamp(0.8rem,4vw,1.5rem)]'>
              3
            </div>
            <div className='aspect-square place-content-center rounded-full bg-neutral-200 max-sm:text-[clamp(0.8rem,4vw,1.5rem)] sm:text-[clamp(0.8rem,4vw,1.5rem)]'>
              4
            </div>
            <div className='aspect-square place-content-center rounded-full bg-neutral-200 max-sm:text-[clamp(0.8rem,4vw,1.5rem)] sm:text-[clamp(0.8rem,4vw,1.5rem)]'>
              5
            </div>
            <div className='aspect-square place-content-center rounded-full bg-neutral-200 max-sm:text-[clamp(0.8rem,4vw,1.5rem)] sm:text-[clamp(0.8rem,4vw,1.5rem)]'>
              6
            </div>
            <div className='aspect-square place-content-center rounded-full bg-neutral-200 max-sm:text-[clamp(0.8rem,4vw,1.5rem)] sm:text-[clamp(0.8rem,4vw,1.5rem)]'>
              7
            </div>
            <div className='aspect-square place-content-center rounded-full bg-neutral-200 max-sm:text-[clamp(0.8rem,4vw,1.5rem)] sm:text-[clamp(0.8rem,4vw,1.5rem)]'>
              8
            </div>
            <div className='aspect-square place-content-center rounded-full bg-neutral-200 max-sm:text-[clamp(0.8rem,4vw,1.5rem)] sm:text-[clamp(0.8rem,4vw,1.5rem)]'>
              9
            </div>
            <div className='aspect-square place-content-center rounded-full bg-neutral-200 pt-2 max-sm:text-[clamp(0.8rem,4vw,1.5rem)] sm:text-[clamp(0.8rem,4vw,1.5rem)]'>
              *
            </div>
            <div className='aspect-square place-content-center rounded-full bg-neutral-200 max-sm:text-[clamp(0.8rem,4vw,1.5rem)] sm:text-[clamp(0.8rem,4vw,1.5rem)]'>
              0
            </div>
            <div className='aspect-square place-content-center rounded-full bg-neutral-200 max-sm:text-[clamp(0.8rem,4vw,1.5rem)] sm:text-[clamp(0.8rem,4vw,1.5rem)]'>
              #
            </div>
            <div className='col-start-2 flex aspect-square items-center justify-center rounded-full bg-green-500 max-sm:text-[clamp(0.8rem,4vw,1.5rem)] sm:text-[clamp(0.8rem,4vw,1.5rem)]'>
              <svg
                version='1.1'
                id='Layer_1'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                viewBox='0 0 122.88 122.27'
                className='aspect-square h-6'
              >
                <g>
                  <path
                    className='fill-white'
                    d='M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z'
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </PhoneGraphic>
    </div>
  )
}
