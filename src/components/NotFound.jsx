
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-[400px] py-6 space-y-4">
            <div className="flex items-center justify-center p-8 rounded-full bg-gray-100">
                <UserIcon className="w-10 h-10 text-gray-500" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Profile Not Found</h1>
                    <p className="text-gray-500 dark:text-gray-400">This user does not exist. Maybe the link is broken?</p>
                </div>
                <Link
                    className="inline-flex h-9 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="/"
                >
                    Return to the homepage
                </Link>
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