import styled from 'styled-components';
import COLORS from '../../constants/colors';

const Wrapper = styled.div`
    .title-container{
        position: relative;
        .title-text{
            font-size: 72px;
            color: ${COLORS.secondary};
        }
        .back-button{
            position: absolute;
            left: 60px;   
            top: 22px;
            width: 60px;
            color: black;
            background: ${COLORS.background};
            border: none;
            padding: 1em 0;
            border-radius: 5rem;
            cursor: pointer;
            display: flex;
            justify-content: center;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            :focus{
                outline: none;
                box-shadow: 0 0 3pt 2pt ${COLORS.darkPurple};
            }
            img{
                width: 30px;
                height: 30px;
            }
        }
    }

    .best-seats-container{
        margin-top: 60px;
        height: 400px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        overflow-y: auto;

        .seat-card{
            flex: 1 1 1 1;
            margin: 20px;
        }

        .message-container{
            p{
                font-size: 42px;
                color: ${COLORS.darkPurple};
                margin-top: 60px;
            }
        }

        ::-webkit-scrollbar {
            width: 12px;
            transform: translateY(-10px);
        }
 
        ::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
            border-radius: 20px;
            width: 20px;

        }
        
        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.9); 
        }
        
    }
`

export default Wrapper;