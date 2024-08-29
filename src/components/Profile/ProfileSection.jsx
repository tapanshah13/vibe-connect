
import AvatarDisplay from "@/components/AvatarDisplay";
import ProfileCompleteAlert from "@/components/ProfileCompleteAlert";
import ProfileTools from "@/components/Profile/ProfileTools";
import FollowerList from "@/components/Profile/FollowerList";
import FollowingList from "@/components/Profile/FollowingList";


export default async function ProfileSection({userprofile, otherUserID}){

    const {username, email, bio, createdAt, profilePic, following, followers, postCount} = userprofile;

    return (

        <>
            <div className="rounded-lg">
                <div >
                    <AvatarDisplay profilePic={profilePic} username={username} />
                    <div className={"mt-4"}>
                        <h2 className="font-semibold text-lg">@{username}</h2>
                        <p className="mt-1 text-gray-500 dark:text-gray-400">
                            Bio: {bio}
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 my-4">

                        <FollowingList followings={following} />

                        <FollowerList followers={followers}/>

                        <div>
                            <h3 className="font-bold">{postCount}</h3>
                            <p className="text-gray-500 dark:text-gray-400">Posts</p>
                        </div>

                    </div>

                    <div className="flex items-center gap-4 mt-4 mb-4">
                        <ProfileTools followers={followers} otherUserID={otherUserID}/>
                    </div>
                </div>
            </div>

            <ProfileCompleteAlert dataConfirm={userprofile}/>
        </>
    )

}


function SettingsIcon(props) {
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
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}