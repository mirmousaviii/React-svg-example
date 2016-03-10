import React, {Component} from 'react';
import styles from './style.css';

import Inductor from './images/inductor.svg';
import Resistor from './images/resistor.svg';


class Toolbar extends Component {

    render() {
        return (
            <div className={styles.toolbox}>
                <h4>Toolbox</h4>
                <Inductor />
                <Resistor />
            </div>
        );

    };

};

export default Toolbar
