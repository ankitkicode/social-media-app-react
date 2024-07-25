import React from "react";
import { Link } from "react-router-dom";

const PostDetails = () => {
  return (
    <div className="post_details-container">
      <div className="post_details-card">
      <img src="/assets/icons/profile-placeholder.svg" className="post_details-img" alt="" />
        <div className="post_details-info">
          <div className="flex-between w-full">
          <Link to={"/profile"} className="flex items-center gap-3">
            <img
              src="/assets/icons/profile-placeholder.svg"
              alt=""
              className="rounded-full w-12 lg:h-12"
            />
         
          <div className="flex flex-col">
            <p className="base-meduim lg:body-bold text-light-1">Ankit jatav</p>
            <div className="flex-center gap-2 text-gray-300">
              <p className="subtle-semibold lg:small-regular">12/09/2024</p>-
              <p className="subtle-semibold lg:small-regular">location</p>
            </div>
            
          </div>
          </Link>
          <div className="flex-center gap-4">
            <Link>
            <img src="/assets/icons/edit.svg" width={25} alt="" />
            </Link>
            <Link>
            <img src="/assets/icons/delete.svg" width={25} alt="" />
            </Link>

          </div>
          </div>



         
        </div>

      </div>

    </div>
  );
};

export default PostDetails;
