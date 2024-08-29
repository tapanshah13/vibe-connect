
import {Input} from "@/components/ui/input";
import FormButton from "@/components/FormButton";
import {RxUpdate} from "react-icons/rx";
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";


export default function SettingSkeleton(){

    return (
        <div className={"animate-pulse"}>
            <Avatar className={"w-28 h-28 border"}>
                <AvatarFallback className={"text-2xl font-bold"}></AvatarFallback>
            </Avatar>

            <div className="mt-2">
                <label className="w-fit block text-gray-700 font-semibold text-sm mb-2" htmlFor="profilePic">
                    Change Profile Picture
                </label>
                <Input
                    name={"profilePic"}
                    type="file"
                    id="profilePic"
                    accept="image/*"
                />
            </div>

            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Username</label>
                <div className="h-9 bg-gray-200 rounded-md dark:bg-gray-700 mt-1"></div>
            </div>

            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Bio</label>
                <div className=" h-9 bg-gray-200 rounded-md dark:bg-gray-700 mt-1"></div>
            </div>

            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                <div className=" h-9 bg-gray-200 rounded-md dark:bg-gray-700 mt-1"></div>
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Account Created</label>
                <div className="h-9 bg-gray-200 rounded-md dark:bg-gray-700 mt-1"></div>
            </div>

            <FormButton icon={<RxUpdate />} className={"mt-4"} text={"Save Changes"} disable={false}/>

        </div>
    )

}