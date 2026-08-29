import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Card'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Card imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRye3NAv2LL-g57rAH2hyc6SHFXzONjbTCxes6NCqYDcA&s=10'
    productName='Pala de padel'
    price={23}
    />
    
  </StrictMode>,
)
