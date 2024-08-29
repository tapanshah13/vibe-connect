import {LiaSpinnerSolid} from "react-icons/lia";


export default function Loading () {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-[400px] py-6 space-y-4">

            <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Loading...</h1>
                    <p className="text-gray-500 dark:text-gray-400">Please wait while we connect you.</p>
                </div>
                <LiaSpinnerSolid className={"w-10 h-10 animate-spin"}/>
            </div>
        </div>
    )
}

function UserIcon(props) {
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}