import { useEffect, useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter , Routes, Route} from 'react-router';
import { AuthLayout } from './components/layouts/AuthLayout';
import { Dashboard } from './components/admin/Dashboard';
import Bloglist from './components/Bloglist';
import { Blogform } from './components/Blogform';
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
            <Route path='blogs'>
              <Route index element={<Bloglist />} />
              <Route path='new' element={<Blogform />} />
            </Route>            
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
