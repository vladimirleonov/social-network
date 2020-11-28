import React from 'react';
import ImgBig from './ImgBig/ImgBig';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = (props) => { 
   return (
      <div>
         <ImgBig/>
         <ProfileInfo/>
         <MyPosts postData={props.state.postData} newPostText={ props.state.newPostText } dispatch={props.dispatch} />
      </div>
   )
}

export default Profile