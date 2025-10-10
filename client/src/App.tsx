import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Layout from './layout/layout.main';
import Home from './pages/home';
import Introduce from './pages/introduce';
import Project from './pages/project';
import EstateRental from './pages/estateRental';
import Profile from './pages/profile';
import EstateSale from './pages/estateSale';
import Utilities from './pages/utilities';
import AdminDashBoard from './admin/adminDashboard';
import { Login } from './pages/login';
import { Register } from './pages/register';
import EstateDetail from './pages/estateDetail';
import UserList from './admin/userList';
import { ListRealState } from './admin/listRealState';
import { UserDetail } from './admin/userDetail';
import CreateEstate from './pages/createEstate';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/estates/:id" element={<EstateDetail />} />
            <Route path="createEstate" element={<CreateEstate />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/introduce' element={<Introduce />} />
            <Route path='/project' element={<Project />} />
            <Route path='/rental' element={<EstateRental />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/sale' element={<EstateSale />} />
            <Route path='/utilities' element={<Utilities />} />
            <Route path='/formCreate' element={<CreateEstate />} />
          </Route>
          <Route path='/admin' element={<AdminDashBoard />} >
            <Route index element={<UserList />} />
            <Route path="/admin/estates" element={<ListRealState />} />
            <Route path="/admin/estates/:id" element={<EstateDetail />} />
            <Route path="/admin/users/:id" element={<UserDetail />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App