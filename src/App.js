import React, { Component, Suspense } from "react";
import { connect } from 'react-redux';



import { locale, loadMessages } from 'devextreme/localization';
import "./App.scss";
import { Route, Router, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { history } from './helpers/history';
import { Common } from './helpers';



//import getRoutes from './routes/routes';
//import RouterView from './routes/RouterView';

//import RouterView from "react-router-view";
//const routes = getRoutes();
// const Login = React.lazy(() => import('./components/LoginPage/LoginPage.jsx'));
// const Home = React.lazy(() => import('./components/HomePage/HomePage.jsx'));
//import { HomePage } from './components/HomePage';
//import { LoginPage } from './components/LoginPage';
const HomePage = React.lazy(() => import(/* webpackChunkName: "HomePage" */'./components/HomePage/HomePage.jsx'));
const LoginPage = React.lazy(() => import(/* webpackChunkName: "LoginPage" */'./components/LoginPage/LoginPage.jsx'));
const Layout = React.lazy(() => import(/* webpackChunkName: "Layout" */'./components/Layout/Layout'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */'./components/NotFound/NotFound'));

import { PrivateRoute } from './components/PrivateRoute';
import Loading from './components/shared/Loading/Loading';

//Translate devextreme language
/**Using Intl */
import viMessages from './assets/lang/globalize-devextreme/vi.json';
import enMessages from './assets/lang/globalize-devextreme/en.json';
import jaMessages from './assets/lang/globalize-devextreme/ja.json';
import zhMessages from './assets/lang/globalize-devextreme/zh.json';

//translate my app
//import 'devextreme-intl';
var vi = require('./assets/lang/i18n/translations/locale-vi.json');
var en = require('./assets/lang/i18n/translations/locale-en.json');
var zh = require('./assets/lang/i18n/translations/locale-zh.json');
var ja = require('./assets/lang/i18n/translations/locale-ja.json');

class App extends Component {
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            //console.log(this.props.match.url);
            // console.log(location);
            // console.log(action);
            // console.log(this.props.match.url);
            // console.log(this.props.location.pathname);
            // this.props.clearAlerts();
        });
        this.initMessages(); /**Using Intl */
        locale(this.getLocale()); /**Using Intl */
    }

    /**Using Intl */
    getLocale() {
        if (!localStorage.getItem('APP_LANGUAGE')) {
            localStorage.setItem('APP_LANGUAGE', "vi");
        }
        return localStorage.getItem('APP_LANGUAGE');
    }

    /**Using Intl */
    initMessages() {
        loadMessages(viMessages);
        loadMessages(enMessages);
        loadMessages(jaMessages);
        loadMessages(zhMessages);

        var myLang = {
            'vi': vi,
            'en': en,
            'ja': ja,
            'zh': zh
        }
        loadMessages(myLang);
    }

    render() {
        return (
            <div className="container-fluid">
                <Suspense fallback={Loading}>
                    <Layout>
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path={Common.url() + "/"} component={HomePage} />
                                <Route path={Common.url() +"/login"} component={LoginPage} />
                                <Route path='*' exact={true} component={NotFound} />
                            </Switch>
                        </Router>
                    </Layout>
                </Suspense>
            </div >
        );
    }
}

export { App };
