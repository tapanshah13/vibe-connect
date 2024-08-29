
"use server"

import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {revalidatePath, revalidateTag} from "next/cache";


export const getAccountProfile = async (userID) => {

    const session = await getServerSession(authOptions);
    const targetUserID = userID ? userID : session?.user.id;


    try {
        const res = await fetch(`${process.env.FETCH_URL}/api/profile/${targetUserID}`, {
            //cache: 'force-cache',
            next: {
                tags: [`profileData`, `other-profile-${targetUserID}`]
            }
        });

        return await res.json();
    } catch (error) {
        console.log('error', error);
    }
}

export const updateProfile = async (formData) => {

    const {user} = await getServerSession(authOptions);

    try {
        const res = await fetch(`${process.env.FETCH_URL}/api/profile/${user.id}`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({formData}),

        });

        revalidateTag('profileData');
        revalidateTag('homePost');

        return await res.json();
    } catch (error) {
        console.log('error', error);
    }
}



export const getUserPosts = async (userID) => {

    const {user} = await getServerSession(authOptions);
    const targetUserID = userID ? userID : user.id;

    try {
        const res = await fetch(`${process.env.FETCH_URL}/api/profile/${targetUserID}/getposts`, {
            cache: 'no-cache',
            next: {
                tags: [`user-post-${targetUserID}`]
            },
            method: 'GET'
        })

        return await res.json();
    } catch (error) {
        console.log('error', error)
    }
}

export const followUser = async (profileID) => {

    const { user } = await getServerSession(authOptions)
    const response = await fetch(`${process.env.FETCH_URL}/api/profile/${profileID}/followUser`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userID: user.id})
    })

    revalidateTag(`other-profile-${profileID}`)
}
