import { ReactNode } from 'react'
import { cn } from '../util/helpers'

export default function PhoneGraphic({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn('mx-auto aspect-[1/2] h-auto max-h-[85%] w-auto max-sm:max-w-[75%] sm:max-w-[90%]', className)}>
      <div
        className={cn(
          'relative flex h-full w-full flex-col overflow-clip rounded-xl border-4 border-neutral-900 bg-neutral-900 font-base text-black drop-shadow-xl'
        )}
      >
        {/* Signal icon bar */}
        <div className='relative min-h-8 bg-neutral-900 px-4 py-2'>
          {/* <div className='h-full w-full place-content-center'>
            <div className='mx-auto h-2 w-1/4 rounded-full bg-neutral-300'></div>
          </div> */}
          <div className='left absolute top-1/2 -translate-y-1/2'></div>
          <div className='absolute right-4 top-1/2 flex -translate-y-1/2 flex-row items-center gap-2'>
            <div className='flex h-[0.75rem] items-end gap-[0.15rem]'>
              <div className='h-[30%] w-[0.2rem] bg-neutral-100'></div>
              <div className='h-[50%] w-[0.2rem] bg-neutral-100'></div>
              <div className='h-[70%] w-[0.2rem] bg-neutral-100'></div>
              <div className='h-[90%] w-[0.2rem] bg-neutral-500'></div>
            </div>
            <div className='after:contents-[""] relative h-[0.7rem] w-[1.2rem] rounded-sm border border-neutral-200 after:absolute after:left-full after:top-1/2 after:h-[0.3rem] after:w-[0.25rem] after:-translate-y-1/2 after:rounded-sm after:border after:border-l-0 after:border-neutral-200'>
              <div className='h-full w-2/3 bg-neutral-200'></div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </div>
  )
}
