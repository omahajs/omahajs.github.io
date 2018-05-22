import React, {Component} from 'react';
import {ScrollElement} from 'react-scroll';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Outer = styled.div`
    flex: 0 1 auto;
    background-color: white;
    border-radius: 4px;
    label: outer;
    margin: 2em 0 0;
    padding: 8px;
    width: 100%;
`;
const Inner = styled.div`
    border-color: green;
    border-radius: 2px;
    border-style: dashed;
    border-width: 2px;
    height: 150px;
    label: inner;
    padding: 8px 16px;
    width: 100%;
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
        return (<div {...this.props} style={style}>
            <Outer>
                <Inner>Under construction</Inner>
            </Outer>
        </div>);
    }
}
Project.propTypes = {
    top: PropTypes.string
};

export default ScrollElement(Project); // eslint-disable-line new-cap
