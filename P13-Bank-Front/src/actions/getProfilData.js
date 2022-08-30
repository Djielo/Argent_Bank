import axios from 'axios';

function getProfileData() {

  axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
  return async (dispatch) => {
    try{
      const response = await axios.get('/api/profile');
      dispatch({ type: 'GET_PROFILE_DATA', payload: response.data });      
    }
    catch(error){
      dispatch({ type: 'SIGN_IN' });
      localStorage.clear();
      sessionStorage.clear();
      dispatch({ type: 'GET_PROFILE_DATA', payload: { firstName: "", lastName: "" } });
    }
    
  };
}

export {
  getProfileData,
}
