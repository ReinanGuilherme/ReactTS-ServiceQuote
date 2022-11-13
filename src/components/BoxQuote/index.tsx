import { useRef, useState } from "react";

import { propsBoxQuote } from "./interface";

import { Container } from "./styles";

import {MdContentCopy} from "react-icons/md"
import {BsTranslate} from "react-icons/bs"

import ReactTooltip from "react-tooltip";

export function BoxQuote(props: propsBoxQuote){

    //ref para manipular os elementos text da boxQuote
    const refEnUS = useRef<HTMLParagraphElement>(null)
    const refPtBR = useRef<HTMLParagraphElement>(null)
    //alterando o conteudo do botão que altera os textos, conforme a função é chamada ela altera de ingles para portugues
    const [changeBtnText, setChangeBtnText] = useState("Inglês")

    //copia o conteudo da boxQuote
    function CopyText() {  
        if(refPtBR.current?.style.display != "none"){
            navigator.clipboard.writeText(props.text_ptBR as string)
        } else {            
            navigator.clipboard.writeText(props.text_enUS as string)
        }   
    }

    function ChangeLanguage(){

        if(refPtBR.current?.style.display != "none"){
            refEnUS.current!.style.display = "block"
            refPtBR.current!.style.display = "none"
            setChangeBtnText("Português")
        } else {
            refEnUS.current!.style.display = "none"
            refPtBR.current!.style.display = "block"
            setChangeBtnText("Inglês")
        }
    }

    return (
        <Container>
            <div className="containerBtn">
                <button className="btnTranslate" onClick={ChangeLanguage}><BsTranslate className="iconTranslate"/>{changeBtnText}</button>
                <button 
                    onClick={CopyText} 
                    className="btnCopy"
                    data-tip data-for="btnCopy">
                    <MdContentCopy/>
                </button>                
                <ReactTooltip 
                    id="btnCopy"
                    place="top"
                    type="dark"
                    effect="solid"
                    event="click">
                    <p>Copiado</p>
                </ReactTooltip>
            </div>
            <p id="textEnUS" className="Text" ref={refEnUS} translate="no">{props.text_enUS}</p>
            <p id="textPtBR" className="Text" ref={refPtBR} translate="no">{props.text_ptBR}</p>
            <p className="Author" translate="no">Autor: {props.author}</p>
        </Container>
    )
}