import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from "../Footer";
import Carregar from "../Carregar"

export default function SelecionarFilmes(){
    const {idFilme} = useParams();

    const [horarios, setHorarios] = useState([]);
    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
        promessa.then(resposta => {
          setHorarios(resposta.data);
        });
      }, []);

      if (horarios.length === 0) {
        return <Carregar/>
      }

    return(
        <>
            <Header />
            <h1 className="titulo">Selecione o horario</h1>
            <div className="selecionar-horario">
                {horarios.days.map((data) => (
                    <div key={data.id}>
                        <p className="data">{data.weekday} - {data.date}</p>
                        <div className="botao-hora">
                            {data.showtimes.map((hora) => (
                                <div key={hora.id}>
                                    <Link  to={`/assentos/${hora.id}`}>
                                        <p className="hora">{hora.name}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Footer horarios={horarios}/>
        </>
    )
}

