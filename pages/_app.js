import '../styles/globals.css'
import ContactContext from '../contexts/ContactContext'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

function MyApp ({ Component, pageProps, router }) {
  const [contact, setContact] = useState('location')

  return (
    <ContactContext.Provider
      value={{
        contact,
        setContact
      }}
    >
      <AnimatePresence initial mode='wait'>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </ContactContext.Provider>
  )
}

export default MyApp
