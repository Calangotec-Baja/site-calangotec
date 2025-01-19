import { NavLink } from "react-router-dom"

export default function Subsistemas() {
    return (
        <>
            <h1>Subsistemas</h1>
            <NavLink to="/subsistemas/eletronica">Eletrônica</NavLink>
            <NavLink to="/subsistemas/powertrain">Powertrain</NavLink>
            <NavLink to="/subsistemas/estrutura">Estrutura</NavLink>
            <NavLink to="/subsistemas/suspensao">Suspensão</NavLink>
            <NavLink to="/subsistemas/gestao">Gestão</NavLink>
            <NavLink to="/subsistemas/freios">Freios</NavLink>
        </>
    )
}