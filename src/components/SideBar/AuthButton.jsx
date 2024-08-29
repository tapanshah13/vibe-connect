
import Link from "next/link";
import {signOut} from "next-auth/react";


export default function AuthButton({session}){


    return (
        session ? (
                <Link
                    className={"mt-auto flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all dark:text-gray-400 dark:hover:text-gray-100 hover:text-gray-900"}
                    onClick={() => signOut({redirect: false})}
                    href={"/login"}>
                    <LogOutIcon className={"h-4 w-4"} />
                    Log out
                </Link>
            )
            :
            (
                <Link
                    className={"mt-auto flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all dark:text-gray-400 dark:hover:text-gray-100 hover:text-gray-900"}
                    href={"/login"}>
                    <LogOutIcon className={"h-4 w-4"} />
                    Log in
                </Link>
            )
    )
}


function LogOutIcon(props) {
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
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
    )
}

