import React, {Component} from 'react';
import config from './config.json';
import styles from './style.pcss';

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
