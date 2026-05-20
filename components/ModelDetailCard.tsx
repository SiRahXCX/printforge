import Image from 'next/image'
import { ModelCardProps } from '@/app/types/index'

export default function ModelDetailCard(props: ModelCardProps) {
    return (
        <div className="flex flex-row px-5 py-[76.5px]">
            <div className="border border-gray-200 rounded-[1.78px]">
                <Image 
                    src={`${props.image}`}
                    alt="A 3D Model"
                    width={662}
                    height={662}
                />
            </div>
            <div className="py-[257.5]">
                <div className="mb-10">
                    <div className="mb-4.5">
                        <div className="flex flex-row flex-nowrap justify-between items-center w-fit mb-1.5">
                            <Image
                                src="/icons/heart.png"
                                alt="heart icon"
                                width={18.5}
                                height={15.5}
                            />
                            <div className="font-body font-normal text-[14.27px] text-[#606060] ms-1 pt-[0.5px]">{props.likes}</div>
                        </div>
                        <div className="font-heading text-[21.41px] font-bold leading-none tracking-normal">{props.name}</div>
                    </div>
                    <div className="mb-4.5">
                        <button type="button" className="border border-[#A1A1A1] p-2.5 rounded-[20px] font-body text-[16px]">{props.category}</button>
                    </div>
                    <div className="font-body font-normal text-2xl leading-none tracking-normal">{props.description}</div>
                </div>
                <div className="font-body font-normal text-md">Added on {props.dateAdded.slice(0, 10)}</div>
            </div>
        </div>
    )
}