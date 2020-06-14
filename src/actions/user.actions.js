import { userConstants } from './types';
//import { userService } from '../services/user.service';
//import { history } from '../helpers/history';



export const userActions = {
    // login,
    // logout,
    // auth,
    changeLoginStatus
};

function changeLoginStatus(status) {
    return { type: userConstants.LOGIN_STATUS, status }
}

// /*!
//  * @author Huynh Khanh <email>
//  * date 08/05/2019
//  * description Get secret key
//  */
// function login(username, password, redirect) {
//     return dispatch => {
//         dispatch(request({ username: username, token: "" }));
//         userService.getClientID()
//             .then(
//                 res => {
//                     if (res.code === 200) {
//                         localStorage.setItem("client", JSON.stringify(res));
//                         dispatch(success(res));
//                         dispatch(auth(username, password, redirect));
//                     } else {
//                         dispatch(failure(res.message));
//                         dispatch(alertActions.error(res.message));
//                     }

//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                     dispatch(alertActions.error(error.toString()));
//                 }
//             );
//     };

//     function request(client) { return { type: userConstants.CLIENTID_REQUEST, client } }
//     function success(client) { return { type: userConstants.CLIENTID_SUCCESS, client } }
//     function failure(error) { return { type: userConstants.CLIENTID_FAILURE, error } }
// }



// /*!
//  * @author Huynh Khanh <email>
//  * date 07/25/2019
//  * login function 
//  */

// function auth(username, password, redirect) {
//     return dispatch => {
//         dispatch(request({ username: username }));
//         userService.login(username, password)
//             .then(
//                 res => {
//                     //debugger;
//                     dispatch(success(res));
//                     if (res.code === 200) {
//                         localStorage.setItem("user", JSON.stringify(res.data));
//                         history.push(redirect || "/");
//                     } else {
//                         dispatch(failure(res.message));
//                         dispatch(alertActions.error(res.message));
//                     }

//                 },
//                 error => {
//                     //debugger;
//                     dispatch(failure(error.toString()));
//                     dispatch(alertActions.error(error.toString()));
//                 }
//             );
//     };

//     function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
//     function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
//     function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
// }

// /*!
//  * @author user <email>
//  * date 07/25/2019
//  * Logout user 
//  */

// function logout() {

//     return dispatch => {
//         dispatch(request());
//         userService.logout()
//             .then(
//                 data => {
//                     dispatch(success(data.code));
//                     if (data.code === 200) {
//                         localStorage.removeItem('user');
//                         history.push("/login");

//                     } else {
//                         dispatch(failure(data));
//                         dispatch(alertActions.error(data.message));
//                     }
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                     dispatch(alertActions.error(error.toString()));
//                 }
//             );
//     };

//     function request() { return { type: userConstants.LOGOUT_REQUEST } }
//     function success(code) { return { type: userConstants.LOGOUT_SUCCESS, code: code } }
//     function failure(data) { return { type: userConstants.LOGOUT_SUCCESS, code: code, message: data.message } }
// }
