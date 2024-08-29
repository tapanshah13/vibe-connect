
import Like from "@/components/PostCard/ui/Like/Like";
import DropToolMenu from "@/components/PostCard/ui/DropToolMenu";
import Image from "next/image";
import AvatarDisplay from "@/components/AvatarDisplay";
import {getTimeAgo} from "@/lib/utils";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function PostCard({postData, size}){

    const session = await getServerSession(authOptions);
    const userID = session?.user.id;
    const maxWidth = size === 'large' ? 'max-w-2xl' : 'max-w-lg';
    const {_id: postID, user, image: postImage, caption, likes, comments, createdAt} = postData;
    const selfPost = userID !== user._id;


    return (
        <div className={`border shadow-sm rounded-lg ${maxWidth} w-full`}>
            <div className="p-4">

                <div className={"flex justify-between"}>
                    <Link href={selfPost ? `profile/${user._id}` : "#"} className={`group ${!selfPost && 'pointer-events-none'}`} type={"submit"}>

                        <div className={"flex items-center gap-3 mb-4"}>
                            <AvatarDisplay className={`${selfPost && "group-hover:cursor-pointer"} w-12 h-12`}
                                           username={user.username}
                                           profilePic={user.profilePic}
                            />

                            <div className={"flex flex-col items-start"}>
                                <h2 className={`font-semibold text-md ${selfPost ? 'group-hover:underline group-hover:cursor-pointer' : "group-hover:cursor-default"}`}>{user.username}</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 cursor-default">✦ {getTimeAgo(createdAt)}</p>
                            </div>
                        </div>
                    </Link>

                    <div>
                        <DropToolMenu userID={userID} postData={{postCardID: postID, postUserID: user._id, imageURL: postImage}}/>
                    </div>
                </div>


                <p className="mt-2">{caption}</p>

                <div className={"flex gap-5"}>
                    <div className={'lg:w-[700px] w-full'}>
                        <Image
                            key={postID}
                            alt={caption}
                            className="rounded-lg object-cover w-full aspect-[4/3]  group-hover:opacity-50 transition-opacity mt-4"
                            src={postImage}
                            height={500}
                            width={500}
                        />
                    </div>

                </div>

                <div className="flex items-center mt-3 justify-normal select-none gap-5">
                    <Like postCardID={postID} likes={likes} userID={userID}/>
                </div>

            </div>
        </div>
    )
}


function ShareIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" x2="12" y1="2" y2="15" />
        </svg>
    )
}


function Trash2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
        </svg>
    )
}