import Header from "../Header";
import { Link} from "react-router-dom";
export default function Sucesso(){
    return(
        <>
            <Header />
            <div className="sucesso">
                <h1 className="pedido-sucesso">Pedido feito
                com sucesso!</h1>

                <p className="resultados">Filme e sessão</p>

                <p className="resultados">Ingressos</p>

                <p className="resultados">Comprador</p>
                <Link  to={`/`}>
                    <button className="botão-laranja">Voltar pra Home</button>
                </Link>
            </div>
        </>
    )
}
