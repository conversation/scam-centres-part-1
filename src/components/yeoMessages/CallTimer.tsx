import { useRef, useState } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export default function CallTimer() {
  const [callTime, setCallTime] = useState('00:00')
  const intervalRef = useRef<number | null>(null)
  const secondsRef = useRef<number>(0)
  const timerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (timerRef.current) {
        ScrollTrigger.create({
          trigger: document.querySelector('.yeo_messages'),
          start: 'top bottom',
          end: 'bottom top',
          onToggle: (event) => {
            if (event.isActive) {
              intervalRef.current = setInterval(() => {
                secondsRef.current++
                const minutes = String(Math.floor(secondsRef.current / 60) % 60).padStart(2, '0')
                const secondsPadded = String(secondsRef.current % 60).padStart(2, '0')
                setCallTime(`${minutes}:${secondsPadded}`)
              }, 1000)
            } else {
              if (intervalRef.current) {
                clearInterval(intervalRef.current)
              }
            }
          }
        })
      }
    },
    { scope: timerRef }
  )

  return (
    <div ref={timerRef} className='text-center text-xl text-neutral-300'>
      {callTime}
    </div>
  )
}
