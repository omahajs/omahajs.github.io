import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const isString = val => (typeof val === 'string');
const isNumber = val => (typeof val === 'number');
const getValue = prop => isString(prop) ? Number(prop.slice(0, prop.length - 2)) : (isNumber(prop) ? prop : 0);
const getUnits = val => {
    const isStringValue = isString(val);
    const isPercent = (isStringValue ? val.slice(-1) : '') === '%';
    return isPercent ? '%' : (isStringValue ? val.slice(-2) : ''); // eslint-disable-line no-magic-numbers
};
const computeWindowValue = (prop, attribute) => {
    const value = getValue(prop);
    const units = getUnits(prop);
    const lookup = {
        height: 'innerHeight',
        width: 'innerWidth'
    };
    const isPercent = (units === 'px') || (units === 'vh') || (units === 'vw');
    return isPercent ? ((value / 100) * window[lookup[attribute]]) : value;
};
const createPattern = height => window.Trianglify({
    width: computeWindowValue('100vw', 'width') * 4, // eslint-disable-line no-magic-numbers
    height: computeWindowValue(height, 'height') * 2,
    cell_size: 200, // eslint-disable-line camelcase
    x_colors: [ // eslint-disable-line camelcase
        '#3e863d',
        '#669f64',
        '#3e863d',
        '#669f64',
        '#6bbf47'
    ]
});

const Wrapper = styled.div`
    background-image: url(${({bgImage}) => bgImage});
    height: ${({height}) => height};
    label: grass;
    left: 0;
    position: absolute;
    width: 100vw;
`;
/**
 * @name Grass
 * @constructor
 * @prop {(string|number)} height Grass height
 * @prop {(string|number)} width Grass width
 * @example
 * import Grass from './components/Grass';
 * const Layout = props => (
 *     <div>
 *         <Grass height="100vh" style={{top: '60vh'}}/>
 *     </div>
 * );
**/
class Grass extends Component {
    render() {
        const {height} = this.props;
        try {
            this.pattern = createPattern(height).png();
        } catch (e) {
            // hack for GatsbyJS
        }
        return (
            <Wrapper {...this.props} bgImage={this.pattern}/>
        );
    }
}
Grass.propTypes = {
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default Grass;
