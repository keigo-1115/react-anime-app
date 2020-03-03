import firebase from "firebase";
import axios from 'axios'

/*API関連*/
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST
  }
}

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
const getPostsSuccess = (json) => {  
  return {
    type: GET_POSTS_SUCCESS,
    payload: json,
  }
}

export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
const getPostsFailure = (error) => {
  return {
  type: GET_POSTS_FAILURE,
  error
  }
}

/*1回目のAPI*/ 

export const GET_POSTS_REQUEST_OGP = 'GET_POSTS_REQUEST_OGP'
const getPostsRequestOgp = () => {
  return {
    type: GET_POSTS_REQUEST_OGP
  }
}

export const GET_POSTS_SUCCESS_OGP = 'GET_POSTS_SUCCESS_OGP'
const getPostsSuccessOgp = (json,items_id) => {  
  return {
    type: GET_POSTS_SUCCESS_OGP,
    payload: json,items_id
  }
}
/*2回めのAPI*/

export const getPosts = () => {
  return (dispatch) => {
    dispatch(getPostsRequest())
    return axios.get(`http://api.moemoe.tokyo/anime/v1/master/2020/1`)
      .then(res =>
        dispatch(getPostsSuccess(res.data)),
      ).catch(err => 
        dispatch(getPostsFailure(err))
      )
  }
}

export const getPostsOgpImage = (items_id,items_url) => {
  return (dispatch) => {
    dispatch(getPostsRequestOgp())
    return axios.get(`https://api.appp.la?url=${items_url}`)
      .then(res =>
        dispatch(getPostsSuccessOgp(res.data,items_id))
      ).catch(err => 
        dispatch(getPostsFailure(err))
      )
  }
}


// export const checkLogin = () => {
//   return dispatch => {
//     dispatch({ type: "login_start" });

//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         dispatch({ type: "login_success" });
//         dispatch({ type: "login_end" });
//       } else {
//         dispatch({ type: "login_fail" });
//         dispatch({ type: "login_end" });
//       }
//     });
//   };
// };

/*ホーム画面*/

// export const returnAnime_data_array = anime_data_array => {
//   return {
//     type: "return_Anime_data_array",
//     payload: anime_data_array
//   };
// };


// export const returnTitle = title => {
//   return {
//     type: "return_title",
//     payload: title
//   };
// };

// export const returnSiteURL = site_url => {
//   return {
//     type: "return_site_url",
//     payload: site_url
//   };
// };

// export const returnOgpImageUrl = ogp_image_url => {
//   return {
//     type: "return_ogp_image_url",
//     payload: ogp_image_url
//   };
// };


// export const change_FirstName = firstName => {
//   return {
//     type: "change_firstName",
//     payload: firstName
//   };
// };

// export const change_LastName = lastName => {
//   return {
//     type: "change_lastName",
//     payload: lastName
//   };
// };

// export const change_Email = email => {
//   return {
//     type: "change_email",
//     payload: email
//   };
// };

// export const returnSubmit = (
//   date,
//   details,
//   eimage,
//   ename,
//   place,
//   rnumbers
// ) => {
//   return {
//     type: "return_submit",
//     payload: date,
//     deadlineDate,
//     details,
//     eimage,
//     ename,
//     place,
//     rnumbers
//   };
// };

