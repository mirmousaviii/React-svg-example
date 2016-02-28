import React, {Component} from 'react';
import config from './config.json';
import styles from './style.pcss';

import '../../../bower_components/jquery-ui/jquery-ui';


if (typeof jQuery.ui != 'undefined') {
    console.info("Loaded jQuery UI!");
} else {
    console.error("jQuery UI Doesn't Work!");
}

class Card extends Component {
    render() {
        return (
            <div className={styles.root}>
                <h3>{this.props.title}</h3>
                <p>{config.contentText}</p>
                <p>This is {this.props.children}</p>
            </div>
        );
    }
}

export default Card
