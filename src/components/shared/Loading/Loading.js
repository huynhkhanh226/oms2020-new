import React, { Component } from 'react'
import { Lang } from '../../../helpers'

import './Loading.scss';

const Loading = (
    <div className="overlay"><span>{Lang.getLang('Loading')}...</span></div>
);

export default Loading
