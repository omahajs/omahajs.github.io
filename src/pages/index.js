import React from 'react';
import styled from 'react-emotion';
import Sunshine from '../components/Sunshine';
import Logo from '../components/Logo';
import Grass from '../components/Grass';

const Heading = styled.div`
   color: white;
   font-family: 'Source Sans Pro', sans-serif;
   font-size: 3em;
   font-weight: 300;
   line-height: 1em;
   margin: 1em 0;
   text-align: center;
   width: 100%;
   @media (max-width: 450px), (max-height: 450px) {
       font-size: 2em;
       margin: 0;
   }
`;
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
        <Grass height="140vh" style={{top: '60vh', padding: '1em'}}>
            <Heading>
                Sustainable Alternative to
                <br/>
                Component-based Technology
            </Heading>
        </Grass>
        <Wrapper>
            <Logo height="50vh" style={{
                flex: 'flex-grow',
                top: '5vh'
            }}/>
        </Wrapper>
    </div>
);

export default IndexPage;
