
import PostCard from "@/components/PostCard/PostCard";
import {getUserPosts} from "@/lib/profileFunctions/actions";


export default async function ProfilePosts({userID}){

    const profilePost = await getUserPosts(userID);
    const profileData = profilePost?.userPosts

    return (
        <>
            {
                profileData?.map((post) => (
                    <PostCard key={post._id} postData={post}/>
                ))
            }
        </>
    );

}