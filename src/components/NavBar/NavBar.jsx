
import {Input} from "@/components/ui/input";
import {ThemeToggle} from "@/components/ThemeToggle/ThemeToggle";
import MenuToggle from "@/components/SideBar/SideBarMenuToggle/MenuToggle";
import CreatePost from "@/components/CreatePost/CreatePost";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getAccountProfile} from "@/lib/profileFunctions/actions";


const NavBar = async () => {

    const user = await getAccountProfile();

    return (
        <nav className="flex p-4 h-14 lg:h-[60px] items-center justify-between gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <form className={"lg:w-1/2 md:w-1/2 w-full"}>
                <div className="relative">
                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input
                        className="bg-white shadow-none appearance-none pl-8 dark:bg-gray-950"
                        placeholder="Search users or posts..."
                        type="search"
                    />
                </div>
            </form>

            <div className={"flex items-center gap-2"}>

                <CreatePost dataValidate={user?.dbUser}/>
                <div className={"lg:flex hidden"}>
                    <ThemeToggle />
                </div>
                <MenuToggle />
            </div>
        </nav>

    )

}
export default NavBar;

function SearchIcon(props) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}

