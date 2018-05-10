import React from 'react';
import styled from 'react-emotion';
import Link from 'gatsby-link';
import Sunshine from '../components/sunshine';
import Logo from '../components/corn';
import Grass from '../components/grass';
import Button from '../components/button';

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
        <Grass height="100vh" style={{top: '60vh'}}>
            <Button>Hello World</Button>
        </Grass>/>
        <Wrapper>
            <Logo height="50vh" style={{
                flex: 'flex-grow',
                top: '5vh'
            }}/>
        </Wrapper>
    </div>
);

export default IndexPage;
