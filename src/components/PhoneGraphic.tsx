import { ReactNode } from 'react'
import { cn } from '../util/helpers'

export default function PhoneGraphic({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn('mx-auto aspect-[8/16] h-auto max-h-[90%] w-auto max-sm:max-w-[80%] sm:max-w-[90%]', className)}>
      <div
        className={cn(
          'relative flex h-full w-full flex-col overflow-clip rounded-xl border-4 border-neutral-900 bg-neutral-900 font-base text-black drop-shadow-xl'
        )}
      >
        {/* Signal icon bar */}
        <div className='flex items-center justify-end bg-neutral-900 px-4 py-2'>
          <div className='flex h-4 items-end justify-end gap-1'>
            <div className='h-[30%] w-1 bg-neutral-100'></div>
            <div className='h-[50%] w-1 bg-neutral-100'></div>
            <div className='h-[70%] w-1 bg-neutral-100'></div>
            <div className='h-[90%] w-1 bg-neutral-500'></div>
          </div>
        </div>

        {children}
      </div>
    </div>
  )
}
