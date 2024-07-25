import React from 'react'
import PostCard from './PostCard';

const Home = () => {
  const posts = [1,2,2,4,3,4,4,5]
  return (
    <div className='flex flex-1'>
      <div className="home-container">
        <div className="home-posts">
          <h2 className='h3-bold md:h2-bold text-left w-full'>Home Feed</h2>
        <ul className='flex flex-col flex-1 gap-9 w-full'>
          {
            posts.map(function(){
              return <li className='mb-0'>
              <PostCard/>
             </li>
            })
          }
       
        </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Home;
