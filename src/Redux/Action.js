
import axios from 'axios';

export const fetchProfile = () => {
  return dispatch => {
    axios
      .get('https://random-data-api.com/api/v2/users')
      .then(response => {
        dispatch({type: 'FETCH_PROFILE_SUCCESS', payload: response.data});
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  };
};

export const fetchAddress = () => {
  return dispatch => {
    axios
      .get('https://random-data-api.com/api/v2/addresses')
      .then(response => {
        dispatch({type: 'FETCH_ADDRESS_SUCCESS', payload: response.data});
      })
      .catch(error => {
        console.error('Error fetching address data:', error);
      });
  };
};
