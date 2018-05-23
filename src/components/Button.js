import React, {Component} from 'react';
import {scroller} from 'react-scroll';
import PropTypes from 'prop-types';
import {css} from 'emotion';

const styles = css`
    background: none;
    border: none;
    border-bottom: 3px dotted white;
    color: white;
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 2em;
    outline: none;
    position: relative;
    padding-bottom: 2px;
    transition: 200ms all;
    &:active {
        outline: none;
    }
    &:focus {
        outline: none;
    }
    &+a {
        margin-left: 0.5em;
    }
    &:hover {
        border-bottom-color: yellow;
        color: yellow;
    }
`;
class Button extends Component {
    render() {
        const {children} = this.props;
        return (
            <a className={styles} onClick={() => this.onClick()}>
                {children}
            </a>
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
