
"use client"
import {Button} from "@/components/ui/button";
import {useFormStatus} from "react-dom"
import { LiaSpinnerSolid } from "react-icons/lia";
import {cn} from "@/lib/utils";
import React from 'react'

const FormButton = ({text, disable, icon, className}) => {

    const formStats = useFormStatus();
    const { pending } = formStats;

    return (
        <Button
            disabled={!disable || pending}
            type={"submit"}
            className={cn("w-full flex justify-center items-center bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-200", className)}
            variant="solid"
        >
            {pending ?
                <LiaSpinnerSolid size={20} className={"mr-2 animate-spin"}/>
                :
                React.cloneElement(icon, { className: "h-4 w-4 mr-2" })
            }

            {text}
        </Button>
    )
}

export default FormButton;
