import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LeftSidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  return (
    <nav className='leftsidebar'>
      <div className='flex flex-col gap-11'>
        <Link to={"/"} className='flex gap-3 mt-[-10px] items-center'>
          <h1 className="font-semibold uppercase">Snapgraph</h1>
        </Link>
        <Link to={'/profile'} className='flex items-center mt-[-18px] mb-[-8px] gap-3'>
          <i className="ri-user-6-fill py-2 px-3 bg-zinc-700 rounded-full"></i>
          <div className='flex flex-col'>
            <p className='body-bold'>
              Ankit Jatav
            </p>
            <p className='small-regular text-light-3'>
              @ankitkicode
            </p>
          </div>
        </Link>
        <ul className='flex flex-col gap-6'>
          <li className={`leftsidebar-link ${activeLink === '/' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>
            <Link to={'/'} className='flex gap-3 py-3 px-2 items-center ' onClick={() => setActiveLink('/')}>
              <i className="ri-home-5-fill text-xl"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className={`leftsidebar-link ${activeLink === '/explore' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>
            <Link to={'/explore'} className='flex gap-3 py-3 px-2 items-center ' onClick={() => setActiveLink('/explore')}>
              <i className="ri-line-chart-fill text-xl"></i>
              <span>Explore</span>
            </Link>
          </li>
          <li className={`leftsidebar-link ${activeLink === '/people' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>
            <Link to={'/peoples'} className='flex gap-3 py-3 px-2 items-center ' onClick={() => setActiveLink('/people')}>
              <i className="ri-team-fill text-xl"></i>
              <span>People</span>
            </Link>
          </li>
          <li className={`leftsidebar-link ${activeLink === '/saved' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>
            <Link to={'/saved'} className='flex gap-3 py-3 px-2 items-center ' onClick={() => setActiveLink('/saved')}>
              <i className="ri-import-fill text-xl"></i>
              <span>Saved</span>
            </Link>
          </li>
          <li className={`leftsidebar-link ${activeLink === '/create-post' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>
            <Link to={'/create-post'} className='flex gap-3 py-3 px-2 items-center ' onClick={() => setActiveLink('/create-post')}>
              <i className="ri-add-box-fill text-xl"></i>
              <span>Create Post</span>
            </Link>
          </li>
        </ul>
        <button className='py-3 px-2 mt-16 font-semibold text-lg flex gap-3 rounded-lg transition-all hover:bg-blue-700'>
          <i className="ri-user-shared-2-fill text-lg"></i>
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};


export default LeftSidebar
