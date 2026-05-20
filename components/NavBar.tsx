import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return (
        <header className="flex justify-between items-center px-10 h-21.75 mb-10">
            <div>
                <Image 
                    src="/images/logo.png"
                    alt="Printforge logo"
                    width={240}
                    height={61}
                />
            </div>
            <nav>
                <ul className="flex list-none">
                    <li className="font-mono uppercase text-sm text-[#606060] font-semibold ">
                        <Link href="/3d-models">3d models</Link>
                    </li>
                    <li className="font-mono uppercase text-sm text-[#606060] font-semibold ms-10">
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}