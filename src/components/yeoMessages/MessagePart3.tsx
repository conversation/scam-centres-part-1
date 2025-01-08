import { cn } from '../../util/helpers'
import PhoneGraphic from '../PhoneGraphic'

export default function MessagePart3({ className }: { className: string }) {
  return (
    <div
      className={cn(
        'h-full place-content-center after:absolute after:top-[99.5%] after:h-20 after:w-full after:bg-gradient-to-b after:from-neutral-800 after:content-[""] max-sm:h-2/3 max-sm:bg-neutral-800',
        className
      )}
    >
      <PhoneGraphic className=''>
        {/* <p className='absolute left-1/2 mt-1 -translate-x-1/2 font-base text-sm text-white'>March 14</p> */}
        <div className='relative flex h-full flex-col justify-between bg-neutral-900'>
          {/* Contact name */}
          <div className='relative z-10 mx-auto flex w-full items-center justify-between bg-neutral-600 px-2 py-1 text-center text-xs'>
            <div className='aspect-square w-6 place-content-center rounded-full bg-neutral-400'>
              <svg
                className='mx-auto aspect-square h-4 sm:h-4'
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
            </div>
            <p className='flex-grow text-lg font-bold text-white'>Mum</p>
            <svg
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 122.88 122.27'
              className='aspect-square h-4'
            >
              <g>
                <path
                  className='fill-neutral-300'
                  d='M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z'
                />
              </g>
            </svg>
          </div>

          {/* Messages */}
          <div className='relative flex-grow overflow-clip bg-neutral-700'>
            <div className='mum_message_section absolute flex h-full flex-grow flex-col justify-end space-y-2'>
              <div className='relative ml-auto mr-3 max-w-[80%] rounded-md bg-indigo-50 p-2 shadow-md'>
                <img
                  className='not_fullscreen_media aspect-square w-full'
                  src='https://images.theconversation.com/files/640852/original/file-20250107-17-9hk612.png?ixlib=rb-4.1.0&q=45&auto=format&w=200&h=200&fit=crop&dpr=1'
                  alt=''
                />

                <svg
                  className='absolute left-1/2 top-1/2 h-5 w-5 -translate-x-3 -translate-y-5 fill-red-500'
                  viewBox='0 0 297 297'
                >
                  <g>
                    <path
                      d='M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645
		c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645
		C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892
		c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z'
                    />
                    <path
                      d='M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614
		c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901
		c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104
		C179.265,127.948,165.464,141.901,148.5,141.901z'
                    />
                  </g>
                </svg>
                <p className='mt-1 text-right align-middle text-xs text-neutral-500 [font-size:x-small]'>
                  March 13 7:22pm
                </p>
              </div>
              <div className='relative ml-auto mr-3 max-w-[45%] rounded-md bg-indigo-50 p-2 shadow-md'>
                <p className='text-xs md:text-sm'>Mum, here's my location.</p>
                <p className='mt-1 text-right align-middle text-xs text-neutral-500 [font-size:x-small]'>
                  March 13 7:22pm
                </p>
              </div>
              <div className='cant_wait relative ml-auto mr-3 max-w-[70%] rounded-md bg-indigo-50 p-2 opacity-0 shadow-md'>
                <p className='text-xs md:text-sm'>Don’t think can wait anymore. Deadline is by tomorrow’s evening.</p>
                <p className='mt-1 text-right align-middle text-xs text-neutral-500 [font-size:x-small]'>
                  March 14 8:21pm
                </p>
              </div>
              <div className='dont_know relative ml-auto mr-3 max-w-[70%] rounded-md bg-indigo-50 p-2 opacity-0 shadow-md'>
                <p className='text-xs md:text-sm'>I don’t know what is going to happen later on.</p>
                <p className='mt-1 text-right align-middle text-xs text-neutral-500 [font-size:x-small]'>
                  March 14 10:27pm
                </p>
              </div>
            </div>
          </div>

          {/* Send message */}
          <div className='flex items-center space-x-2 bg-neutral-900 px-4 py-3'>
            <div className='flex-grow'>
              <div className='flex min-h-7 items-center rounded-full bg-neutral-800 px-4 py-2 text-neutral-200'>
                <span className='flex-grow text-xs leading-none text-neutral-600'>Type a message</span>
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
    </div>
  )
}
