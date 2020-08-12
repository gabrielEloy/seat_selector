import styled from 'styled-components';
import COLORS from '../../constants/colors'

const Wrapper = styled.div`
    .title-text{
        font-size: 72px;
        color: ${COLORS.secondary};
    }
    .seats-number-container{
        display: flex;
        position: relative;
        padding-bottom: 20px;

        input{
            width: 200px;
            border-radius : .5em;
            border: none;
            font-size: 52px;
            text-align: center;
            font-family: Vesper Libre;
            background: ${COLORS.background};
            :focus{
                box-shadow: 0 0 3pt 2pt ${COLORS.darkPurple};
                outline: none;
            }
        }
    }

    .main-container{
        textarea{
            resize: none;
            margin-top: 40px;
            height: 190px;
            border-radius: 20px;
            background: ${COLORS.background};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border: none;
            margin-bottom: 20px;
            box-sizing: border-box;
            padding: 10px;
            font-family: Vesper Libre;
            
            :focus{
                outline: none;
                box-shadow: 0 0 3pt 2pt ${COLORS.darkPurple};
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




        button{
            width: 200px;
            height: 60px;
            font-family: inherit;
            border: none;
            border-radius: .3em;
            background: ${COLORS.contrast};
            color: ${COLORS.background};
            font-size: 32px;
            cursor: pointer;
            :focus{
                outline: none;
                box-shadow: 0 0 3pt 2pt ${COLORS.darkPurple};
            }
        }
    }
`

export default Wrapper;