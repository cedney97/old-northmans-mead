import { createContext, useRef, useContext } from 'react'

const ScrollContext = createContext()

export const ScrollProvider = ({ children }) => {
  const scrollTargetRef = useRef(null)

  const handleScroll = () => {
    scrollTargetRef.current?.scrollIntoView({ behavior: 'smooth', top: -30 })
  }

  return (
    <ScrollContext.Provider value={{ scrollTargetRef, handleScroll }}>
      {children}
    </ScrollContext.Provider>
  )
}

export const useScroll = () => useContext(ScrollContext)