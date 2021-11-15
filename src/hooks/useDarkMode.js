import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState('light')
  const [componentMounted, setComponentMounted] = useState(false)
  const toggleTheme = (initDarkTheme) => {
    if (theme === 'light') {
      window.localStorage.setItem('mode', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('mode', 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const preservedTheme = window.localStorage.getItem('mode')
    const preferedColorScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    let localTheme = !preservedTheme & preferedColorScheme ? 'dark' : 'light'
    localTheme && setTheme(localTheme)
    setComponentMounted(true)
  }, [])

  return [theme, toggleTheme, componentMounted]
}

export default useDarkMode
