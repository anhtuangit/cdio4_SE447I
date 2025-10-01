import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Layout from './layout/layout.main';
import Home from './pages/home';
import Users from './admin/userList';
import Login from './pages/login';
import Register from './pages/register';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App