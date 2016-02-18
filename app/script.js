import React from 'react';
import {render} from 'react-dom';
import Header from './component/header/header';
import Card from './component/card/card';
import Footer from './component/footer/footer';

import './style.css';

render(<Header />, document.querySelector('.header'));
render(
    <div>
        <Card />
        <Card />
        <Card />
        <Card />
    </div>,
    document.querySelector('.main')
);
render(<Footer />, document.querySelector('.footer'));
