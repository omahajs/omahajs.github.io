import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';

const styles = css`
    background: none;
    border: 2px solid white;
    border-radius: 1px;
    color: white;
    cursor: pointer;
    font-family: serif;
    font-size: 1.1em;
    margin-top: 0.5em;
    position: relative;
    padding: 0.5em 2em;
    transition: 150ms all;
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

    }
}
Button.propTypes = {
    children: PropTypes.object
};

export default Button;
