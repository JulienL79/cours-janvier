import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navbar } from '@common-molecules/Navbar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
)
