// import axios from 'axios';

// const initialState = {
//   Profile:[];
//   Address:[];
// };
// export const Reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'Profile': {
//       axios
//         .get(action.url)
//         .then(res => {
//           state = res;
//         })
//         .catch(err => {
//           state = err;
//         });
//       return state;
//     }
//     case 'Address': {
//       axios
//         .get(action.url)
//         .then(res => {
//           state = res;
//         })
//         .catch(err => {
//           state = err;
//         });
//       return state;
//     }

//     default:
//       return state;
//   }
// };

const ProfileReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PROFILE_SUCCESS': {
      //console.log('op', action.payload);
      return action.payload;
    }
    default:
      return state;
  }
};

const AddressReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ADDRESS_SUCCESS': {
      //console.log('op', action.payload);
      return action.payload;
    }
    default:
      return state;
  }
};

export {ProfileReducer, AddressReducer};
