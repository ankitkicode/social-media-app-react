import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from './_root/RootLayout';
import AuthLayout from "./_auth/AuthLayout";
import SinginForm from "./_auth/forms/SigninForm";
import SingupForm from "./_auth/forms/SingupForm";
import Home from "./_root/pages/Home";
import Explore from "./_root/pages/Explore";
import Peoples from "./_root/pages/Peoples";
import Saved from "./_root/pages/Saved";
import CreatePost from "./_root/pages/CreatePost";
import UpdateProfile from "./_root/pages/UpdateProfile";
import Profile from "./_root/pages/Profile";
import PostDetails from "./_root/pages/PostDetails";
import EditPost from "./_root/pages/EditPost";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="sing-in" element={<SinginForm />} />
          <Route path="sing-up" element={<SingupForm />} />
        </Route>

        <Route element={<RootLayout/>}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/peoples" element={<Peoples/>} />
          <Route path="/saved" element={<Saved/>} />
          <Route path="/create-post" element={<CreatePost/>} />
          <Route path="/update-post/:id" element={<EditPost/>} />
          <Route path="/post/:id" element={<PostDetails/>} />
          <Route path="/profile/:id/*" element={<Profile/>} />
          <Route path="/update-profile/:id" element={<UpdateProfile/>} />
          {/* <Route path="/all-users" element={<AllUsers/>} /> */}

        </Route>
      </Routes>
    </>
  );
}

export default App;
