
"use client"

import CreatePostClient from "@/components/CreatePost/CreatePostClient";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";

const CreatePost = ({dataValidate}) => {

    const { data: sessionData } = useSession();
    const [isSessionActive, setIsSessionActive] = useState(Boolean(sessionData));

    useEffect(() => {
        setIsSessionActive(Boolean(sessionData));
    }, [sessionData]);

    return (isSessionActive) ? <CreatePostClient session={sessionData} dataValidate={dataValidate}/> : null ;
}

export default CreatePost;
