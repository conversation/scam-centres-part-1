import { useEffect } from 'react'
import Article from './components/Article'
import Footer from './components/Footer'
import Header from './components/Header'
import { DarkModeProvider } from './context/DarkModeProvider'
import MarkdownProvider from './providers/MarkdownProvider'

export default function App() {
  useEffect(() => {
    document.querySelectorAll('img').forEach((img) => {
      img.addEventListener('load', () => {
        img.setAttribute('loaded', '')
      })
      if (img.complete) {
        img.setAttribute('loaded', '')
      }
    })
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
