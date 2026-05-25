import Image from 'next/image'
import { ModelCardProps } from '@/app/types/index'

export default function ModelCard(props: ModelCardProps) {
    return (
        <div className="w-[267.65px]">
            <div className="border border-gray-200 rounded-[1.78px]">
                <Image 
                    src={`${props.image}`}
                    alt="A 3D Model"
                    width={267.65}
                    height={267.65}
                />
            </div>
            <div className="border-[.95px] border-[#A1A1A1] rounded-[9.47px] p-[15.15px]">
                <div className="font-heading text-[21.41px] font-bold mb-4">{props.name}</div>
                <div className="font-body text-[17.84px] font-normal leading-tight mb-4">{props.description}</div>
                <button type="button" className="p-[8.92px] border-[#A1A1A1] border-[0.89px] rounded-[17.84px] mb-4">{props.category}</button>
                <div className="flex flex-row flex-nowrap justify-between items-center w-fit">
                    <Image
                        src="/icons/heart.png"
                        alt="heart icon"
                        width={18.5}
                        height={15.5}
                    />
                    <div className="font-body font-normal text-[14.27px] text-[#606060] ms-1 pt-[0.5px]">{props.likes}</div>
                </div>
            </div>
        </div>
    )
}