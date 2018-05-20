import React from 'react';
import styled from 'react-emotion';
import Sunshine from '../components/Sunshine';
import Logo from '../components/Logo';
import Grass from '../components/Grass';
import Projects from '../components/Projects';
import Button from '../components/Button';
import Github from 'react-icons/lib/fa/github';
import Twitter from 'react-icons/lib/fa/twitter';

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
const IconLink = styled.a`
    color: #333;
    padding: 5px;
    font-size: 2em;
    outline: none;
    user-select: none;
    &:hover {
        color: green;
    }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    width: 100%;
`;
const ButtonWrapper = styled.div`
    text-align: center;
    width: 100%;
`;
const Header = styled.div`
    position: fixed;
    padding: 0.5em 0.5em 5px 0;
    right: 0;
    text-align: right;
    top: 0;
    width: 100%;
`;
const BANNER_HEIGHT = 50;
const IndexPage = () => (
    <div>
        <Sunshine height={`${BANNER_HEIGHT}vh`}/>
        <Wrapper>
            <Header>
                <IconLink
                    title="GitHub"
                    target="_blank"
                    href="https://github.com/omahajs">
                    <Github/>
                </IconLink>
                <IconLink
                    title="Twitter"
                    target="_blank"
                    href="https://www.twitter.com/jhwohlgemuth">
                    <Twitter/>
                </IconLink>
            </Header>
            <Logo height="48vh" style={{
                flex: 'flex-grow',
                top: '1vh'
            }}/>
        </Wrapper>
        <Grass
            height={`${100 + BANNER_HEIGHT}vh`}
            style={{top: `${BANNER_HEIGHT}vh`, padding: '1em'}}>
            <Heading>
                Craft Sustainable Solutions<br/>
                with Web Technologies
            </Heading>
            <ButtonWrapper>
                <Button scrollTo="projects">Show Me More!</Button>
                <Button scrollTo="bottom">Why Omaha?</Button>
            </ButtonWrapper>
            <Projects
                name="projects"
                top={`${BANNER_HEIGHT / 2}vh`}/>
        </Grass>
    </div>
);

export default IndexPage;
