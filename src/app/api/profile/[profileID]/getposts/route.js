
import connectDB from "@/lib/dbConnect";
import {NextResponse} from "next/server";
import Post from "@/models/Post";


export const GET = async (_, {params}) => {

    await connectDB();
    const {profileID} = params;

    try {

        const userPosts = await Post.find({user: profileID}).populate('user').sort({createdAt: -1})

        return NextResponse.json({userPosts, status: 200})
    } catch (error) {
        return NextResponse.json({error: "Couldn't get user posts", status: 500})
    }
}