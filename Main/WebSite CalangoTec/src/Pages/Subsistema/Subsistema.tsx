import { useParams } from "react-router-dom"
import Header from "../../Elements/Header";
import Eletronica from "./Eletronica/Eletronica";

export default function Subsistema() {
    const subsistema = useParams().subsistema
    let element = <></>
    if (subsistema === "eletronica") element = <Eletronica />
    
    return (
        <>
            <Header />
            {element}
        </>
    )
}