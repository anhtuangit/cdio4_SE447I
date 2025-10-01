import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Layout from './layout/layout.main';
import Home from './pages/home';
import Project from './pages/Project';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/project' element={<Project/>} ></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App