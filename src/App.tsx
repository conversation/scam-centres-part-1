import { useEffect } from 'react'
import Article from './components/Article'
import Footer from './components/Footer'
import Header from './components/Header'
import { DarkModeProvider } from './context/DarkModeProvider'
import MarkdownProvider from './providers/MarkdownProvider'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function App() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    document.querySelectorAll('img').forEach((img) => {
      img.addEventListener('load', () => {
        img.setAttribute('loaded', '')
      })
      if (img.complete) {
        img.setAttribute('loaded', '')
      }
    })

    window.addEventListener('resize', () => ScrollTrigger.refresh())
  }, [])

  return (
    <DarkModeProvider>
      <MarkdownProvider>
        <Header />
        <Article />
        <Footer />
      </MarkdownProvider>
    </DarkModeProvider>
  )
}
