import React, {Component} from 'react';
import styled from 'react-emotion';

const Button = styled.button`
    background: none;
    border: 3px solid white;
    border-radius: 1px;
    color: white;
    cursor: pointer;
    position: relative;
    padding: 1em 2em;
    left: 500px;
    top: 100px;
    transition: 150ms all;
    &:hover {
        background-color: white;
        color: #3E863D;
    }
`;

export default Button;
