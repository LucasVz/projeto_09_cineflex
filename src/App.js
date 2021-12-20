import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelecionarAssentos from './components/SelecionarAssentos';
import SelecionarFilmes from './components/SelecionarFilmes';
import SelecionarHorarios from './components/SelecionarHorarios'


export default function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SelecionarFilmes />}></Route>
                <Route path="/sessoes/:idFilme" element={<SelecionarHorarios />}></Route>
                <Route path="/assentos/:idSessao" element={<SelecionarAssentos />}></Route>
            </Routes>
        </BrowserRouter>
    );
}