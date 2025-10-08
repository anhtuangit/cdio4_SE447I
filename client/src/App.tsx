import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Layout from './layout/layout.main';
import Home from './pages/home';
import Users from './admin/userList';
import Introduce from './pages/introduce';
import Project from './pages/project';
import EstateRental from './pages/estateRental';
import Profile from './pages/profile';
import EstateSale from './pages/estateSale';
import Utilities from './pages/utilities';
import AdminDashBoard from './admin/adminDashboard';
import { Login } from './pages/login';
import { Register } from './pages/register';

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
            <Route path='/profile' element={<Profile />} />
            <Route path='/sale' element={<EstateSale />} />
            <Route path='/utilities' element={<Utilities />} />
          </Route>
          <Route path='/' element={<AdminDashBoard />}>
            <Route path='/users' element={<Users />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App