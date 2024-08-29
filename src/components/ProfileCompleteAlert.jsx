
"use client"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function ProfileCompleteAlert({dataConfirm, page}) {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const {username, bio} = dataConfirm;
    return (
        <Dialog open={(!username || !bio) && isClient}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={"mb-2"}>Complete your profile</DialogTitle>
                    <DialogDescription>
                        Please navigate to the settings page to complete your profile before accessing the rest of the content.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Link href={"/setting"}>
                            <Button>Navigate to Settings</Button>
                        </Link>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
