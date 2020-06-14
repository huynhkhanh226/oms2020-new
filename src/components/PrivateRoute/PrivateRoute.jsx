import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Common } from '../../helpers'
import config from "config";
export const PrivateRoute = ({ component: Component, path, ...rest }) => (
    <Route 
    path= {path} 
    {...rest} 
    render={props => (
            (localStorage.getItem('loginStatus') === "true")
            ? <Component {...props} />  
            : <Redirect to={{ pathname: config.PUBLIC_URL + '/login', state: { redirect: props.location, msg: "You need to login first!" } }} />
    )} />
)


// export const PrivateRoute = (props) => (
//     <Fragment>
//         {
//             console.log(props)
//         }
//         {
//             localStorage.getItem('isLogin') ? props.children : <Redirect to={{ pathname: '/login', state: { redirect: props.location, msg: "You need to login first!" } }} />
//         }
//     </Fragment>
// )