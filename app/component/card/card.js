import React, {Component} from 'react';
import config from './config.json';
import styles from './style.css';

class Card extends Component {
    render() {
        return (
            <div className={styles.root}>
                {config.contentText}
            </div>
        );
    }
}

export default Card
