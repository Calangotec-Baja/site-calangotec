import instagram from "../Assets/instaAmarelo.png";
import linkedin from "../Assets/linkedinAmarelo.png";
import facebook from "../Assets/faceAmarelo.png";
import logoAmarelo from "../Assets/logoAmarelo.png";

function Footer() { 
    return (
<footer className="w-full font-['Inter'] bg-[#2c2c2c] p-6">
<div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-white">
<div data-layer="footer" className="Footer w-[1440px] h-[454px] relative bg-[#2c2c2c]">
    <div data-layer="Group 1" className="Group1 w-[1271.65px] h-[396px] left-[58.24px] top-[46px] absolute">
        <div data-layer="Frame 2" className="Frame2 h-[39px] left-[318.76px] top-0 absolute justify-start items-center gap-[146px] inline-flex">
            <div data-layer="Frame 162" className="Frame162 justify-start items-center gap-[3px] flex">
                <img data-layer="instaAmarelo" className="Instaamarelo w-[70px] h-10" src={instagram} />
                <div data-layer="Instagram" className="Instagram w-[99px] h-[23px] text-[#ffd907] text-[19px] font-bold font-['Inter'] tracking-tight">Instagram</div>
            </div>
            <div data-layer="Frame 163" className="Frame163 h-[39px] justify-center items-center gap-4 flex">
                <img data-layer="linkedin" className="Linkedin w-[39px] h-[39px]" src={linkedin} />
                <div data-layer="Linkedin" className="Linkedin w-[99px] h-[23px] text-[#ffd907] text-[19px] font-bold font-['Inter'] tracking-tight">Linkedin</div>
            </div>
            <div data-layer="Frame 164" className="Frame164 w-[139px] h-9 relative">
                <img data-layer="faceAMARELIO" className="Faceamarelio w-[68px] h-[38px] left-[-23px] top-[-1px] absolute" src={facebook}/>
                <div data-layer="Facebook" className="Facebook w-[99px] h-[23px] left-[40px] top-[6.50px] absolute text-[#ffd907] text-[19px] font-bold font-['Inter'] tracking-tight">Facebook</div>
                
            </div>
        </div>
        <div data-layer="Line 1" className="Line1" style={{width: 1271.65, height: 0, left: 0, top: 60.08, position: 'absolute', border: '2px #FFDA07 solid'}}></div>
        <div data-layer="© CalangoTec Baja - Direitos Reservados" className="CalangotecBajaDireitosReservados w-[399.34px] h-[46px] left-[443.76px] top-[350px] absolute text-[#ffd907] text-[19px] font-normal font-['Inter'] tracking-tight">© CalangoTec Baja - Direitos Reservados</div>
    
    </div>
    <div data-layer="endereço" className="EndereO w-[409.76px] h-[104.98px] left-[487.06px] top-[127.72px] absolute flex-col justify-start items-start gap-5 inline-flex">
        <div data-layer="Endereço:" className="EndereO self-stretch h-[23px] text-[#ffd907] text-[19px] font-bold font-['Inter'] tracking-tight">Endereço:<br/></div>
        <div data-layer="Av. Orlando Gomes, 1845 - Piatã, Salvador - BA, 41650-010" className="AvOrlandoGomes1845PiatSalvadorBa41650010 self-stretch h-[71px] text-[#ffd907] text-[19px] font-bold font-['Inter'] tracking-tight">Av. Orlando Gomes, 1845 - Piatã, Salvador - BA, 41650-010<br/></div>
    </div>
    <div data-layer="contato" className="Contato w-[288.85px] h-[108.04px] left-[1003.76px] top-[124.96px] absolute">
        <div data-layer="Contato:" className="Contato w-[90px] h-[21.18px] left-0 top-0 absolute text-[#ffd907] text-[19px] font-bold font-['Inter'] tracking-tight">Contato:<br/></div>
        <div data-layer="calangotecbaja@gmail.com" className="CalangotecbajaGmailCom w-[286.80px] h-[21px] left-[2.04px] top-[87.04px] absolute text-[#ffd907] text-[19px] font-normal font-['Inter'] tracking-tight">calangotecbaja@gmail.com</div>
        <div data-layer="(xx) xxxx-xxxx" className="XxXxxxXxxx w-[176.82px] h-[21.18px] left-[-0px] top-[41.44px] absolute text-[#ffd907] text-[19px] font-bold font-['Inter'] tracking-tight">(xx) xxxx-xxxx</div>
    </div>
    <div data-layer="menu" className="Menu pb-[70px] left-[99.59px] top-[133px] absolute flex-col justify-start items-start gap-[15px] inline-flex">
        <div data-layer="Menu:" className="Menu w-[140px] h-[23px] text-[#ffd907] text-[19px] font-bold font-['Inter'] tracking-tight">Menu:</div>
        <div data-layer="Home" className="Home w-[140px] h-[23px] text-[#ffd907] text-[19px] font-normal font-['Inter'] tracking-tight">Home</div>
        <div data-layer="CalangoTec" className="Calangotec w-[140px] h-[23px] text-[#ffd907] text-[19px] font-normal font-['Inter'] tracking-tight">CalangoTec</div>
        <div data-layer="Subsistemas" className="Subsistemas w-40 h-[23px] text-[#ffd907] text-[19px] font-normal font-['Inter'] tracking-tight">Subsistemas</div>
        <div data-layer="Contato" className="Contato w-[140px] h-[23px] text-[#ffd907] text-[19px] font-normal font-['Inter'] tracking-tight">Contato</div>
    </div>
    <img data-layer="logoAmarelo" className="Logoamarelo w-[95px] h-[84px] left-[647px] top-[287px] absolute" src={logoAmarelo} />
</div>
</div>
</footer>
    )
}

export default Footer;