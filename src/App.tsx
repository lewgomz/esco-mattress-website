import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'

type ThemeMode = 'light' | 'dark'

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem('theme') as ThemeMode | null
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', themeMode === 'dark')
    localStorage.setItem('theme', themeMode)
  }, [themeMode])

  const toggleTheme = () => setThemeMode((m) => (m === 'light' ? 'dark' : 'light'))

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Header themeMode={themeMode} onToggleTheme={toggleTheme} />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
