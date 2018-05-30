import React, {Component} from 'react';
import styled from 'react-emotion';
import {ScrollElement} from 'react-scroll';
import IoUpArrow from 'react-icons/lib/io/android-arrow-up';
import FaSmile from 'react-icons/lib/fa/smile-o';
import Button from '../Button';

const Section = styled.section`
    padding: 1em 0em;
    width: 100%;
`;
/* eslint-disable max-len */
const SectionTitle = styled.div`
    background-color: #3e863d;
    background-image: url("data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%23669f64' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
    color: white;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 3em;
    label: why-title;
    padding: 1.5em 0;
    text-align: center;
    width: 100%;
`; /* eslint-enable max-len */
const ButtonWrapper = styled.div`
    font-size: 12px;
    label: button-wrapper;
    margin-top: 1em;
    position: absolute;
    width: 100%;
    text-align: center;
    &:hover svg {
        top: -4px;
    }
`;
const UpArrow = styled(IoUpArrow)`
    label: up-arrow;
    padding-left: 2px;
    position: relative;
    top: -2px;
`;
const Outer = styled.div`
    flex: 0 1 auto;
    background-color: white;
    border-radius: 4px;
    box-shadow: -2px 3px 4px #444;
    label: outer;
    margin: 2em 0 0;
    max-width: 850px;
    padding: 8px;
    width: 100%;
`;
const Inner = styled.div`
    border-color: #EEE;
    border-radius: 2px;
    border-style: solid;
    border-width: 2px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.2em;
    label: inner;
    padding: 8px 16px;
    width: 100%;
    div {
        margin: 0.5em 0;
    }
`;
const Title = styled.div`
    color: #333;
    font-size: 1.6em;
    line-height: 1em;
    position: relative;
`;
const Description = styled.div`
    border-left: solid 4px #DDD;
    position: relative;
    margin-top: 1em;
    padding-left: 8px;
`;
const Item = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 1em;
    position: relative;
`;
const Example = styled.span`
    font-family: serif;
    font-size: 14px;
    border-radius: 4px;
    color: #333;
    margin: 0;
    text-transform: uppercase;
    &:before {
        content: "example";
    }
`;
/* eslint-disable max-len */
class Why extends Component {
    render() {
        return (<Section {...this.props}>
            <SectionTitle>Why Omaha?</SectionTitle>
            <Item>
                <Outer>
                    <Inner>
                        <Title>
                            Why the name, Omaha?
                        </Title>
                        <Description>
                            <p>Omaha Nebraska has a long history of quality — quality of beef, quality of life, etc...</p>
                            <p>This project hopes to extend that connection with quality, and start a trend of associating Omaha with quality of code.</p>
                            <p>..."omaha" is also a short namespace that was available from <a href="https://js.org/">js.org</a> <FaSmile/></p>
                        </Description>
                    </Inner>
                </Outer>
            </Item>
            <Item>
                <Outer>
                    <Inner>
                        <Title>
                            Why use Omaha tools?
                        </Title>
                        <Description>
                            <p>This project strives to help developers <i>leverage core patterns</i> common to multiple technologies in an effort to <b>maximize flexibility</b> and <b>minimize churn</b>.</p>
                            <p>Toward this end, we embrace incremental enhancement by maintaining control over build tools and leveraging sustainable technologies. This philosophy plays well with <i>many</i> options and will help any project stay ready to <b><a href="https://twitter.com/search?q=%23usetheplatform&src=typd">#usetheplatform</a></b></p>
                            <p><Example/> - If you choose to use AMD, modules will be scaffolded using <a href="http://requirejs.org/docs/whyamd.html#sugar">CommonJS sugar syntax</a>, and whether you choose to use Browserify or Webpack, modules will be imported using their Browserify-compliant names. Following these simple conventions enables flexibility and helps identify how technologies differ.</p>
                            <p>A scaffolded web app will have the same architecture with AMD or CommonJS, Jest or Mocha, Webpack or Browserify!</p>
                            <p><Example/> - <a href="https://marionettejs.com/annotated-src/backbone.marionette.html">Marionette can be read/understood in under 30 minutes</a> and allows for customization (like swapping out renderers...we like to use Morphdom)</p>
                            <p>We like to understand our production dependencies and <i>practice patterns before plugins</i>.</p>
                        </Description>
                    </Inner>
                </Outer>
            </Item>
            <Item>
                <Outer>
                    <Inner>
                        <Title>
                            ...is this site built with React?
                        </Title>
                        <Description>
                            <p>Yes. More specifically, this site was built with the awesome static site generator, GatsbyJS.</p>
                            <p>Beyond the fact that GatsbyJS is amazing, we wanted to highlight that developing solutions with front-end technoligies is not a zero-sum game with only one winner.</p>
                            <p>Component-based technologies like React have a time and place, but depending on your experience, requirements, and constraints, React might not be for you. Omaha is here to provide a viable and sustainable alternative, with an always-available path for incremental enhancement.</p>
                        </Description>
                    </Inner>
                </Outer>
            </Item>
            <ButtonWrapper>
                <Button scrollTo="web-app">
                    Back to top<UpArrow/>
                </Button>
            </ButtonWrapper>
        </Section>);
    }
}
/* eslint-enable max-len */

export default ScrollElement(Why); // eslint-disable-line new-cap
