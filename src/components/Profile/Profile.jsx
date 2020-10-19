import React from 'react';
import ImgBig from './ImgBig/ImgBig';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
   return (
      <div>
         <ImgBig/>
         <ProfileInfo/>
         <MyPosts/>
      </div>
   )
}

export default Profile