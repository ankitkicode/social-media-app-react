import React from 'react'
import Topbar from './pages/Topbar'
import LeftSidebar from './pages/LeftSidebar'
import { Outlet } from 'react-router-dom'
import Bottombar from './pages/Bottombar'

const RootLayout = () => {
  return (
    <div className='w-full h-[100vh] md:flex '>
      <Topbar/>
      <LeftSidebar/>
      <section className='flex flex-1 h-full'>
      <Outlet/>
      </section>

      <Bottombar/>
      
    </div>
  )
}

export default RootLayout
