import React from "react";
import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <div className="bg-zinc-900 rounded-3xl border  border-dark-4 p-5 lg:p-7 w-full max-w-screen-sm">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to={"/profile"} className="">
            <img
              src="/public/assets/icons/profile-placeholder.svg"
              alt=""
              className="rounded-full w-12 lg:h-12"
            />
          </Link>
          <div className="flex flex-col">
            <p className="base-meduim lg:body-bold text-light-1">Ankit jatav</p>
            <div className="flex-center gap-2 text-gray-300">
              <p className="subtle-semibold lg:small-regular">12/09/2024</p>-<p className="subtle-semibold lg:small-regular">location</p>
            </div>
          </div>

        </div>
        <Link to={'/update-post/1'}>
        <img src="/public/assets/icons/edit.svg" alt=""  width={20} height={20}/>
        </Link>
      </div>
      <Link to={'/post/1'} >
      <div className="small-medium lg:base-medium py-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, est.</p>
        <ul className="flex mt-2 gap-1">
        <li className="text-gray-400">
          #viral,#demo,#shorts

        </li>
        </ul>

      </div>
      <img src="/public/assets/icons/profile-placeholder.svg" className="h-64 xs:h-[400px] lg:h-[450px] w-full rounded-[24px] object-cover mb-5" alt="" />
      </Link>
      <div className="flex justify-between items-center z-20">
        <div className="flex gap-2 mr-5">
          {/* <img src="/public/assets/icons/like.svg" width={20} height={20} alt="" /> */}
          <img src="/public/assets/icons/like.svg" width={20} height={20} alt="" />
        <p className="">0</p>
        </div>
        <div className="flex gap-2 mr-5">
          {/* <img src="/public/assets/icons/like.svg" width={20} height={20} alt="" /> */}
          <img src="/public/assets/icons/save.svg" width={23} height={23} alt="" />
      
        </div>
      </div>
    </div>
  );
};

export default PostCard;
