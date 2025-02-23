import { useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Tweet1() {
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      ScrollTrigger.refresh()
    })

    observer.observe(document.querySelector('.tweet1')!)

    window.addEventListener('load', () => {
      ScrollTrigger.refresh()
    })
  }, [])

  return (
    <div className='tweet1 mx-auto flex w-[min(100%-40px,750px)] justify-center'>
      <blockquote className='twitter-tweet'>
        <p lang='en' dir='ltr'>
          A Chinese actor reported missing at the Thailand-Myanmar border has been found after fears that he might have
          entered a Myanmese city known as an online scam hub. Read more:{' '}
          <a href='https://t.co/sSxZVOZG3R'>https://t.co/sSxZVOZG3R</a>{' '}
          <a href='https://t.co/WZFsVU0kcR'>pic.twitter.com/WZFsVU0kcR</a>
        </p>
        &mdash; South China Morning Post (@SCMPNews){' '}
        <a href='https://twitter.com/SCMPNews/status/1876946965793300485?ref_src=twsrc%5Etfw'>January 8, 2025</a>
      </blockquote>{' '}
      <script async src='https://platform.twitter.com/widgets.js' charSet='utf-8'></script>
    </div>
  )
}


