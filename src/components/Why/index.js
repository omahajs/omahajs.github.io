import React, {Component} from 'react';
import styled from 'react-emotion';
import {ScrollElement} from 'react-scroll';
import Item from './Item';

const Section = styled.section`
    padding: 1em 0em;
    width: 100%;
`;
/* eslint-disable max-len */
const Title = styled.div`
    background-color: #3e863d;
    background-image: url("data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%23669f64' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
    color: white;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 3em;
    padding: 1.5em 0;
    text-align: center;
    width: 100%;
`; /* eslint-enable max-len */

class Why extends Component {
    render() {
        return (<Section {...this.props}>
            <Title>Why Omaha?</Title>
            <Item/>
            <Item/>
            <Item/>
        </Section>);
    }
}

export default ScrollElement(Why);
