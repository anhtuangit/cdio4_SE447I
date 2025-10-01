import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Layout from './layout/layout.main';
import Home from './pages/home';
import Login from './pages/login';
import HomeSale from './pages/homesale';
import Register from './pages/register';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/homesale' element={<HomeSale/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App