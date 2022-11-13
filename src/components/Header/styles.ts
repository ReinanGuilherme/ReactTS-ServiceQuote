import styled from "styled-components";

export const Container = styled.div`

    width: 100vw;

    padding: 10px 20px;

    background-color: #fff;
    position: fixed;
    top: 0;

    display: flex;
    align-items: center;

    a {
        margin-right: 10px;

        &:nth-child(1) {
                    color: #0a66c2;
        }
               
        &:nth-child(2) {
            color: #000;
        }
    }

    p {
        font-family: 'Courier New', Courier, monospace;
    }
`