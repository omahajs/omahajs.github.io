import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import LightRay from './LightRay';

const Wrapper = styled.div`
    overflow: hidden;
    height: ${({height}) => height};
    position: fixed;
    width: 100vw;
`;
const Banner = styled.div`
    label: banner;
    position: relative;
    transform: rotateZ(-180deg);
    transform-origin: 50vw 60vh;
    width: 100vw;
`;
const Sunshine = styled.div`
    label: sunshine;
    display: block;
    height: ${({height}) => height};
    left: ${({side}) => (side === 'left') ? 0 : '50%'};
    position: fixed;
    width: 50vw;
`;
const NUMBER_OF_RAYS = 21;
const range = [...Array(NUMBER_OF_RAYS).fill(0)];
const LightRays = ({side}) => (
    <div>
        {range.map((key, index) => <LightRay side={side} key={index.toString()}></LightRay>)}
    </div>
);
LightRays.propTypes = {
    side: PropTypes.string
};
/**
 * @name SunshineBanner
 * @constructor
 * @param {object} props Props object
 * @param {(number|string)} props.height Banner height
 * @example
 * import Banner from './components/banner';
 * const Layout = props => (
 *     <div>
 *         <Banner height="67vh" style={{top: 0}}/>
 *     </div>
 * );
**/
const SunshineBanner = props => (
    <Wrapper {...props}>
        <Banner>
            <Sunshine {...props} side="left">
                <LightRays side="left"/>
            </Sunshine>
            <Sunshine {...props} side="right">
                <LightRays side="right"/>
            </Sunshine>
        </Banner>
    </Wrapper>
);
SunshineBanner.propTypes = {
    side: PropTypes.string
};

export default SunshineBanner;
