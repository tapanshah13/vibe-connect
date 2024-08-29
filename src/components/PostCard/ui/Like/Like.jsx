
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import LikeText from "@/components/PostCard/ui/Like/LikeText";
import LikeList from "@/components/PostCard/ui/Like/LikeList";
import {Suspense} from "react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";


export default async function Like({userID, postCardID, likes}){

    //const {user} = await getServerSession(authOptions);

    return (
        <div className={"flex items-center"}>

            <Dialog>

                <LikeText likeList={likes} postCardID={postCardID} userId={userID}/>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Likes</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">

                        <LikeList postID={postCardID} />

                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )

}


function HeartIcon(props) {
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
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    )
}