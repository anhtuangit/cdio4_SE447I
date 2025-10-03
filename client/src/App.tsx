import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Layout from './layout/layout.main';
import Home from './pages/home';
import Users from './admin/userList';
import Login from './pages/login';
import Register from './pages/register';
import Introduce from './pages/introduce';
import Project from './pages/project';
import EstateRental from './pages/estateRental';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/introduce' element={<Introduce />} />
            <Route path='/project' element={<Project />} />
            <Route path='/rental' element={<EstateRental />} />
          </Route>
          <Route path='/users' element={<Users />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App