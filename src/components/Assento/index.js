import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Carregar from "../Carregar";
import FooterAssentos from "../FooterAssentos";

export default function Assento(props){
    console.log(props)
    const {selecionado , nome } = props;
    let foiSelecionado= selecionado ? "disponivel" : "indisponivel";

    // if(selecionado === true){
    //     const [selecionado, setSelecionado] = useState("");
    // }

    return(
        <div className={`assento ${foiSelecionado}`}>
            <p>{nome}</p>
        </div>
    );
}