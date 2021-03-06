import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import corn from '../images/logo.png';

const Image = styled.img`
    height: ${({height}) => height};
    label: corn;
    position: relative;
    top: ${({top}) => top};
    @media (max-width: 450px) {
        bottom: 0;
        height: auto;
        max-height: ${({height}) => height};
        width: auto;
    }
`;
class Logo extends Component {
    render() {
        return <Image {...this.props} src={corn}/>;
    }
}
Logo.propTypes = {
    height: PropTypes.string,
    top: PropTypes.string
};

export default Logo;
