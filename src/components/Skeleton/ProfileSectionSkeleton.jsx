import ProfileSection from "@/components/Profile/ProfileSection";
import {Suspense} from "react";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";
import ProfilePosts from "@/components/Profile/ProfilePosts";


export default function ProfileSectionSkeleton(){

    return (
        <div className="rounded-lg animate-pulse">
            <div>
                <div className="w-28 h-28 rounded-full bg-gray-200"></div>

                <div className="mt-4">
                    <div className="border h-[25px] bg-gray-200 rounded w-1/5"></div>
                    <div className="mt-2 h-[25px] bg-gray-200 rounded w-1/3"></div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">

                    <div>
                        <div className="h-[25px] bg-gray-200 rounded w-12"></div>
                        <div className="mt-1 h-[20px] bg-gray-200 rounded w-1/4"></div>
                    </div>

                    <div>
                        <div className="h-[25px] bg-gray-200 rounded w-12"></div>
                        <div className="mt-1 h-[20px] bg-gray-200 rounded w-1/4"></div>
                    </div>

                    <div>
                        <div className="h-[25px] bg-gray-200 rounded w-12"></div>
                        <div className="mt-1 h-[20px] bg-gray-200 rounded w-1/4"></div>
                    </div>

                </div>

                <div className="flex items-center gap-4 mt-4 mb-4">
                    <div className="rounded-md h-10 w-[12%] bg-gray-200"></div>
                </div>
            </div>
        </div>
    )
}