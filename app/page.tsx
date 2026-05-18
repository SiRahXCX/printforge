import Image from 'next/image'
import modelImage from '@/app/assets/images/3d_models.png'
import logo from '@/app/assets/images/logo.png'

function NavBar() {
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

export default function HomePage() {
    return (
        <>
            <NavBar /> 
            <main>
                <div className="flex justify-evenly items-center">
                    <div className="w-150 h-113">
                        <div className="mb-18.25">
                            <div className="text-base font-medium mb-5">YOUR GO-TO PLATFORM FOR 3D PRINTING FILES</div>
                            <div className="text-[56px] font-bold leading-none mb-5">Discover what's possible with 3D printing</div>
                            <div className="text-[28px] font-regular leading-none">Join our community of creators and explore a vast library of user-submitted models.</div>
                        </div>
                        <button type="button" className="text-lg font-semibold border-2 p-3">BROWSER MORE</button>
                    </div>
                    <div className="ms-25">
                        <Image 
                            src={modelImage}
                            alt="Splash screen"
                            width={627}
                            height={627}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
