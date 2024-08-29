
import SettingForm from "@/components/Setting/SettingForm";
import {getAccountProfile} from "@/lib/profileFunctions/actions";
import {redirect} from "next/navigation";


export default async function SettingPage(){

    const user = await getAccountProfile()

    if (!user?.dbUser){
        redirect("/login")
    }

    return (
        <SettingForm formData={user?.dbUser}/>
    )

}