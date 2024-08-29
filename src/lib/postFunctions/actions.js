
"use server"

import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {revalidateTag} from "next/cache";
import {redirect} from "next/navigation";

export const createPostData = async (postData) => {

    const {user} = await getServerSession(authOptions);

    try{

        const res = await fetch(`${process.env.FETCH_URL}/api/post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...postData,
                user: user.id,
            })
        });

        revalidateTag('homePost')
        return await res.json()
    } catch (error){
        console.error('Error creating post:', error.message);
    }

}


export const likePostHandler = async (postCardID) => {

    const {user} = await getServerSession(authOptions);

    try {

        const res = await fetch(`${process.env.FETCH_URL}/api/post/${postCardID}/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: user.id
            })
        });

        revalidateTag(`postLikeList-${postCardID}`)
        return await res.json()

    } catch (error) {
        console.log(error)
    }
}


export const deletePostHandler = async (deletePostID, postUserID) => {
    const res = await fetch(`${process.env.FETCH_URL}/api/post/${deletePostID}/delete/${postUserID}`, {
        method: 'DELETE'
    })

    revalidateTag("homePost")
    revalidateTag(`profileData`)
    return await res.json();
}

