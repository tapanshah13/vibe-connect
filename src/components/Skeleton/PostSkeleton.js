import {cn} from "@/lib/utils";
import Image from "next/image";

export const SkeletonCard = ({size}) => {

    const maxWidth = size === 'large' ? 'max-w-2xl' : 'max-w-xl';

    return (
        <div className={`${maxWidth} shadow-sm border rounded-lg w-full animate-pulse`}>
            <div className="p-4">
                <div className="flex justify-between mb-4">
                    <div className={"flex items-center"}>
                        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                        <div className="flex flex-col ml-4">
                            <div className="h-4 bg-gray-200 rounded w-24"></div>
                            <div className="h-4 bg-gray-200 rounded w-16 mt-2"></div>
                        </div>
                    </div>
                    <div className="h-8 w-8 bg-gray-200 rounded"></div>
                </div>
                <div className="mt-7 h-5 w-1/2 bg-gray-200 rounded"></div>

                <div className="mt-5 lg:h-[480px] h-52 w-full bg-gray-200 rounded"></div>

                <div className="flex items-center mt-5 mb-1 gap-3 select-none">
                    <div className="w-12 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-7 h-6 bg-gray-200 rounded"></div>
                </div>
            </div>
        </div>
    )
}

export default function PostSkeleton({size, limit, className}){


    const postSkeleton = Array.from({length: limit}, (_, index) => (
        <SkeletonCard size={size} key={index}/>
    ))

    return (
        <div className={cn("w-full ", className)}>
            {postSkeleton}
        </div>
    )

}