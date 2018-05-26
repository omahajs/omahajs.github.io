import React, {Component} from 'react';
import styled from 'react-emotion';
import {ScrollElement} from 'react-scroll';
import PropTypes from 'prop-types';

import corn from '../../images/cornjs.png';

const Section = styled.section`
    padding: 1em 0;
    width: 100%;
`;
const Wrapper = styled.div`
    align-items: center;
    color: white;
    display: flex;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 3em;
    justify-content: center;
    label: footer-wrapper;
    padding: 1.5em 0;
    text-align: center;
    width: 100%;
`;
const Image = styled.img`
    flex: 0 1 auto;
    height: auto;
    label: cornjs;
    margin: 0 13px;
    max-width: 100px;
    width: 10vw;
`;
const Accent = styled.div`
    background-color: white;
    flex: 0 1 auto;
    label: accent;
    height: 4px;
    width: 150px;
`;
const Content = styled.div`
    height: 50px;
    width: 100%;
`;

class Footer extends Component {
    render() {
        return (<Section {...this.props}>
            <Wrapper>
                <Accent/><Image src={corn}/><Accent/>
            </Wrapper>
            <Content/>
        </Section>);
    }
}

export default ScrollElement(Footer);
