import Image from 'next/image'

export default function HomePage() {
    return (
        <>
            <main>
                <div className="flex justify-evenly items-center">
                    <div className="w-150 h-113">
                        <div className="mb-18.25">
                            <div className="font-body text-base font-medium mb-5">YOUR GO-TO PLATFORM FOR 3D PRINTING FILES</div>
                            <div className="font-heading text-[56px] font-bold leading-none mb-5">Discover what's possible with 3D printing</div>
                            <div className="font-body text-[28px] font-regular leading-none">Join our community of creators and explore a vast library of user-submitted models.</div>
                        </div>
                        <button type="button" className="font-body text-lg font-semibold border-2 p-3">BROWSER MORE</button>
                    </div>
                    <div>
                        <Image 
                            src="/images/home-models.png"
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
