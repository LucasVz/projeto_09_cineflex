import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from "../Header";
import { Link } from "react-router-dom";

export default function SelecionarFilmes(){
    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
        const promessa = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies');
        promessa.then(resposta => {
          setFilmes(resposta.data);
        });
      }, []);

    return(
        <>
            <Header />
            <h1 className="titulo">Selecione o filme</h1>
            <div className="filmes">
                {filmes.map(filme => (
                    <div className="filme" key={filme.id}>
                        <Link  to={`/sessoes/${filme.id}`}>
                            <img src={filme.posterURL}  alt="filmes"/>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}