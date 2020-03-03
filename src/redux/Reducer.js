import {combineReducers} from 'redux';
import {GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE,
        GET_POSTS_REQUEST_OGP,GET_POSTS_SUCCESS_OGP} from "./Action";

const API_INITIAL_STATE = {
  items: [],//アニメのデータ格納場所
  items2:[],//OGP画像取得APIのデータ格納場所
  items_mix:[],//itemsとitems2の複合データ
  isFetching: false,
};

// const AUTH_INITIAL_STATE = {
//   email: "",
//   password: "",
//   loading: false,
//   loggedIn: false,
//   firstName: "",
//   lastName: "",
//   name: "",
// };

let getHostnameFromString = function(path) {
  var result = path.replace(/\\/g, '/').match(/\/\/([^/]*)/);
  if (!result) return '';
  return result[1];
};

function itemsMix(obj1,obj2){
let itemMix = [];
let obj2_url = getHostnameFromString(obj2.link);
 
for(let item in obj1){
  let obj1_url = getHostnameFromString(obj1[item].public_url);
 
  if(obj1_url == obj2_url){
     itemMix = Object.assign(obj1[item],obj2);
  }

}
return itemMix;
}


const APIReducer = (state = API_INITIAL_STATE, action) => {    
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
          isFetching: true,
          items: []
      }

    case GET_POSTS_SUCCESS:
      return {
        ...state,
          isFetching: false,
          items: action.payload,
      }

    case GET_POSTS_FAILURE:
      return {
        ...state,
          isFetching: false,
          error: action.error
      }

/*1回めのAPI*/
    case GET_POSTS_REQUEST_OGP:
      return {
        ...state,
          isFetching: true,
          items2: [],
          items_mix:[]
      }

    case GET_POSTS_SUCCESS_OGP:
      let obj1 = state.items;
      let obj2 = action.payload;
      
      return {
        ...state,
          isFetching: false,
          items2:[...state.items2,action.payload],
          items_mix:[...state.items_mix,itemsMix(obj1,obj2)]

        }
    default:
      return state
  }
}


// const MainRecomendReducer = (state = CREATE_INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "return_title":
//       return { ...state, title: action.payload };
//     case "return_site_url":
//       return { ...state, site_url: action.payload };
//     case "return_ogp_image_url":
//       return { ...state, ogp_image_url: action.payload };
//     case "return_Anime_data_array":
//       // return Object.assign({}, state.anime_data_array, {
//       // anime_data_array: action.payload
//       // });
//       return {...state,anime_data_array:action.payload};
//     default:
//       return state;
//   }
// };

// const AuthReducer = (state = AUTH_INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "change_email":
//       return { ...state, email: action.payload };
//     case "change_password":
//       return { ...state, password: action.payload };
//     case "login_start":
//       return { ...state, loading: true };
//     case "login_end":
//       return { ...state, loading: false };
//     case "login_success":
//       return { ...state, loggedIn: true };
//     case "login_fail":
//       return { ...state, loggedIn: false };
//     case "change_firstName":
//       return { ...state, firstName: action.payload };
//     case "change_lastName":
//       return { ...state, lastName: action.payload };
//     case "change_glade":
//       return { ...state, glade: action.payload };
//     case "change_fvEvents":
//       return { ...state, fvEvents: action.payload };

//     case "change_madeEvents":
//       return { ...state, madeEvents: action.payload };

//     case "change_name":
//       return { ...state, name: action.payload };

//     case "change_snumber":
//       return { ...state, snumber: action.payload };
//     default:
//       return state;
//   }
// };
     
const reducer = combineReducers({
  // main:MainRecomendReducer,
  api:APIReducer
});
  
export default reducer;