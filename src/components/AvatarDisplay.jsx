
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {LiaSpinnerSolid} from "react-icons/lia";
import {cn} from "@/lib/utils";

const AvatarDisplay = ({profilePic, username, className}) => {

    return (
        <>
            {
                profilePic ?
                    (
                        <Avatar className={cn("w-28 h-28 border", className)}>
                            <AvatarImage
                                alt="User"
                                src={profilePic}
                                className={"object-cover"}
                            />
                            <AvatarFallback>{<LiaSpinnerSolid className={"w-7 h-7 animate-spin"}/>}</AvatarFallback>
                        </Avatar>
                    )
                    :
                    <Avatar className={cn("w-28 h-28 border", className)}>
                        <AvatarFallback className={"text-3xl font-bold"}>{username[0]}</AvatarFallback>
                    </Avatar>
            }
        </>
    )

}

export default AvatarDisplay;