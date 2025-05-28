import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Projetos from "./pages/projetos";
import Contatos from "./pages/contatos";

function AppRoutes(){
    return(
        <BrowserRouter basename="/React-funcional">
        <Routes>
            <Route path="/" element={ <Home /> }> </Route>
            <Route path="/sobre" element={ <Sobre /> }> </Route>
            <Route path="/projetos" element={ <Projetos /> }> </Route>
            <Route path="/contatos" element={ <Contatos /> }> </Route>
        </Routes>
        </BrowserRouter>
    )
   
}

export default AppRoutes
