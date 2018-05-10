import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const DEFAULT_EVEN_COLOR = '#DFC85D';
const DEFAULT_ODD_COLOR = '#F4E57E';

const getTransformOrigin = ({side}) => `bottom ${(side === 'left') ? 'right' : 'left'}`;

const Banner = styled.div`
    label: banner;
    position: relative;
    width: 100vw;
`;
const Sunshine = styled.div`
    label: sunshine;
    display: block;
    height: ${({height}) => height};
    left: ${({side}) => (side === 'left') ? 0 : '50%'};
    overflow: hidden;
    position: fixed;
    width: 50vw;
`;
const LightRay = styled.div`
    label: ray;
    ${({side}) => (side === 'left') ? {right: 0} : {left: 0}}
    background-color: ${DEFAULT_ODD_COLOR};
    border: none;
    bottom: 0;
    height: 1000vh;
    position: absolute;
    width: 1000vw;
    &:nth-of-type(2n) {
        background-color: ${DEFAULT_EVEN_COLOR};
    }
    &:nth-of-type(2) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(10deg);
    }
    &:nth-of-type(3) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(20deg);
    }
    &:nth-of-type(4) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(30deg);
    }
    &:nth-of-type(5) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(40deg);
    }
    &:nth-of-type(6) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(50deg);
    }
    &:nth-of-type(7) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(60deg);
    }
    &:nth-of-type(8) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(70deg);
    }
    &:nth-of-type(9) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(80deg);
    }
`;
const range = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // eslint-disable-line no-magic-numbers
const LightRays = ({side}) => (
    <div>
        {range.map(key => <LightRay side={side} key={key.toString()}></LightRay>)}
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
    <Banner>
        <Sunshine {...props} side="left">
            <LightRays side="left"/>
        </Sunshine>
        <Sunshine {...props} side="right">
            <LightRays side="right"/>
        </Sunshine>
    </Banner>
);
SunshineBanner.propTypes = {
    side: PropTypes.string
};

export default SunshineBanner;
