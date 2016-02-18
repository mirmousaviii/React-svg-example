import React from 'react';
import {render} from 'react-dom';
import Header from './component/header/header';
import Card from './component/card/card';
import Footer from './component/footer/footer';

import './style.css';

render(<Header />, document.querySelector('.header'));
render(<Card />, document.querySelector('.card'));
render(<Footer />, document.querySelector('.footer'));
