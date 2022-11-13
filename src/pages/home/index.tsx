import { useEffect, useState } from "react";
import { BoxQuote } from "../../components/BoxQuote";
import { propsBoxQuote } from "../../components/BoxQuote/interface";
import { ButtonViewMore } from "../../components/Buttons/stylesButtons";
import { Container } from "./styles";

export function Home() {

    
    const [pages, setPages] = useState([RandomNumber(75)])
    const [quotes, setQuotes] = useState<propsBoxQuote[]>([])

    //iniciando com a requisição das primeiras citações
    useEffect(() => {

        //iniciando com o primeiro item da requisição
        GetPageQuotes(pages[0])

    }, [])

    async function GetPageQuotes(page: number){
        let response = await fetch(`https://reinanguilherme.tech/ServiceQuote/GetPage?page=${page}&rows=5`)
            .then(response => response.json())

            return setQuotes([...quotes, ...response])
    }

    //gera numeros aleatorio de 0 até o numero maximo passado
    function RandomNumber(maxNumber: number){

        return Math.ceil(Math.random() * maxNumber)
    }

    //adiciona numero aleatorio as state Pages
    function AddNumberPage(maxNumber: number){

        let newNumber: number;
        let validateNumber;

        do {
            validateNumber = false
            newNumber = RandomNumber(maxNumber)
            
            pages.map(item => {
                if(item == newNumber){
                    validateNumber = true
                }
            })
            
        } while (validateNumber);

        //adicionando a nova pagina ao array
        setPages([...pages, newNumber])

        return newNumber
    }

    return (
        <Container>
            <h1>Citações</h1>

            {quotes.map((item, index) => {
                    return (
                        <BoxQuote key={index} text_enUS={item.text_enUS} text_ptBR={item.text_ptBR} author={item.author}/>
                    )
                })}   

            <ButtonViewMore onClick={() => GetPageQuotes(AddNumberPage(75))}>Ver Mais</ButtonViewMore>           

        </Container>
    )
}