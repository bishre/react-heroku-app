import React, { useState, createContext } from "react"

export const UIContext = createContext()

const UIContextProvider = props => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <UIContext.Provider value={{isMobileMenuOpen, toggleMenu}}>
      {props.children}
    </UIContext.Provider>
  )
}

export default UIContextProvider