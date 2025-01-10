import { cn } from '../../util/helpers'
import PhoneGraphic from '../PhoneGraphic'

export default function MessagePart2({ className }: { className: string }) {
  return (
    <div className={cn('place-content-center', className)}>
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
          <div className='mb-3'>
            <h1 className='pt-2 text-xl font-bold text-white sm:pt-4 sm:text-3xl'>Recent</h1>
          </div>

          <div className='mx-auto w-full divide-y text-white sm:space-y-2'>
            <div className='grid w-full grid-cols-[15%_1fr_30%] items-center gap-4 py-1 sm:py-2'>
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
                <p>3.49pm</p>
              </div>
            </div>
            <div className='grid w-full grid-cols-[15%_1fr_30%] items-center gap-4 py-1 sm:py-2'>
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
