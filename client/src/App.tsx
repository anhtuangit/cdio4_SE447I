import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Layout from './layout/layout.main';
import Home from './pages/home';
import Login from './pages/login';
import Utilities from './pages/Utilities';
import { CompareProvider } from './context/CompareContext'; // 👈 import CompareProvider

const App = () => {
  return (
    <BrowserRouter>
      <CompareProvider> {/* 👈 bọc toàn bộ app */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='tien-ich' element={<Utilities />} /> {/* 👈 Route Tiện Ích */}
            </Route>
            <Route path='/login' element={<Login />} />
          </Routes>
        </Suspense>
      </CompareProvider>
    </BrowserRouter>
  );
}

export default App
