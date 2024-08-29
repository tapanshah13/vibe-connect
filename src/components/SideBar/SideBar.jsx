

import SideLinks from "@/components/SideBar/SideLinks";

export default function SideBar() {
    return (
        <div key="1" className="grid min-h-screen lg:grid-cols-[270px_1fr]">
            <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-[60px] items-center border-b px-6">
                        <h1 className="flex items-center gap-2 font-semibold">
                            <UserIcon className="h-6 w-6" />
                            <span className="">VibeConnect</span>
                        </h1>
                    </div>

                    <div className="flex-1 overflow-auto py-2">
                        <SideLinks />
                    </div>

                </div>
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

