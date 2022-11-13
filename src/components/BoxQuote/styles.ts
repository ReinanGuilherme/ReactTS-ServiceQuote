import styled from "styled-components";

export const Container = styled.div`

    width: 500px;
    margin: 20px auto;

    background-color: rgba(255,255,255,0.8);
    padding: 10px;

    font-family: 'Courier New', Courier, monospace;

    .containerBtn {

        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        .btnTranslate {
            background-color: transparent;

            .iconTranslate {
                margin-right: 5px;
            }
        }   

        .btnCopy {
            background-color: transparent;
            transition: all 0.5s;

            &:hover {
                transform: scale(1.2);
            }
        }

        img {
            width: 20px;
            margin-right: 15px;
        }
    }

    #textEnUS {
        display: none;
    }

    .Text {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .Author {
        text-align: right;
        font-size: 12px;
    }

    @media (max-width: 500px) {
        width: 300px;

        .Text {
            font-size: 14px;
        }
    }
`