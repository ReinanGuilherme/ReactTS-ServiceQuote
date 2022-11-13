import { Container } from "./styles";

import {BsGithub, BsLinkedin} from "react-icons/bs"

export function Header(){
    return (
        <Container>
            <a href="https://www.linkedin.com/in/reinan-guilherme-34086b236/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/ReinanGuilherme/ServiceQuote-ReactTS" target="_blank"><BsGithub/></a>
            <p>Reinan Guilherme</p>
        </Container>
    )
}