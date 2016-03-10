import React from 'react';
import {render} from 'react-dom';
import Header from './component/header/header';
import Toolbox from './component/toolbox/toolbox';
import Footer from './component/footer/footer';
import './style.css';

render(<Header />, document.querySelector('.header'));
render(<Toolbox />, document.querySelector('.main'));
render(<Footer />, document.querySelector('.footer'));
