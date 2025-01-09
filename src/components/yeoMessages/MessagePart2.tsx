import { cn } from '../../util/helpers'
import PhoneGraphic from '../PhoneGraphic'

export default function MessagePart2({ className }: { className: string }) {
  return (
    <div
      className={cn(
        'full_screen_media h-full place-content-center bg-neutral-800 after:absolute after:top-[99.5%] after:h-20 after:w-full after:bg-gradient-to-b after:from-neutral-800 after:content-[""]',
        className
      )}
    >
      <PhoneGraphic>
        <p className='absolute left-1/2 mt-1 -translate-x-1/2 font-base text-sm text-white'>March 13 2024</p>
        {/* Phone content */}
        <div className='flex h-full flex-col bg-neutral-700 p-4'>
          <div className='mx-auto grid w-fit grid-cols-2 rounded-md bg-neutral-800 text-sm text-white'>
            <div className='rounded-md bg-neutral-500 px-2 py-1 text-center'>
              <p>All</p>
            </div>
            <div className='rounded-md px-2 py-1 text-center'>
              <p>Missed</p>
            </div>
          </div>
          <div className='mb-3 max-h-[20%]'>
            <h1 className='pt-2 text-xl font-bold text-white sm:pt-4 sm:text-3xl'>Recent</h1>
          </div>

          <div className='mx-auto w-full divide-y text-white sm:space-y-2'>
            <div className='grid w-full grid-cols-[15%_1fr_30%] items-center gap-4 py-1 sm:py-2'>
              <img
                src='https://images.theconversation.com/files/641408/original/file-20250109-15-kx43t5.png?ixlib=rb-4.1.0&q=10&auto=format&w=100&h=100&fit=crop&dpr=1'
                alt=''
                className='not_fullscreen_media mx-auto aspect-square h-7 sm:h-10'
              />
              {/* <div className='aspect-square place-content-center rounded-full bg-neutral-400'>



                <svg
                  className='mx-auto aspect-square h-5 sm:h-6'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z'
                    fill='#000000'
                  />
                  <path d='M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z' fill='#000000' />
                </svg>
              </div> */}
              <div>
                <div>
                  <p className='font-bold'>Mum</p>
                </div>
                <div className='text-xs leading-none text-neutral-400'>
                  <p>phone</p>
                </div>
              </div>
              <div className='place-content-center text-right text-xs text-neutral-300'>
                <p>3.49pm</p>
              </div>
            </div>
            <div className='grid w-full grid-cols-[15%_1fr_30%] items-center gap-4 py-1 sm:py-2'>
              {/* <div className='aspect-square place-content-center rounded-full bg-neutral-400'>
                <svg
                  className='mx-auto aspect-square h-5 sm:h-6'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z'
                    fill='#000000'
                  />
                  <path d='M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z' fill='#000000' />
                </svg>
              </div> */}
              <img
                src='https://images.theconversation.com/files/641408/original/file-20250109-15-kx43t5.png?ixlib=rb-4.1.0&q=10&auto=format&w=100&h=100&fit=crop&dpr=1'
                alt=''
                className='not_fullscreen_media mx-auto aspect-square h-7 sm:h-10'
              />
              <div>
                <div>
                  <p className='font-bold'>Mum</p>
                </div>
                <div className='text-xs leading-none text-neutral-400'>
                  <p>phone</p>
                </div>
              </div>
              <div className='place-content-center text-right text-xs text-neutral-300'>
                <p>3.26pm</p>
              </div>
            </div>
            <div className='grid w-full grid-cols-[15%_1fr_30%] items-center gap-4 py-1 sm:py-2'>
              {/* <div className='aspect-square place-content-center rounded-full bg-neutral-400'>
                <svg
                  className='mx-auto aspect-square h-5 sm:h-6'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z'
                    fill='#000000'
                  />
                  <path d='M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z' fill='#000000' />
                </svg>
              </div> */}
              <img
                src='https://images.theconversation.com/files/641408/original/file-20250109-15-kx43t5.png?ixlib=rb-4.1.0&q=10&auto=format&w=100&h=100&fit=crop&dpr=1'
                alt=''
                className='not_fullscreen_media mx-auto aspect-square h-7 sm:h-10'
              />
              <div>
                <div>
                  <p className='font-bold'>Mum</p>
                </div>
                <div className='text-xs leading-none text-neutral-400'>
                  <p>phone</p>
                </div>
              </div>
              <div className='place-content-center text-right text-xs text-neutral-300'>
                <p>1.03pm</p>
              </div>
            </div>
            <div className='grid w-full grid-cols-[15%_1fr_30%] items-center gap-4 py-1 sm:py-2'>
              {/* <div className='aspect-square place-content-center rounded-full bg-neutral-400'>
                <svg
                  className='mx-auto aspect-square h-5 sm:h-6'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z'
                    fill='#000000'
                  />
                  <path d='M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z' fill='#000000' />
                </svg>
              </div> */}
              <img
                src='https://images.theconversation.com/files/641408/original/file-20250109-15-kx43t5.png?ixlib=rb-4.1.0&q=10&auto=format&w=100&h=100&fit=crop&dpr=1'
                alt=''
                className='not_fullscreen_media mx-auto aspect-square h-7 sm:h-10'
              />
              <div>
                <div>
                  <p className='font-bold'>Mum</p>
                </div>
                <div className='text-xs leading-none text-neutral-400'>
                  <p>phone</p>
                </div>
              </div>
              <div className='place-content-center text-right text-xs text-neutral-300'>
                <p>12:36pm</p>
              </div>
            </div>
            <div className='grid w-full grid-cols-[15%_1fr_30%] items-center gap-4 py-1 sm:py-2'>
              {/* <div className='aspect-square place-content-center rounded-full bg-neutral-400'>
                <svg
                  className='mx-auto aspect-square h-5 sm:h-6'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z'
                    fill='#000000'
                  />
                  <path d='M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z' fill='#000000' />
                </svg>
              </div> */}
              <img
                src='https://images.theconversation.com/files/641408/original/file-20250109-15-kx43t5.png?ixlib=rb-4.1.0&q=10&auto=format&w=100&h=100&fit=crop&dpr=1'
                alt=''
                className='not_fullscreen_media mx-auto aspect-square h-7 sm:h-10'
              />
              <div>
                <div>
                  <p className='font-bold'>Mum</p>
                </div>
                <div className='text-xs leading-none text-neutral-400'>
                  <p>phone</p>
                </div>
              </div>
              <div className='place-content-center text-right text-xs text-neutral-300'>
                <p>11.54am</p>
              </div>
            </div>
            <div className='grid w-full grid-cols-[15%_1fr_30%] items-center gap-4 py-1 sm:py-2'>
              {/* <div className='aspect-square place-content-center rounded-full bg-neutral-400'>
                <svg
                  className='mx-auto aspect-square h-5 sm:h-6'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z'
                    fill='#000000'
                  />
                  <path d='M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z' fill='#000000' />
                </svg>
              </div> */}
              <img
                src='https://images.theconversation.com/files/641408/original/file-20250109-15-kx43t5.png?ixlib=rb-4.1.0&q=10&auto=format&w=100&h=100&fit=crop&dpr=1'
                alt=''
                className='not_fullscreen_media mx-auto aspect-square h-7 sm:h-10'
              />
              <div>
                <div>
                  <p className='font-bold'>Mum</p>
                </div>
                <div className='text-xs leading-none text-neutral-400'>
                  <p>phone</p>
                </div>
              </div>
              <div className='place-content-center text-right text-xs text-neutral-300'>
                <p>11.13am</p>
              </div>
            </div>
            <div className='grid w-full grid-cols-[15%_1fr_30%] items-center gap-4 py-1 sm:py-2'>
              {/* <div className='aspect-square place-content-center rounded-full bg-neutral-400'>
                <svg
                  className='mx-auto aspect-square h-5 sm:h-6'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z'
                    fill='#000000'
                  />
                  <path d='M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z' fill='#000000' />
                </svg>
              </div> */}
              <img
                src='https://images.theconversation.com/files/641408/original/file-20250109-15-kx43t5.png?ixlib=rb-4.1.0&q=10&auto=format&w=100&h=100&fit=crop&dpr=1'
                alt=''
                className='not_fullscreen_media mx-auto aspect-square h-7 sm:h-10'
              />
              <div>
                <div>
                  <p className='font-bold'>Mum</p>
                </div>
                <div className='text-xs leading-none text-neutral-400'>
                  <p>phone</p>
                </div>
              </div>
              <div className='place-content-center text-right text-xs text-neutral-300'>
                <p>10.47am</p>
              </div>
            </div>
          </div>
        </div>
      </PhoneGraphic>
    </div>
  )
}
