
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import AvatarDisplay from "@/components/AvatarDisplay";


export default function FollowerList({followers}){

    return (
        <Dialog>

            <DialogTrigger asChild className={"w-fit group hover:cursor-pointer"}>
                <div>
                    <h3 className="font-bold">{followers.length}</h3>
                    <p className="text-gray-500 dark:text-gray-400 group-hover:underline">Followers</p>
                </div>
            </DialogTrigger>


            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Followers</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">

                    {
                        followers?.map((follower) => (
                            <div key={follower._id} className="flex items-center gap-2">
                                <AvatarDisplay className={'w-10 h-10'}
                                               profilePic={follower.profilePic}
                                               username={follower.username} />
                                <p>{follower.username} followed you</p>
                            </div>
                        ))
                    }

                </div>
            </DialogContent>
        </Dialog>
    )


}