import React from 'react';
import { history } from '../../helpers/history';
import { Button } from 'reactstrap';
import { Lang } from '../../helpers'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {userActions}  from "../../actions/user.actions";


class HomePage extends React.Component {
  constructor(props) {
    super(props)
  };

  logout = () => {
    localStorage.removeItem('loginStatus')
    this.props.userActions.changeLoginStatus(false);
    history.push("/login");
  }

  sayHelloWorld() {
    alert(Lang.getLang("Phong_ban"));
  }

  render() {
    return (
      <div className={"center fade-in"}>
        <h1>WELCOME TO OMS 2020</h1>
        <Button color="danger" onClick={() => this.logout()}>Logout</Button><p></p>
        <Button color="danger" onClick={() => this.sayHelloWorld()}>Test multiple languages</Button>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    loginStatus: state.authentication.loginStatus
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      userActions: bindActionCreators(userActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
