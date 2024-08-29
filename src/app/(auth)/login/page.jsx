
"use client"
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {useState} from "react";
import FormButton from "@/components/FormButton";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import toast, {Toaster} from "react-hot-toast";

export default function Login(){

    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const loginHandler = async () => {

        const {email, password} = formData;

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        }).then((res) => {
            if (res?.error) {
                toast.error( "Invalid email or password" );
            } else {
                toast.success('Successfully logged in')

                router.replace("/setting")
                router.refresh();
            }
        })
    }

    const isFormValid = formData.email.trim() !== "" && formData.password.trim() !== "";

    return (
        <main className="flex flex-1 flex-col gap-4">
            <div className="rounded-lg">
                <div className="p-4">
                    <h2 className="font-semibold text-lg">Login to your account</h2>
                    <form action={loginHandler}>
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                            <Input value={formData.email} onChange={handleInputChange} className="mt-1 block w-full" name={"email"} placeholder="Email" type="text" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
                            <Input value={formData.password} onChange={handleInputChange} className="mt-1 block w-full" name={"password"} placeholder="Password" type="password" />
                        </div>
                        <div className="mt-4">
                            <FormButton text={"Login"} disable={isFormValid} icon={<LogInIcon />}/>
                        </div>

                        <div className="mt-4 text-center">
                            {"Don't have account?"}
                            <Link
                                className="ml-2 underline text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-50"
                                href={"/register"}
                            >
                                Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )


}


function LogInIcon(props) {
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
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" x2="3" y1="12" y2="12" />
        </svg>
    )
}
