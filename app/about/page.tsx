import Image from 'next/image'
import stackIcon from '@/app/assets/icons/stack.png'
import globeIcon from '@/app/assets/icons/globe.png'
import flagIcon from '@/app/assets/icons/flag.png'

export default function AboutPage() {
    return (
        <>
            <main>
                <div className="flex justify-around items-center mb-10 py-10 border-b border-b-[#DDDDDD]">
                    <div>
                        <Image
                            src="/images/about-models.png"
                            alt="3D printed models"
                            width={627}
                            height={627}
                        />
                    </div>
                    <div className="w-150 h-135">
                        <div className="font-body text-xl font-medium mb-5">About printforge</div>  
                        <div className="font-heading text-[56px] font-bold mb-5 leading-none">Empowering makers worldwide</div>
                        <div className="font-body text-[28px] font-normal leading-none">
                            <div className="mb-10">Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing</div>
                            <div>Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.</div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-evenly py-10 mb-10">
                    <div className="w-87.5 h-31">
                        <div className="flex items-center mb-4.5">
                            <div>
                                <Image 
                                    src="/icons/stack.png"
                                    alt="stack icon"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="font-heading text-[28px] font-bold ms-1.5">100K+ models</div>
                        </div>
                        <div className="font-body text-lg font-regular leading-none">
                            Access our vast library of community-created 3D models, from practical tools to artistic creations.
                        </div>
                    </div>

                    <div className="w-87.5 h-31">
                        <div className="flex items-center mb-4.5">
                            <div>
                                <Image 
                                    src="/icons/globe.png"
                                    alt="globe icon"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="font-heading text-[28px] font-bold ms-1.5">Active Community</div>
                        </div>
                        <div className="font-body text-lg font-regular leading-none">
                        Join thousands of makers who share tips, provide feedback, and collaborate on projects.
                        </div>
                    </div>

                    <div className="w-87.5 h-31 ms-12">
                        <div className="flex items-center mb-4.5">
                            <div>
                                <Image 
                                    src="/icons/flag.png"
                                    alt="flag icon"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="font-heading text-[28px] font-bold ms-1.5">Free to Use</div>
                        </div>
                        <div className="font-body text-lg font-regular leading-none">
                            Most models are free to download, with optional premium features for power users.
                        </div>
                    </div>
                </div>
            
                <div className="border-t border-t-[#DDDDDD] ">
                    <div className="w-200 h-125.5 mx-auto py-10">
                        <div className="font-heading text-[56px] font-bold">Our vision</div>
                        <div className="font-body text-[28px] font-regular leading-none">
                            <div>
                                At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and creativity that pushes the boundaries of what's possible with 3D printing.
                            </div>
                            <hr 
                                className="my-9.5 w-1/2 mx-auto"
                            />
                            <div>
                                Whether you're a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}