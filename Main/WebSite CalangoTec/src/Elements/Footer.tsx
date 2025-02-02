import instagram from "../Assets/instaAmarelo.png";
import linkedin from "../Assets/linkedinAmarelo.png";
import email from "../Assets/logoemailamarelo.png";
import logoAmarelo from "../Assets/logoAmarelo.png";

function Footer() { 
    return (
        <footer className="w-full font-['Inter'] bg-neutral-800 p-6">
            {/* Container principal centralizado */}
            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-[#ffd907] px-4">
                
                {/* Seção de Redes Sociais */}
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-16 mb-5">
                    <div className="flex items-center gap-2">
                        <img className="w-8 h-8" src={instagram} alt="Instagram" />
                        <a href="https://www.instagram.com/calangotecbaja/" target="_blank" className="text-[#ffd907] text-[19px] font-bold">
                            Instagram
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-8 h-8" src={linkedin} alt="Linkedin" />
                        <a href="https://www.linkedin.com/company/calangotecbaja/posts/?feedView=all" target="_blank" className="text-[#ffd907] text-[19px] font-bold">
                            Linkedin
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-8 h-8" src={email} alt="email" />
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=calangotecbaja@gmail.com" target="_blank" className="text-[#ffd907] text-[19px] font-bold">
                            Email
                        </a>
                    </div>
                </div>

                {/* Linha divisória */}
                <div className="w-full border-t border-[#ffd907] my-4"></div>

                {/* Seções de Menu, Endereço, Contato */}
                <div className="w-full flex flex-col md:flex-row justify-around items-center md:items-start mb-6 text-center md:text-left">
                    
                    {/* Menu */}
                    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                        <h4 className="text-[#ffd907] font-bold text-xl mb-2">Menu:</h4>           
                        <li><a href="/home" className="text-[#ffd907] text-[19px] underline">Home</a></li>
                        <li><a href="/loja" className="text-[#ffd907] text-[19px] underline">Loja</a></li>
                        <li><a href="/Subsistemas" className="text-[#ffd907] text-[19px] underline">Subsistemas</a></li>
                        <li><a href="/contato" className="text-[#ffd907] text-[19px] underline">Contato</a></li>
                    </div>

                    {/* Endereço */}
                    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                        <h4 className="text-[#ffd907] text-xl font-bold mb-2">Endereço:</h4>
                        <li><a href="https://maps.app.goo.gl/XbaNbhRjrh4d6E88A" target="_blank" className="text-[#ffd907] text-[19px] underline">Av. Orlando Gomes, 1845 - Piatã, Salvador - BA, 41650-010</a></li>
                    </div>

                    {/* Contato */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-[#ffd907] text-xl font-bold mb-2">Contato:</h4>
                        <li className="font-bold text-[#ffd907] text-[19px] underline"><a href="https://api.whatsapp.com/send?phone=5575998775493" target="_blank">• +55 (75) 99877-5493 (Augusto - Capitão)</a></li>
                        <li className="font-bold text-[#ffd907] text-[19px] underline"><a href="https://api.whatsapp.com/send?phone=5571983922618" target="_blank">• +55 (71) 98392-2618 (Laisa - Vice Capitã)</a></li>
                    </div>
                </div>

                {/* Logo e Direitos Reservados */}
                <div className="flex flex-col items-center">
                    <img className="w-16 h-16 mb-2" src={logoAmarelo} alt="Logo CalangoTec" />
                    <p className="text-center text-[#ffd907] text-[19px]">
                        © CalangoTec Baja - Direitos Reservados
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
