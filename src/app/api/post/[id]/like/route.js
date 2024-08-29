
import connectDB from "@/lib/dbConnect";
import Post from "@/models/Post";
import {NextResponse} from "next/server";
import { ObjectId } from 'bson';

export const GET = async (_, {params}) => {

    await connectDB();
    const postID = params.id;

    try {

        const {likes: likeList} = await Post.findById(postID)
            .populate({path: 'likes'})
            .populate('likes')

        return NextResponse.json({likeList, status: 200});
    } catch (error) {
        return NextResponse.json({ message: error.message,  status: 500});
    }

}

export const POST = async (req, {params}) => {

    await connectDB();

    const userData = await req.json();
    const postID = params.id;

    try {
        const post = await Post.findById(postID);

        if (!post){
            return NextResponse.json({ error: "Unable to like Post", status: 500 });
        }

        const uniqueLikes = new Set(post.likes.map(userId => {
            return userId.toString()
        }));

        const hasLiked = uniqueLikes.has(userData.userId);

        if (hasLiked) {
            uniqueLikes.delete(userData.userId);
        } else {
            uniqueLikes.add(userData.userId);
        }

        post.likes = Array.from(uniqueLikes);
        await post.save();

        return NextResponse.json({ message: 'Post like successfully', status: 200 });

    } catch (error) {
        return NextResponse.json({ message: error.message,  status: 500});
    }

}