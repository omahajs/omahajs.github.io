import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import corn from './logo.png';

const Image = styled.img`
    height: ${({height}) => height};
    label: corn;
    position: relative;
`;
/**
 * @name CornLogo
 * @constructor
 * @param {object} props Component props
 * @param {string} props.height Logo height
 * @example
 * <Logo height="50vh" style={{
 *     flex: 'flex-grow',
 *     top: '10vh'
 * }}/>
**/
class CornLogo extends Component {
    render() {
        return <Image {...this.props} src={corn}/>;
    }
}
CornLogo.propTypes = {
    height: PropTypes.string
};

export default CornLogo;
