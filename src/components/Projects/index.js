import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {css} from 'emotion';

const Outer = styled.div`
    flex: 0 1 auto;
    background-color: white;
    border-radius: 4px;
    margin: 2em 0;
    width: 100%;
    max-width: 800px;
    padding: 8px;
`;
const Inner = styled.div`
    border-color: green;
    border-radius: 2px;
    border-style: dashed;
    border-width: 2px;
    height: 100px;
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
        return (<div style={style}>
            <Outer>
                <Inner>Under construction</Inner>
            </Outer>
        </div>);
    }
}
Project.propTypes = {
    top: PropTypes.string
};

export default Project;
