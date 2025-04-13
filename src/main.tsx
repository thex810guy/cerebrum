import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, } from "react-router"
import Loading from './components/Loading.tsx';
import './index.css'

const Navbar = lazy(() => import('./components/Navbar.tsx'));
const Homepage = lazy(() => import('./pages/Homepage.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));
const LogIn = lazy(() => import('./pages/LogIn.tsx'));
const SignUp = lazy(() => import('./pages/SignUp.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />}/>

          <Route path="/" element={<>
            <Navbar />
            <Homepage />
          </>} />

          <Route path="/log-in" element={<LogIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
)
