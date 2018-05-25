import React, {Component} from 'react';
import {Events} from 'react-scroll';
import styled from 'react-emotion';
import Sunshine from '../components/Sunshine';
import Logo from '../components/Logo';
import Grass from '../components/Grass';
import Projects from '../components/Projects';
import Button from '../components/Button';
import Github from 'react-icons/lib/fa/github';
import Twitter from 'react-icons/lib/fa/twitter';

const Title = styled.div`
   color: white;
   font-family: 'Source Sans Pro', sans-serif;
   font-size: 2.5em;
   font-weight: 300;
   line-height: 1.3em;
   margin: 1em 0 0 0;
   text-align: center;
   width: 100%;
   @media (max-width: 625px) {
       margin: 1em 0 0.5em 0;
       font-size: 2em;
   }
   @media (max-width: 450px) {
       font-size: 31px;
   }
   @media (max-width: 330px) {
       font-size: 27px;
   }
   @media (max-height: 375px) {
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
    margin-top: 3em;
    text-align: center;
    width: 100%;
    @media (max-width: 500px) {
        a {
            font-size: 1.4em;
            padding: 5px;
        }
    }
    @media (max-height: 330px) {
        margin-top: 0.5em;
        a {
            font-size: 1.4em;
            padding: 5px;
        }
    }
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
const GRASS_OFFSET = 200;
const INITIAL_LEFT = -100;
const INITIAL_STATE = {
    isScrolling: false,
    left: INITIAL_LEFT,
    opacity: 0
};
class IndexPage extends Component {
    constructor() {
        super();
        this.state = INITIAL_STATE;
    }
    componentDidMount() {
        const component = this;
        Events.scrollEvent.register('begin', () => {
            component.setState({isScrolling: true});
        });
        function update() {
            const PROJECTS_SCROLL_HEIGHT = 400;
            if (window.scrollY > PROJECTS_SCROLL_HEIGHT) {
                component.setState({
                    left: 0,
                    opacity: 1
                });
            }
            window.requestAnimationFrame(update);
        }
        window.requestAnimationFrame(update);
    }
    render() {
        return (<div>
            <Sunshine height={`${BANNER_HEIGHT}vh`}/>
            <Wrapper>
                <Header>
                    <IconLink title="GitHub" target="_blank" href="https://github.com/omahajs">
                        <Github/>
                    </IconLink>
                    <IconLink title="Twitter" target="_blank" href="https://www.twitter.com/jhwohlgemuth">
                        <Twitter/>
                    </IconLink>
                </Header>
                <Logo height="48vh" top="1vh"/>
            </Wrapper>
            <Grass height={`${GRASS_OFFSET + BANNER_HEIGHT}vh`} top={`${BANNER_HEIGHT}vh`}>
                <Title>
                    Craft Sustainable Solutions<br/>
                    with Web Technologies
                </Title>
                <ButtonWrapper>
                    <Button scrollTo="projects">Show Me More!</Button>
                    <Button scrollTo="bottom">Why Omaha?</Button>
                </ButtonWrapper>
                <Projects {...this.state} name="projects"/>
            </Grass>
        </div>);
    }
}

export default IndexPage;
