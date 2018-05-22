import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollElement} from 'react-scroll';
import {css} from 'emotion';

const styles = css`
    position: relative;
    top: 10vh;
`;

class Projects extends Component {
    render() {
        return (<section {...this.props} className={styles}>
            {this.props.children}
        </section>);
    }
}
Projects.propTypes = {
    children: PropTypes.object
};

export default ScrollElement(Projects); // eslint-disable-line new-cap
