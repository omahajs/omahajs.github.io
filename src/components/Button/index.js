import styled from 'react-emotion';

const Button = styled.button`
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

export default Button;
