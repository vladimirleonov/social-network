import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {

//    let state = props.store.getState();

//    let onAddPost = () => { 
//       props.store.dispatch(addPostActionCreator());
//    }

//    let onChangePost = (text) => { 
//       props.store.dispatch(updateNewPostTextActionCreator(text));
//    }

//    return (
//       <MyPosts state={state} addPost={onAddPost} updateNewPostText={onChangePost}/>
//    )
// }

const mapStateToProps = (state) => {
   return {
      state: state
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => { 
         dispatch(addPostActionCreator());
      },
      updateNewPostText: (text) => { 
         dispatch(updateNewPostTextActionCreator(text));
      }
   }
}

const MyPostsContainerNew = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainerNew;