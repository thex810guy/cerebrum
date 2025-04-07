import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from "react-router"
import './index.css'

const Navbar = lazy(() => import('./Navbar.tsx'));
const Homepage = lazy(() => import('./pages/Homepage.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Outlet />
        </>}>
          <Route index element={<Homepage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
