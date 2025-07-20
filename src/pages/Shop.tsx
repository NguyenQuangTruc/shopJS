import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import Header from '../components/header'
import LogoWeb from '../assets/logo/logo-web.webp'
import ListAnh from '../components/list-anh'



createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <Header logo={LogoWeb} targetShop={"text-blue-500"} />
    <ListAnh />
  </StrictMode>,
)
