import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import LogoWeb from '../assets/logo/logo-web.webp'
import Header from '../components/header'
import Footer from '../components/footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header logo = {LogoWeb} targetHome = {"text-blue-500"}/>
    <Footer />
  </StrictMode>,
)
