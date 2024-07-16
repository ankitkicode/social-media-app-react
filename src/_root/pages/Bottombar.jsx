import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Bottombar = () => {
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <section className='bottom-bar h-16 py-2'>
      <ul className='flex justify-between w-full items-center px-3'>
        <li className={`flex text-center ${activeLink === '/' ? 'bg-blue-700' : ''} hover:bg-blue-700 rounded-full`}>
          <Link to={'/'} className='flex gap-3 py-2 px-3  items-center w-full h-full'>
            <i className="ri-home-5-fill text-xl"></i>
          </Link>
        </li>
        <li className={`flex text-center ${activeLink === '/explore' ? 'bg-blue-700' : ''} hover:bg-blue-700 rounded-full`}>
          <Link to={'/explore'} className='flex gap-3 py-2 px-3 rounded-full items-center w-full h-full'>
            <i className="ri-line-chart-fill text-xl"></i>
          </Link>
        </li>
        <li className={`flex text-center ${activeLink === '/create-post' ? 'bg-blue-700' : ''} hover:bg-blue-700 rounded-full`}>
          <Link to={'/create-post'} className='flex gap-3 py-2 px-3 rounded-full items-center w-full h-full'>
            <i className="ri-add-box-fill text-xl"></i>
          </Link>
        </li>
        <li className={`flex text-center ${activeLink === '/peoples' ? 'bg-blue-700' : ''} hover:bg-blue-700 rounded-full`}>
          <Link to={'/peoples'} className='flex gap-3 py-2 px-3 rounded-full items-center w-full h-full'>
            <i className="ri-team-fill text-xl"></i>
          </Link>
        </li>
        <li className={`flex text-center ${activeLink === '/saved' ? 'bg-blue-700' : ''} hover:bg-blue-700 rounded-full`}>
          <Link to={'/saved'} className='flex gap-3 py-2 px-3 rounded-full items-center w-full h-full'>
            <i className="ri-import-fill text-xl"></i>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Bottombar;
