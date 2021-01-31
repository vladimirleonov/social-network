const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

// const initialState = {
//    usersData: [
//       { id: 1, followed: true, fullName: 'Gleb Lavrov', status: "I'm looking for a job", location: { country: 'Belarus', city: 'Minsk' } },
//       { id: 2, followed: false, fullName: 'Alex Tarasov', status: "I'm looking for a job", location: { country: 'Russia', city: 'Moscov' } },
//       { id: 3, followed: true, fullName: 'Gleb Lavrov', status: "I'm looking for a job", location: { country: 'Ukrain', city: 'Kiev' } }
//    ]
// }

const initialState = {
   usersData: []
}

const usersData = (state = initialState, action) => { 
   switch (action.type) {
      case FOLLOW: {
         return {
               ...state,
               usersData: state.usersData.map(u => {
                  if ( u.id === action.userId) {
                     return { ...u, followed: true }                                                                             
                  }
                  return u;
               })
            }
      }
      case UNFOLLOW: {
         return {
            ...state,
            usersData: state.usersData.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         }
      }
      case SET_USERS: {
         
         return {
            ...state,
            usersData: [...state.usersData, ...action.usersData]
         }
      }
      default: {
         return state;   
      }
   }
}

export default usersData;

export const followActionCreator = (userId) => {
   return {
      type: FOLLOW,
      userId
   }
}

export const unfollowActionCreator = (userId) => {
   return {
      type: UNFOLLOW,
      userId
   }
}

export const setUsersActionCreator = (users) => {
   return {
      type: SET_USERS,
      usersData: users
   }
}


































// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';

// const initialState = {
//    usersData: [
//       { id: 1, followed: false, fullName: 'Ivan Savin', status: "I'm looking for a job right now...", location: { city = 'Minsk', country='Belarus' } },
//       { id: 2, followed: true, fullName: 'Alex Tarasov', status: "I'm looking for a job right now...", location: { city = 'Minsk', country='Belarus' } },
//       { id: 3, followed: false, fullName: 'Gleb Lavrov', status: "I'm looking for a job right now...", location: { city = 'Minsk', country='Belarus' } }
//    ]
// }

// const usersReducer = (state = initialState, action) => {
//    switch (action.type) {
//       case FOLLOW: {
//          return {
//             ...state,
//             usersData: [state.usersData.map(u => {
//                if (u.id == action.userId) {
//                   return { ...u, followed: true }
//                }
//                return u;
//             } )]
//          }
//       }
//       case UNFOLLOW: {
//          return {
//             ...state,
//             usersData: [state.usersData.map(u => {
//                if (u.id == action.userId) {
//                   return {...u, followed: false}
//                }
//                return u;
//             } )]
//          }
//       }
//       default: {
//          return state;
//       }
//    }
// }

// export default usersReducer;

// export const follow = (userId) => {
//    return (
//       {
//          type: FOLLOW,
//          userId
//       }
//    )
// }

// export const unfollow = (userId) => {
//    return (
//       {
//          type: UNFOLLOW,
//          userId
//       }
//    )
// }

