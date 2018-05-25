import React, {Component} from 'react';
import {Trail} from 'react-spring';
import PropTypes from 'prop-types';
import {ScrollElement} from 'react-scroll';
import {css} from 'emotion';
import Project from './Project';
import {data} from './lookup';

const styles = css`
    position: relative;
    padding: 25vh 1em;
`;

const INITIAL_LEFT = -100;
const items = Object.keys(data);

class Projects extends Component {
    render() {
        const {left, opacity} = this.props;
        return (<section {...this.props} className={styles}>
            <Trail native from={{left: INITIAL_LEFT, opacity: 0}} to={{left, opacity}} keys={items}>
                {items.map(item => style => <Project
                    name={item}
                    data={data[item]}
                    style={style}/>)}
            </Trail>
        </section>);
    }
}
Projects.propTypes = {
    children: PropTypes.object,
    left: PropTypes.number,
    opacity: PropTypes.number
};

export default ScrollElement(Projects); // eslint-disable-line new-cap
