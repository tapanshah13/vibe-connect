

import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import CreatePostForm from "@/components/CreatePost/CreatePostForm";
import {useState} from "react";
import ProfileCompleteAlert from "@/components/ProfileCompleteAlert";

function CreatePostClient({dataValidate}){ //h-scrren

    const [open, setOpen] = useState(false);
    const closeDialog = () => {
        setOpen(false);
    }

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button size="sm" variant="outline">
                        <PlusIcon className="h-5 w-5 mr-1" />
                        <span className={"lg:block hidden"}>Create Post</span>
                    </Button>
                </DialogTrigger>

                <DialogContent className={"rounded-md lg:h-fit"}>
                    <DialogHeader>
                        <DialogTitle>Create a New Post</DialogTitle>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <CreatePostForm userValidate={dataValidate} closeModal={closeDialog} />
                    </div>
                </DialogContent>
            </Dialog>

        </>
    )


}

export default CreatePostClient;


function PlusIcon(props) {
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}