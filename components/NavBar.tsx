'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import NavLink from '@/components/NavLink'

export default function NavBar() {
    const pathname = usePathname()

    return (
        <header className="flex justify-between items-center px-10 h-21.75 mb-10">
            <NavLink href="/">
                <div>
                    <Image 
                        src="/images/logo.png"
                        alt="Printforge logo"
                        width={240}
                        height={61}
                        loading="eager"
                    />
                </div>
            </NavLink>
            <nav>
                <ul className="flex list-none">
                    <li>
                        <NavLink
                            href="/3d-models" 
                            isActive={pathname.startsWith('/3d-models')}
                        >
                            3d models
                        </NavLink>
                    </li>
                    <li className="ms-10">
                        <NavLink 
                            href="/about" 
                            isActive={pathname.startsWith('/about')}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}