import { useEffect, useRef } from 'react'

export default function WaveformVideo() {
  const vidRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const videoElement = vidRef.current

    if (!videoElement) return

    videoElement.addEventListener('ended', () => {
      videoElement.currentTime = 0
      videoElement.play().catch(() => {})
    })

    videoElement.play().catch(() => {})
  }, [])

  return (
    <video
      ref={vidRef}
      controls={false}
      autoPlay
      muted
      loop
      playsInline
      className='not_fullscreen_media mx-auto mix-blend-screen'
    >
      <source
        src='https://images.theconversation.com/files/640839/original/file-20250106-15-mqdogb.gif?ixlib=rb-4.1.0&q=5&fm=mp4&w=150'
        type='video/mp4'
      />

      <source
        src='https://images.theconversation.com/files/640839/original/file-20250106-15-mqdogb.gif?ixlib=rb-4.1.0&q=5&fm=webm&w=150'
        type='video/webm'
      />
    </video>
  )
}
