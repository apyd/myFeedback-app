import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState('light')
  const [componentMounted, setComponentMounted] = useState(false)
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('mode', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('mode', 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const localTheme =
      window.localStorage.getItem('mode') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches ||
      'light'
    localTheme && setTheme(localTheme)
    console.log(localTheme)
    setComponentMounted(true)
  }, [])

  return [theme, toggleTheme, componentMounted]
}

export default useDarkMode
