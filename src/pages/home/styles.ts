import styled from "styled-components";

import imgBG from "../../assets/imgHome/imgHome.jpg"

export const Container = styled.div`


    height: 100vh;
    width: 100vw;
    padding: 50px 25px;

    text-align: center;

    background-image: url(${imgBG});
    background-attachment: fixed;
    background-size: cover;

    overflow: auto;

    h1 {
        color: #fff;
        font-family: 'Courier New', Courier, monospace;
    }

`