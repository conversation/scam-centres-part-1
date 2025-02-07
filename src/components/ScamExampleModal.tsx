import { useEffect, useRef } from 'react'
import { cn } from '../util/helpers'
import PhoneGraphic from './PhoneGraphic'

export default function ScamExampleModal({ className }: { className: string }) {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  const showModal = () => {
    dialogRef.current?.showModal()
  }
  const hideModal = () => {
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

      if (!clickedInDialog) dialog.close()
    }

    const dialog = dialogRef.current
    if (dialog) {
      dialog.addEventListener('click', dialogClickHandler)
      return () => dialog.removeEventListener('click', dialogClickHandler)
    }
  }, [])

  return (
    <>
      <button onClick={showModal} className='w-fit border px-3 py-2'>
        Click
      </button>
      <dialog
        id='phoneModal'
        ref={dialogRef}
        className='left-0 top-0 h-screen overflow-hidden backdrop:backdrop-blur-sm'
      >
        <div className={cn('absolute left-0 top-0 h-full border', className)}>
          <PhoneGraphic className=''>
            <button
              autoFocus
              onClick={hideModal}
              className='absolute left-1 top-1 flex aspect-square h-5 w-5 select-none items-center justify-center rounded-sm bg-red-400 font-base text-3xl text-white'
            >
              &#215;
            </button>
            <div className='flex-grow space-y-4 overflow-y-scroll bg-neutral-700 pb-1 pt-2'>
              <div className='h-4/5 border'></div>
              <div className='h-4/5 border'></div>
              <div className='h-4/5 border'></div>
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
      </dialog>
    </>
  )
}
