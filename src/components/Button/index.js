import React, {Component} from 'react';
import {scroller} from 'react-scroll';
import PropTypes from 'prop-types';
import {css} from 'emotion';

const styles = css`
    background: none;
    border: 2px solid white;
    border-radius: 1px;
    color: white;
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.5em;
    margin-top: 0.5em;
    position: relative;
    padding: 0.5em 1em;
    transition: 150ms all;
    &+button {
        margin-left: 0.5em;
    }
    &:hover {
        background-color: white;
        color: #3E863D;
    }
`;
class Button extends Component {
    render() {
        const {children} = this.props;
        return (
            <button className={styles} onClick={() => this.onClick()}>
                {children}
            </button>
        );
    }
    onClick() {
        const {scrollTo: element} = this.props;
        scroller.scrollTo(element, {
            smooth: 'easeInOutQuart'
        });
    }
}
Button.propTypes = {
    children: PropTypes.object,
    scrollTo: PropTypes.string
};

export default Button;
