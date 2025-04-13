import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from "react-router"
import './index.css'
import Loading from './pages/Loading.tsx';

const Navbar = lazy(() => import('./Navbar.tsx'));
const Homepage = lazy(() => import('./pages/Homepage.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <Navbar />
            <Outlet />
          </>}>
            <Route index element={<Homepage />}/>
            <Route path="/*" element={<NotFound />}/>
          </Route>
        </Routes>

        
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
)
