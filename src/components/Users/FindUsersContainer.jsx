import React from 'react';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/users-reducer';
import FindUsers from './FindUsers';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      usersData: state.users.usersData//передал в компоненту FindUsers свойство state, значением которого будут польователи из state
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onFollow: (userId) => {
         dispatch(followActionCreator(userId))   
      },
      onUnfollow: (userId) => {
         dispatch(unfollowActionCreator(userId))
      },
      onSetUsers: (users) => {//т.е. когда пользователь зашел на страничку он типа нажал на кнопку и говорит загрузи мне для этой странички пользователей
         dispatch(setUsersActionCreator(users))
      }
   }
   //передали презентационной компоненте callback-и
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default FindUsersContainer;
