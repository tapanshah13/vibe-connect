


import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import AvatarDisplay from "@/components/AvatarDisplay";


export default function FollowingList({followings}){

    return (
        <Dialog>

            <DialogTrigger asChild className={"w-fit group hover:cursor-pointer"}>
                <div>
                    <h3 className="font-bold">{followings.length}</h3>
                    <p className="text-gray-500 dark:text-gray-400 group-hover:underline">Following</p>
                </div>
            </DialogTrigger>


            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Followers</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">

                    {
                        followings?.map((following) => (
                            <div key={following._id} className="flex items-center gap-2">
                                <AvatarDisplay className={'w-10 h-10'}
                                               profilePic={following.profilePic}
                                               username={following.username} />
                                <p>You are following {following.username}</p>
                            </div>
                        ))
                    }

                </div>
            </DialogContent>
        </Dialog>
    )


}