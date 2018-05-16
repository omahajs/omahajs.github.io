import React from 'react';
import styled from 'react-emotion';
import Sunshine from '../components/Sunshine';
import Logo from '../components/Logo';
import Grass from '../components/Grass';
import Button from '../components/Button';

const Heading = styled.div`
   color: white;
   font-family: 'Source Sans Pro', sans-serif;
   font-size: 3em;
   font-weight: 300;
   line-height: 1.3em;
   margin: 1em 0;
   text-align: center;
   width: 100%;
   @media (max-width: 450px), (max-height: 450px) {
       font-size: 2em;
       margin: 0;
   }
`;
const Emphasis = styled.span`
    border-bottom: dotted 2px white;
    color: white;
    &:hover {
        border-bottom-color: yellow;
        color: yellow;
    }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    width: 100%;
`;
const BANNER_HEIGHT = 50;
const IndexPage = () => (
    <div>
        <Sunshine height={`${BANNER_HEIGHT}vh`}/>
        <Grass height={`${100 + BANNER_HEIGHT}vh`} style={{top: `${BANNER_HEIGHT}vh`, padding: '1em'}}>
            <Heading>
                Sustainable Alternative to
                <br/>
                <Emphasis>Component-based</Emphasis> Technology
            </Heading>
            <div style={{textAlign: 'center', width: '100%'}}>
                <Button>Read more</Button>
            </div>
        </Grass>
        <Wrapper>
            <Logo height="48vh" style={{
                flex: 'flex-grow',
                top: '1vh'
            }}/>
        </Wrapper>
    </div>
);

export default IndexPage;
