import Header from "../../Elements/Header";
import fotoEquipe from '../../assets/fotoEquipe.png'

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <img src={fotoEquipe} alt="fotoEquipe" className="w-full"/>
                <h1 className="text-black">Home</h1>
            </main>
            {/* <Footer/> */}
        </>
    )
}