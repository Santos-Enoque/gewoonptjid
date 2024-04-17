'use client'

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../avatar";

const UserMenu = () => {
    
    return <div className="relative">
        <div className="flex flex-row items-center gap-3">
            <div onClick={() => { }}
                className="
        hidden
        md:block
        text-sm
        font-semibold
        py-4
        px-3
        hover:bg-neutral-100
        rounded-full
        trasition
        cursor-pointer
        "
            >
                Register Saloon
            </div>
            <div onClick={() => { }}
                className="
            p-4
            md:py-2
            md:px-1
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            "
            >
                <AiOutlineMenu />
                <div className="hidden md:block">
                    <Avatar />
                </div>
            </div>
        </div>
    </div>
}

export default UserMenu;