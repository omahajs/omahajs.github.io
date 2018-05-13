import React from 'react';
import styled from 'react-emotion';
import Sunshine from '../components/Sunshine';
import Logo from '../components/Logo';
import Grass from '../components/Grass';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    width: 100%;
`;

const IndexPage = () => (
    <div>
        <Sunshine height="60vh"/>
        <Grass height="100vh" style={{top: '60vh'}}/>
        <Wrapper>
            <Logo height="50vh" style={{
                flex: 'flex-grow',
                top: '5vh'
            }}/>
        </Wrapper>
    </div>
);

export default IndexPage;
