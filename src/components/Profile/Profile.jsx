import React from 'react';
import ImgBig from './ImgBig/ImgBig';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';

const Profile = (props) => { 
   return (
      <div>
         <ImgBig/>
         <ProfileInfo/>
         {/* <MyPostsContainer store={props.store} postData={props.state.postData} newPostText={ props.state.newPostText } dispatch={props.dispatch} /> */}
         <MyPostsContainer/>
      </div>
   )
}

export default Profile