import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { signOut, useSession } from "next-auth/react";
import { Image } from "antd";
import Link from "next/link";
function Header() {
    const { data: session } = useSession();
    const user = session?.user;
    const handleSearch = () => {};

    return (
        <header className="bg-blue-300">
            <div className="container mx-auto font-mono h-20 flex items-center justify-between">
                <Link href={"/"} className="text-white text-2xl no-underline">
                    LOGO
                </Link>

                <div>
                    <Input
                        placeholder="Search"
                        // value={searchText}
                        // onChange={handleInputChange}
                        onPressEnter={handleSearch}
                        suffix={<SearchOutlined onClick={handleSearch} />}
                    />
                </div>
                {user ? (
                    <div className="flex items-center space-x-4">
                        <div className="font-source-sans-pro">
                            <h5>{user?.name}</h5>
                            <h5>{user?.email}</h5>
                        </div>
                        <Image
                            src={user?.image!}
                            width={60}
                            height={60}
                            alt="Image"
                            preview={false}
                        />
                        <button
                            className="py-3 px-5 outline-none border-none rounded-lg bg-white cursor-pointer transition-all hover:opacity-75"
                            onClick={() => signOut()}
                        >
                            Log out
                        </button>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </header>
    );
}

export default Header;
