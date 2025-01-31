import { Link } from 'react-router-dom'
import logoAmarelo from '../assets/logoAmarelo.png'
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navbarItens = [
        { name: 'HOME', link: '/home' },
        { name: 'SUBSISTEMAS', link: '/subsistemas' },
        { name: 'LOJA', link: '/loja' },
        { name: 'CONTATO', link: '/contato' },
    ]
    return (
        <header className="bg-black flex flex-col items-center sm:items-start sm:flex-row w-full font-[Inter]">
            <img src={logoAmarelo} alt="Logo" className="size-20 ml-4 p-2" onClick={() => {
                if (window.screen.width < 640)
                    setIsOpen(!isOpen);
                console.log(isOpen)
            }}/>
            <div className='w-full'></div>
            <nav id='navbar' className={'w-fit p-7 ' + (isOpen || window.screen.width >= 640 ? 'flex' : 'hidden') }>
                <ul className={'flex flex-col sm:flex-row items-center justify-center gap-8'}>
                    {
                        navbarItens.map(item => (
                            <Link key={item.name} to={item.link} onMouseEnter={() => {
                                document.getElementById(item.name)!.style.backgroundColor = 'yellow'
                            }} onMouseLeave={() => { document.getElementById(item.name)!.style.backgroundColor = 'transparent' }}>
                                <li className='font-bold text-yellow-300'>{item.name}</li>
                                <div id={item.name} className=' h-[2px] rounded-md transition-all duration-150 ease-in'></div>
                            </Link>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}