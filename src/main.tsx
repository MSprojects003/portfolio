import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import Navbar from './components/custom/navbar.tsx'
import Profile from './components/custom/Profile.tsx'
 
import Skills from './components/custom/Skills.tsx'
import Designs from './components/custom/Designs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-gradient-to-br from-gray-800 to-slate-900'>
     <Navbar />
     <Profile />
     <Skills />
     <Designs />
     
     </div>
  </StrictMode>,
)
