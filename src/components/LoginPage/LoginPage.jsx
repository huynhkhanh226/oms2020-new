import React, { Suspense } from "react";
import { history } from '../../helpers/history';
import { Redirect } from 'react-router-dom';
import { userActions } from "../../actions/user.actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  login = () => {
    this.props.userActions.changeLoginStatus(true);
    if (this.props.location.state != undefined) {
      let redirect = this.props.location.state.redirect;
      debugger;
      history.push(redirect || "/");
    } else {
      history.push("/");
    }
  }

  render() {
    let loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus === "true") {
      return (<Redirect push to="/" />)
    } else {
      return (<div className={'center fade-in'}>
        <h1>WELCOME TO OMS 2020</h1>
        <button type="button" onClick={() => this.login()}>Click here to login OMS System</button>
      </div>);
    }
  }
}


function mapStateToProps(state) {
  return {
    loginStatus: state.authentication.loginStatus,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
