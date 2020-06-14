/*!
 * @author raymond <raymond@vndevops.com>
 * date 10/31/2019
 * description 
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WebFont from 'webfontloader';
import {App} from './App';
// setup fake backend
//import { configureFakeBackend } from './helpers/index';
//configureFakeBackend();

const Root = ({ store }) => (
  <Provider store={store} >
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

//load goolge font
WebFont.load({
  google: {
    families: ["Source Sans Pro"]
  }
});

export default Root