import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Login() {
    const { data: session } = useSession();
    const router = useRouter();
    if (session) {
        router.push("/");
        return <></>;
    } else {
        return (
            <div className="flex h-screen bg-blue-200 justify-center items-center">
                <div className="w-[300px] flex justify-center items-center">
                    <button
                        onClick={() => {
                            signIn();
                        }}
                        className="py-4 px-8 outline-none border-none rounded-lg bg-white cursor-pointer transition-all hover:opacity-75"
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }
}

export default Login;
