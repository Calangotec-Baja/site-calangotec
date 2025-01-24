import instagram from "../Assets/instaAmarelo.png";
import linkedin from "../Assets/linkedinAmarelo.png";
import email from "../Assets/logoemailamarelo.png";
import logoAmarelo from "../Assets/logoAmarelo.png";



function Footer() { 
    return (
        
<footer className="w-full font-['Inter'] bg-neutral-800 p-6">
     {/* Container principal centralizado */}
  <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-[#ffd907]">
    
    {/* Seção de Redes Sociais */}
    <div className="flex justify-center items-center space-x-8 mb-5 gap-32">
      <div className="flex items-center gap-[10px]">
        <img className="w-39px h-[39px]" src={instagram} alt="Instagram" />
        <a href="https://www.instagram.com/ctresgatepraticoba/" target="_blank" className="text-[#ffd907] text-[19px] font-bold font-['Inter']">
          Instagram
        </a>
      </div>
      <div className="flex items-center gap-[16px]">
        <img className="w-39px h-[39px]" src={linkedin} alt="Linkedin" />
        <a href="https://br.linkedin.com/company/resgate-pr%C3%A1tico" target="_blank" className="text-[#ffd907] text-[19px] font-bold font-['Inter']">
          Linkedin
        </a>
      </div>
      <div className="flex items-center gap-[14px]">
        <img className="w-[39px] h-[39px]" src={email} alt="email" />
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=calangotecbaja@gmail.com" target="_blank" className="text-[#ffd907] text-[19px] font-bold font-['Inter']">
          Email
        </a>
      </div>
    </div>

    {/* Linha divisória */}
    <div className="w-full border-t border-[#ffd907] my-4"></div>

    {/* Seções de Menu, Endereço, Contato */}
    <div className="w-full flex flex-col md:flex-row justify-around items-start mb-6 space-y-4 md:space-y-0">
      
      {/* Menu */}
      <div className="text-left">
        <h4 className="text-[#ffd907] font-bold mb-2 font-['Inter']">Menu:</h4>
        <ul>
          <li><a href="/home" className="Home w-[140px] h-[23px] text-[#ffd907] text-[19px] font-normal font-['Inter'] tracking-tight ">• Home</a></li>
          <li><a href="/loja" className="Home w-[140px] h-[23px] text-[#ffd907] text-[19px] font-normal font-['Inter'] tracking-tight">• Loja</a></li>
          <li><a href="/Subsistemas" className="Home w-[140px] h-[23px] text-[#ffd907] text-[19px] font-normal font-['Inter'] tracking-tight">• Subsistemas</a></li>
          <li><a href="/contato" className="Home w-[140px] h-[23px] text-[#ffd907] text-[19px] font-normal font-['Inter'] tracking-tight">• Contato</a></li>
        </ul>
      </div>

      {/* Endereço */}
      <div className="text-left">
        <h4 className="text-[#ffd907] font-bold mb-2">Endereço:</h4>
        <ul>
          <li><a href="https://maps.app.goo.gl/XbaNbhRjrh4d6E88A" className="text-[#ffd907] text-[19px] font-bold font-['Inter']"  > • Av. Orlando Gomes, 1845 - Piatã, Salvador - BA, 41650-010</a></li>
        </ul>
      </div>

      {/* Contato */}
      <div className="text-left">
        <h4 className="text-lg font-bold mb-2 text-[#ffd907]">Contato:</h4>
        <ul>
          <li className=" font-bold text-[#ffd907]">• +55 (75) 99877-5493 (Augusto - Capitão)</li>
          <li className=" font-bold text-[#ffd907]">• +55 (71) 98392-2618 (Laisa - Vice Capitã)</li>
        </ul>
      </div>
    </div>

    {/* Logo e Direitos Reservados */}
    <div className="flex flex-col items-center">
      <img className="w-16 h-16 mb-4" src={logoAmarelo} alt="Logo Resgate Prático" />
      <p className="text-center text-sm text-[#ffd907] text-[19px] font-normal font-['Inter']">
      © CalangoTec Baja - Direitos Reservados
      </p>
    </div>
    </div>
</footer>
     

    )
}

export default Footer;