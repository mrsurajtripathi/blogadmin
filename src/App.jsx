import { useEffect, useState } from 'react'
import Home from './pages/Home'
import { Navbar } from './components/Navbar';
import { BrowserRouter , Routes, Route} from 'react-router';
import { AuthLayout } from './components/layouts/AuthLayout';
import { Dashboard } from './components/admin/Dashboard';
import Bloglist from './components/Bloglist';
let body=document.body;
body.classList.add("d-flex")
body.classList.add('flex-column')

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AuthLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='blogs' element={<Bloglist />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
