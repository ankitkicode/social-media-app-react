import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
   <section className='topbar'>
     <div className='flex-between  py-4 px-5'>
        <Link className='flex gap-3 items-center'>
        <h1 className="font-semibold uppercase">Company Logo</h1>
        </Link>
        <div className="flex gap-4">
            <Link className='shad-button_ghost'>
                <i class="ri-logout-box-line"></i> 
            </Link>
            <Link className='flex-center gap-3'>
            <i class="ri-user-6-fill"></i>
            </Link>
        </div>
    </div>
   </section>
  )
}

export default Topbar
