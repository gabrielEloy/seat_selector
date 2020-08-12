import styled from 'styled-components';
import COLORS from '../../constants/colors';

import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
    height: 150px;
    width: 130px;
    background: ${COLORS.background};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: .5em;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .icon-container{
        flex: 3;
        display: flex;        
        justify-content: center;
        align-items: center;

        img{
            width: 72px;
            margin-top: 10px;
        }
    }
    .text-container{
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;

        p{
            font-size: 48px;
        }
    }
`

export default Wrapper;