import React, {Component} from 'react';
import {ScrollElement} from 'react-scroll';
import {animated} from 'react-spring';
import {css} from 'emotion';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Outer = styled.div`
    flex: 0 1 auto;
    background-color: white;
    border-radius: 4px;
    box-shadow: -2px 3px 4px #444;
    label: outer;
    margin: 2em 0 0;
    max-width: 850px;
    padding: 8px;
    width: 100%;
`;
const Inner = styled.div`
    border-color: #EEE;
    border-radius: 2px;
    border-style: solid;
    border-width: 2px;
    height: 150px;
    label: inner;
    padding: 8px 16px;
    width: 100%;
`;
const projectStyles = css`
    display: flex;
    justify-content: center;
    position: relative;
`;

class Project extends Component {
    render() {
        const {top} = this.props;
        const style = {
            top,
            display: 'flex',
            justifyContent: 'center',
            position: 'relative'
        };
        return (<animated.div {...this.props} className={projectStyles}>
            <Outer>
                <Inner>Under construction</Inner>
            </Outer>
        </animated.div>);
    }
}
Project.propTypes = {
    top: PropTypes.string
};

export default ScrollElement(Project); // eslint-disable-line new-cap
