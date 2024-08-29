
"use client"

import {Input} from "@/components/ui/input";
import {useState} from "react";
import { updateProfile} from "@/lib/profileFunctions/actions";
import FormButton from "@/components/FormButton";
import toast from "react-hot-toast";
import {firebaseUploadImage} from "@/firebase/actions";
import AvatarDisplay from "@/components/AvatarDisplay";
import { RxUpdate } from "react-icons/rx";
import {useRouter} from "next/navigation";

function SettingForm({formData}) {

    const [imageFile, setImageFile] = useState(null);
    const {_id, username, email, bio, createdAt, profilePic } = formData;
    const [formValue, setFormValue] = useState({
        username,
        email,
        bio,
        createdAt,
        profilePic
    })

    const handleProfilePicChange = async (event) => {
        const imageFile = event.target.files[0];

        if (imageFile?.size <= 10 * 1024 * 1024) {
            setImageFile(imageFile);
            //toast.success("Image has been saved.")
        }else {
            toast.error("Sorry, Image too big.")
        }
    };

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const handleSubmitChanges = async () => {

        if (formValue.username.length === 0 || formValue.bio.length === 0) {
            toast.error("Please fill out the username and bio");
            return;
        }

        let imageURL = formValue.profilePic;

        if (imageFile){
            imageURL  = await firebaseUploadImage('profile', _id, imageFile);
        }

        const response = await updateProfile({...formValue, profilePic: imageURL})

        switch (response.status) {
            case 200:
                toast.success(response.message)
                break;
            case 500:
                toast.error(response.error)
                break;
        }


    }

        const isFormDirty = () => {
        return (
            formValue.username !== username ||
            formValue.bio !== bio
            || imageFile
        );
    };

    return (
        <>
            <form action={handleSubmitChanges}>

                <AvatarDisplay profilePic={profilePic} username={username} />

                <div className="mt-2">
                    <label className="w-fit block text-gray-700 font-semibold text-sm mb-2" htmlFor="profilePic">
                        Change Profile Picture
                    </label>
                    <Input
                        onChange={handleProfilePicChange}
                        name={"profilePic"}
                        type="file"
                        id="profilePic"
                        accept="image/*"
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Username</label>
                    <Input onChange={handleInputChange} name={"username"} defaultValue={formValue.username} className="mt-1 block w-full" placeholder="Username" type="text" />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Bio</label>
                    <Input onChange={handleInputChange} name={"bio"} defaultValue={formValue.bio} className="mt-1 block w-full" placeholder="Bio" type="text" />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                    <Input disabled defaultValue={formValue.email} className="mt-1 block w-full" placeholder="Email" type="email" />
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Account Created</label>
                    <Input disabled defaultValue={formValue.createdAt.split('T')[0]} className="mt-1 block w-full" placeholder="Account Created" type="date" />
                </div>

                <FormButton icon={<RxUpdate />} className={"mt-4"} text={"Save Changes"} disable={isFormDirty()}/>

            </form>
        </>
    )

}

export default SettingForm;