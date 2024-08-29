
import {getAccountProfile} from "@/lib/profileFunctions/actions";
import ProfileSection from "@/components/Profile/ProfileSection";
import {notFound} from "next/navigation";

export default async function ProfilePage({params}){

    const {userid} = params;
    const {dbUser, status} = await getAccountProfile(userid);

    return (
        !dbUser || status !== 200 ? notFound() : (
            <ProfileSection userprofile={dbUser} otherUserID={userid}/>
        )
    )
}