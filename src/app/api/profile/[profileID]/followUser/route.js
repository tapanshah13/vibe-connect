
import connectDB from "@/lib/dbConnect";
import User from "@/models/User";
import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";


export const POST = async (req, {params}) => {

    await connectDB();
    const {userID} = await req.json()
    const { profileID: otherProfile } = params;

    try {

        const [otherUser, selfUser] = await Promise.all([
            User.findById(otherProfile),
            User.findById(userID)
        ]);

        if (!otherUser || !selfUser){
            return NextResponse.json({ error: "Unable to find User", status: 500 });
        }

        const uniqueFollowTrack = new Set(otherUser.followers.map(userId => userId.toString()));
        const uniqueFollowingTrack = new Set(selfUser.following.map(userId => userId.toString()));

        const hasFollowed = uniqueFollowTrack.has(userID) && uniqueFollowingTrack.has(otherProfile);

        if (hasFollowed) {
            uniqueFollowTrack.delete(userID);
            uniqueFollowingTrack.delete(otherProfile);
        } else {
            uniqueFollowTrack.add(userID);
            uniqueFollowingTrack.add(otherProfile);
        }

        otherUser.followers = Array.from(uniqueFollowTrack);
        selfUser.following = Array.from(uniqueFollowingTrack)

        await Promise.all([
            otherUser.save(),
            selfUser.save()
        ]);

        return NextResponse.json({ message: 'User followed successfully', status: 200 });

    } catch (error) {
        return NextResponse.json({ message: 'Please try again later', status: 500 });
    }



}