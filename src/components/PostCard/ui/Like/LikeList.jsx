
import AvatarDisplay from "@/components/AvatarDisplay";


const GetLikeList = async (postID) => {
    const response = await fetch(`${process.env.FETCH_URL}/api/post/${postID}/like`, {
        method: "GET",
        next: {
            tags: [`postLikeList-${postID}`]
        }
    })

    return await response.json();
}

export default async function LikeList({postID}){

    const {likeList} = await GetLikeList(postID)

    return (
        <>
            {
                likeList?.map((likeUser) => (
                    <div key={likeUser._id} className="flex items-center gap-2">
                        <AvatarDisplay className={'w-10 h-10'}
                                       profilePic={likeUser.profilePic}
                                       username={likeUser.username} />
                        <p>{likeUser.username} liked this post</p>
                    </div>
                ))
            }
        </>
    )

}