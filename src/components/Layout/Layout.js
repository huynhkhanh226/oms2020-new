// import React, { Component } from 'react'
// const Layout = props => (
//     <div>
//         <header>header</header>
//         <main>{props.children}</main>
//         <footer>footer</footer>
//     </div>
// )

// export default Layout


import React, { Component, Suspense } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import Header from './main/Header';
//import Footer from './main/Footer';
//import Body from './main/Body';


const Header = React.lazy(() => import(/* webpackChunkName: "Header" */'./main/Header'));
const Footer = React.lazy(() => import(/* webpackChunkName: "Footer" */'./main/Footer'));
const Body = React.lazy(() => import(/* webpackChunkName: "Body" */'./main/Body'));


//import LoginHeader from './login/LoginHeader';
//import LoginFooter from './login/LoginFooter';
//import LoginBody from './login/LoginBody';

const LoginHeader = React.lazy(() => import(/* webpackChunkName: "LoginHeader" */'./login/LoginHeader'));
const LoginFooter = React.lazy(() => import(/* webpackChunkName: "LoginFooter" */'./login/LoginFooter'));
const LoginBody = React.lazy(() => import(/* webpackChunkName: "LoginBody" */'./login/LoginBody'));


import Loading from '../shared/Loading/Loading'

export class Layout extends Component {
    render() {
        let loginStatus = localStorage.getItem('loginStatus') === "true";
        return (
            <div >
                <Suspense fallback={Loading}>
                    {loginStatus && <div className="main">
                        <Header />
                        <Body content={this.props.children} />
                        <Footer />
                    </div>}

                    {!loginStatus && <div className="login">
                        <LoginHeader />
                        <LoginBody content={this.props.children} />
                        <LoginFooter />
                    </div>}
                </Suspense>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        loginStatus: state.authentication.loginStatus,
    }
}
export default connect(mapStateToProps)(Layout);

