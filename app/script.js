import React from 'react';
import {render} from 'react-dom';
import Header from './component/header/header';
import Card from './component/card/card';
import Footer from './component/footer/footer';

import './style.css';


if (typeof jQuery != 'undefined') {
    console.info("Loaded jQuery!");
} else {
    console.error("jQuery Doesn't Work!");
}


render(<Header />, document.querySelector('.header'));
render(
    <div>
        <Card title="Test 1"/>
        <Card title="Test 2">AAA</Card>
        <Card title="Test 3">BBB</Card>
        <Card title="Test 4"/>
    </div>,
    document.querySelector('.main')
);
render(<Footer />, document.querySelector('.footer'));
