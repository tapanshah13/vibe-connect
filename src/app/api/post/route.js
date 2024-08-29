
import connectDB from "@/lib/dbConnect";
import Post from "@/models/Post";
import {NextResponse} from "next/server";
import User from "@/models/User";
import {getToken} from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET

export const GET = async (req, res) => { // get all post

    try {

        await connectDB();
        const token = await getToken({ req, secret })

        const allPosts = await Post.find().populate('user').sort({createdAt: -1})

        return NextResponse.json({ token: token, posts: allPosts, status: 200 });

    } catch (error) {
        console.error('Error fetching posts:', error.message);

        return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    }

}

export const POST = async (req) => { // create post

    await connectDB();
    const postData = await req.json();

    try {

        const newPost = new Post({
            ...postData
        });

        await User.updateOne(
            {_id: postData.user},
            { $inc: { "postCount": 1 } }
        )

        await newPost.save();

        return NextResponse.json({message: "Post Created Successfully" ,  status: 200 });

    } catch (error) {

        console.error(error);
        return NextResponse.json({message: "Couldn't Create Post" ,  status: 500 });
    }

}