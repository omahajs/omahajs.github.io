import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'react-emotion';

const DEFAULT_EVEN_COLOR = '#DFC85D';
const DEFAULT_ODD_COLOR = '#F4E57E';

const getTransformOrigin = ({side}) => `bottom ${(side === 'left') ? 'right' : 'left'}`;

const shine = initial => keyframes`
    0% {
        transform: rotateZ(-80deg) translateZ(0);
    }
    100% {
        transform: rotateZ(-180deg) translateZ(0);
    }
`;
const Wrapper = styled.div`
    overflow: hidden;
    height: ${({height}) => height};
    position: fixed;
    width: 100vw;
`;
const Banner = styled.div`
    animation: ${shine(10)} 15s linear infinite running;
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
      transform: rotateZ(0deg);
    }
    &:nth-of-type(3) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(10deg);
    }
    &:nth-of-type(4) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(20deg);
    }
    &:nth-of-type(5) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(30deg);
    }
    &:nth-of-type(6) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(40deg);
    }
    &:nth-of-type(7) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(50deg);
    }
    &:nth-of-type(8) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(60deg);
    }
    &:nth-of-type(9) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(70deg);
    }
    &:nth-of-type(10) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(80deg);
    }
    &:nth-of-type(11) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(90deg);
    }
    &:nth-of-type(12) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(100deg);
    }
    &:nth-of-type(13) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(110deg);
    }
    &:nth-of-type(14) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(120deg);
    }
    &:nth-of-type(15) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(130deg);
    }
    &:nth-of-type(16) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(140deg);
    }
    &:nth-of-type(17) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(150deg);
    }
    &:nth-of-type(18) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(160deg);
    }
    &:nth-of-type(19) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(170deg);
    }
    &:nth-of-type(20) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(180deg);
    }
    &:nth-of-type(21) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(190deg);
    }
    &:nth-of-type(22) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(200deg);
    }
    &:nth-of-type(23) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(210deg);
    }
    &:nth-of-type(24) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(220deg);
    }
    &:nth-of-type(25) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(230deg);
    }
    &:nth-of-type(26) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(240deg);
    }
    &:nth-of-type(27) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(250deg);
    }
    &:nth-of-type(28) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(260deg);
    }
    &:nth-of-type(29) {
      transform-origin: ${getTransformOrigin};
      transform: rotateZ(270deg);
    }
`;
const range = [...Array(29).fill(0)];
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
