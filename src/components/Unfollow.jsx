
import {Button} from "@/components/ui/button";
import {AlertDialog} from "@/components/ui/alert-dialog";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";


export default function Unfollow(){

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className={"text-red-500 hover:text-red-700"}>
                    <UserXIcon className="w-4 h-4 mr-2" />
                    Unfollow
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Unfollow User</DialogTitle>
                    <DialogDescription>Are you sure you want to unfollow this user?</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant={"destructive"}>Unfollow</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

}



function UserXIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="17" x2="22" y1="8" y2="13" />
            <line x1="22" x2="17" y1="8" y2="13" />
        </svg>
    )
}