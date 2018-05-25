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
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.2em;
    label: inner;
    padding: 8px 16px;
    width: 100%;
    div {
        margin: 0.5em 0;
    }
`;
const Title = styled.div`
    color: #333;
    font-size: 1.6em;
`;
const Description = styled.div`

`;
const SubTitle = styled.div`
    border-left: solid 8px #DDD;
    font-size: 1.3em;
    padding-left: 4px;
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
                <Inner>
                    <Title>Make a web app</Title>
                    <Description>Description</Description>
                    <div>logo | logo | logo</div>
                </Inner>
            </Outer>
        </animated.div>);
    }
}
Project.propTypes = {
    top: PropTypes.string
};

export default ScrollElement(Project); // eslint-disable-line new-cap
