import Image from 'next/image'
import logo from '@/app/assets/images/logo.png'

export default function NavBar() {
    return (
        <header className="flex justify-between items-center px-10 h-21.75 mb-10">
            <div className="w-60 h-15.25">
                <Image 
                    src={logo}
                    alt="Printforge logo"
                />
            </div>
            <nav>
                <ul className="flex list-none">
                    <li className="font-mono text-sm text-[#606060] font-semibold ">3D MODELS</li>
                    <li className="font-mono text-sm text-[#606060] font-semibold ms-10">ABOUT</li>
                </ul>
            </nav>
        </header>
    )
}