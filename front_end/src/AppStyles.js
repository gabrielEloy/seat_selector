import styled from 'styled-components';
import COLORS from './constants/colors'

const Wrapper = styled.div`
    height: 100vh;
    background-color: #FFFDEE;
    font-family: 'Lobster', cursive;
    display: flex;
    flex-direction: 'column';
    align-items: center;
    flex-direction: column;
    text-align: center;
    overflow: hidden;    

    header {
        margin-top: 10vh;
        padding: 40px 0;
        h1{
            font-size: 4rem;
            color: ${COLORS.darkPurple};
            letter-spacing: 3px;
        }
    }

    main{
        width: 800px;
    }
`

export default Wrapper;
