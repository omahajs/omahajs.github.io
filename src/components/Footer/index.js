import React, {Component} from 'react';
import styled from 'react-emotion';
import {ScrollElement} from 'react-scroll';
import PropTypes from 'prop-types';
import FaHeart from 'react-icons/lib/fa/heart-o';
import corn from '../../images/cornjs.png';

const head = arr => arr[0];
const last = arr => head(arr.slice(-1));

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
    min-width: 60px;
    width: 10vw;
`;
const Accent = styled.div`
    background-color: white;
    flex: 0 1 auto;
    label: accent;
    height: 4px;
    max-width: 200px;
    width: 25vw;
`;
const Text = styled.div`
    color: white;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.3em;
`;
const Link = styled.a`
    color: white;
    outline: none;
    text-decoration: none;
    &:hover {
        color: yellow;
    }
`;
const Heart = styled(FaHeart)`
    color: white;
    top: -1px;
    position: relative;
`;
class Credits extends Component {
    render() {
        const {items} = this.props;
        return (<Section style={{bottom: 0, padding: '0 1em', textAlign: 'center'}}>
            <Text>
                Made with <Heart/> using - {items
                    .map(item => <Link href={last(item)} target="_blank">{head(item)}</Link>)
                    .reduce((acc, item) => [acc, ' / ', item])
                }
            </Text>
        </Section>);
    }
}

class Footer extends Component {
    render() {
        const items = [
            ['GatsbyJS', 'https://www.gatsbyjs.org/'],
            ['emotion', 'https://emotion.sh/'],
            ['react-scroll', 'https://github.com/fisshy/react-scroll'],
            ['react-spring', 'https://github.com/drcmda/react-spring'],
            ['react-icons', 'https://github.com/gorangajic/react-icons']
        ];
        return (<Section {...this.props}>
            <Wrapper>
                <Accent/><Image src={corn}/><Accent/>
            </Wrapper>
            <Credits items={items}/>
        </Section>);
    }
}

export default ScrollElement(Footer);
