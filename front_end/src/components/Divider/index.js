import styled from 'styled-components';
import COLORS from '../../constants/colors';

const Divider = styled.div`
    position: absolute;
    left: ${({marginHorizontal}) => marginHorizontal || 0};
    right: ${({marginHorizontal}) => marginHorizontal || 0};
    ${({align}) => align ? `${align}: 0` : `bottom: 0`};
    height: ${({height}) => height || '4px'};
    background-color: ${({color}) => color || COLORS.white};
`

export default Divider;