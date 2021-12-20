import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Carregar from "../Carregar";
import FooterAssentos from "../FooterAssentos";

export default function Assento(props){
    const {selecionado , nome, id } = props;
    let foiSelecionado= selecionado ? "disponivel" : "indisponivel";
    let arrayId = []
    const [seleciona, setSeleciona] = useState("");
    function selecionarCadeiras(){
        if(selecionado === true ){
            if(seleciona !== "selecionado"){
                setSeleciona("selecionado")
                arrayId.push(id)
                console.log(arrayId)
            }else{setSeleciona("")}
    
        }else{
            alert("Esse assento não está disponível");
        }
    }
    return(
        <div onClick={selecionarCadeiras} className={`assento ${foiSelecionado} ${seleciona}`}>
            <p>{nome}</p>
        </div>
    );
}