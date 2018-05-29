import React, {Component} from 'react';
import {ScrollElement} from 'react-scroll';
import {animated} from 'react-spring';
import styled from 'react-emotion';
import {css} from 'emotion';
import PropTypes from 'prop-types';
import FaLink from 'react-icons/lib/go/link-external';

const head = arr => arr[0];
const last = arr => head(arr.slice(-1));

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
const Link = styled.a`
    color: #333;
    outline: none;
    text-decoration: none;
    &:hover {
        color: #3e863d;
    }
`;
const linkIcon = css`
    color: #DDD;
    font-size: 0.8em;
    margin-left: 3px;
`;
const projectStyles = css`
    display: flex;
    justify-content: center;
    position: relative;
`;

const Separator = styled.span`
    color: #DDD;
    margin: 0 5px;
    &:before {
        content: "/";
    }
`;
class Technology extends Component {
    render() {
        const {items} = this.props;
        const style = css`
            color: #AAA;
            margin-right: 5px;
            white-space: nowrap;
        `;
        return (<div><span className={style}>uses:</span>
            {items
                .map(item => <Link href={last(item)} target="_blank" key={head(item)}>{head(item)}</Link>)
                .reduce((acc, item) => [acc, <Separator key={item}/>, item])
            }
        </div>);
    }
}
Technology.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
};
class Project extends Component {
    render() {
        const {data} = this.props;
        const {description, technology, title, url} = data;
        return (<animated.div {...this.props} className={projectStyles}>
            <Outer>
                <Inner>
                    <Title>
                        <Link href={url}>{title}<FaLink className={linkIcon}/></Link>
                    </Title>
                    <Description>{description}</Description>
                    <Technology items={technology}/>
                </Inner>
            </Outer>
        </animated.div>);
    }
}
Project.propTypes = {
    top: PropTypes.string,
    data: PropTypes.object
};

export default ScrollElement(Project); // eslint-disable-line new-cap
