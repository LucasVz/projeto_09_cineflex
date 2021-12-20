import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Carregar from "../Carregar";
import FooterAssentos from "../FooterAssentos";
import Assento from "../Assento";

export default function SelecionarAssentos(){
    const {idSessao} = useParams();
   //[guardarId, setGuardarId] = useState([]);
    const [assento, setAssento] = useState([]);
    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        promessa.then(resposta => {
          setAssento(resposta.data);
        });
      }, []);

    if (assento.length === 0) {
        return <Carregar />
    }

    //function guardarIdArray(){
        
    //}

    console.log(assento.seats)
    return(
        <>
            <Header />
            <h1 className="titulo">Selecione o(s) assento(s)</h1>
            <div className="assentos">
                {assento.seats.map(a=> (
                    <Assento id = {a.id} selecionado ={a.isAvailable} nome = {a.name} />
                ))}
            </div>

            <div className="legenda-assento">
                <div className="legenda-opcoes">
                    <p className="assento selecionado"></p>
                    <p>Selecionado</p>
                </div>
                <div className="legenda-opcoes">
                    <p className="assento"></p>
                    <p>Disponível</p>
                </div>
                <div className="legenda-opcoes">
                    <p className="assento indisponivel"></p>
                    <p>Indisponível</p>
                </div>
            </div>

            <div className="form">
                <p className="formulario">Nome do comprador:</p>
                <input placeholder="Digite seu nome..." className="input-formulario" type="text" />
                <p className="formulario">CPF do comprador:</p>
                <input placeholder="Digite seu CPF..." className="input-formulario" type="text" />
            </div>

            <div className="form-botao">
                <Link  to={`/sucesso`}>
                    <button className="botão-laranja">Reservar assento(s)</button>
                </Link>
            </div>
            <FooterAssentos assento = {assento} />
        </>
    )
}