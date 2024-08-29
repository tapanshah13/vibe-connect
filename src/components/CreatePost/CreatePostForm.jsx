
"use client"

import ImageLoad from "@/components/PostCard/ui/ImageLoad";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {createPostData} from "@/lib/postFunctions/actions";
import {firebaseUploadImage} from "@/firebase/actions";
import { BsFillSendPlusFill } from "react-icons/bs";
import {useSession} from "next-auth/react";
import toast from "react-hot-toast";
import FormButton from "@/components/FormButton";
import { v4 as uuidv4 } from 'uuid';

const CreatePostForm = ({closeModal, userValidate}) => {

    const { username, bio } = userValidate;
    const { data: { user: { id: userId } } } = useSession();
    const [postImage, setPostImage] = useState("")
    const [postForm, setPostForm] = useState({
        caption: "",
        image: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        const sanitizedValue = value.replace(/(\r\n|\n|\r)/gm, "");

        setPostForm({
            ...postForm,
            [name]: sanitizedValue,
        });
    };

    const setImageFile = (imageFile) => {
        setPostImage(imageFile);
    };


    const createPostHandler = async () => {

        const uniqueIdentifier = uuidv4();

        if (postImage && postForm.caption){

            let imageURL = postForm.image;
            imageURL  = await firebaseUploadImage('posts',userId, postImage, uniqueIdentifier);

            const response = await createPostData({...postForm, image: imageURL});

            switch (response.status){
                case 200:
                    toast.success(response.message);
                    closeModal();
                    break;
                case 500:
                    toast.error(response.message);
                    break;
            }
        }

    }

    const isFormComplete = postImage && postForm.caption
    const isUserComplete = username && bio;
    const userInfoValidate = isUserComplete ? "Submit" : "Please complete your setting first"

    return (
        <>
            <form className={"flex flex-col gap-3"} action={createPostHandler}>

                <ImageLoad disabled={!isUserComplete} imageSet={setImageFile}/>

                <div className="space-y-2">
                    <Label htmlFor="post-content">Describe your post</Label>
                    <Textarea disabled={!isUserComplete} name={"caption"} value={postForm.caption} onChange={handleInputChange} autoComplete="off" className={"resize-none h-32 sm:h-20 lg:h-32"} id="post-content" placeholder="Enter post content" />
                </div>

                <FormButton className={!isUserComplete ? "bg-red-500" : null} text={userInfoValidate} disable={isFormComplete && isUserComplete} icon={<BsFillSendPlusFill size={20}/>}/>
            </form>
        </>
    )
}

export default CreatePostForm;
